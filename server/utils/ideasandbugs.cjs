/**
 * Ideas + Bugs reporter for Node. No dependencies, works from CommonJS and ESM.
 *
 *   const ib = require('./ideasandbugs.cjs')      // CommonJS
 *   import ib from './ideasandbugs.cjs'           // ESM (default interop)
 *
 *   ib.install()                       // process-level crashes + console.error
 *   app.use(ib.expressErrors())        // Express, AFTER your routes
 *
 * Two rules it exists to honour, same as the PHP one:
 *
 *   1. Reporting must never make the caller's problem worse. Every failure in
 *      here is swallowed, the request is never blocked, and a slow hub can
 *      never become the app's latency.
 *   2. Nothing sensitive leaves the box. Context is scrubbed by key name and
 *      by value shape before it is sent, and again at the hub.
 */

const HUB = process.env.IB_URL || 'http://ib-hub';
const KEY = process.env.IB_KEY || '';
const RELEASE = process.env.IB_RELEASE || '';
const ENV = process.env.NODE_ENV || 'production';

/**
 * A crash loop must not become a flood. Beyond this many events a minute the
 * reporter goes quiet and counts what it dropped, so the hub keeps working and
 * the next successful report says how much was missed.
 */
const PER_MINUTE = 40;
let budget = { minute: 0, sent: 0, dropped: 0 };

const enabled = () => Boolean(KEY);

const SECRET = /(pass|secret|token|key|authorization|auth|cookie|session|credit|card|cvv|ssn|email|phone)/i;
const LOOKS_LIKE_CREDENTIAL = /\b(sk-|ib_|Bearer\s|eyJ[\w-]{10,})/;

function scrub(value, depth = 0) {
  if (value === null || depth > 4) return value;
  if (Array.isArray(value)) return value.slice(0, 20).map((v) => scrub(v, depth + 1));
  if (typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value).slice(0, 30)) {
      out[k] = SECRET.test(k) ? '[redacted]' : scrub(v, depth + 1);
    }
    return out;
  }
  if (typeof value === 'string') {
    if (LOOKS_LIKE_CREDENTIAL.test(value)) return '[redacted]';
    return value.length > 1000 ? value.slice(0, 1000) + '…' : value;
  }
  if (typeof value === 'function') return '[function]';
  return value;
}

/** Our own frames only — vendor noise makes every trace look the same. */
function frames(err) {
  if (!err || !err.stack) return [];
  return String(err.stack)
    .split('\n')
    .slice(1)
    .filter((l) => !l.includes('node_modules') && !l.includes('node:internal'))
    .slice(0, 8)
    .map((l) => l.trim());
}

function withinBudget() {
  const minute = Math.floor(Date.now() / 60000);
  if (budget.minute !== minute) budget = { minute, sent: 0, dropped: 0 };
  if (budget.sent >= PER_MINUTE) {
    budget.dropped++;
    return false;
  }
  budget.sent++;
  return true;
}

function send(event) {
  if (!enabled() || !withinBudget()) return;

  const body = {
    ...event,
    environment: ENV,
    release: RELEASE || undefined,
    occurred_at: new Date().toISOString(),
    context: { ...scrub(event.context || {}), via: 'sdk', runtime: 'node' },
  };
  if (budget.dropped) {
    body.context.dropped_this_minute = budget.dropped;
  }

  // Fire and forget on a short leash. Never awaited by the caller, never
  // allowed to reject, and it must not hold the process open at shutdown.
  try {
    const stop = AbortSignal.timeout ? AbortSignal.timeout(3000) : undefined;
    const p = fetch(`${HUB.replace(/\/$/, '')}/api/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Ib-Key': KEY },
      body: JSON.stringify(body),
      signal: stop,
    });
    p.then(() => {}, () => {});
    if (p && typeof p.catch === 'function') p.catch(() => {});
  } catch {
    // Swallowed on purpose. A broken reporter must stay invisible.
  }
}

/** Something threw. */
function fault(err, context = {}) {
  const e = err instanceof Error ? err : new Error(String(err));
  const top = frames(e)[0] || '';
  send({
    kind: 'fault',
    level: 'error',
    message: `${e.name}: ${e.message}`,
    culprit: top.replace(/^at\s+/, '').slice(0, 200) || undefined,
    context: { ...context, trace: frames(e) },
  });
}

/** Something is repeating that should not be. */
function degradation(message, context = {}) {
  send({ kind: 'degradation', level: 'warning', message: String(message), context });
}

/** An assertion about the world came back false. */
function invariant(key, says, context = {}) {
  send({ kind: 'invariant', level: 'error', fingerprint: `invariant:${key}`, title: says, message: says, context });
}

/**
 * Hook the runtime.
 *
 * `console` capture is on by default and is the point: in a Node service the
 * equivalent of Laravel's Log::warning is almost always a console.error nobody
 * reads, and those are exactly the failures that never throw.
 */
function install({ console: captureConsole = true, crashes = true } = {}) {
  if (!enabled() || install.done) return;
  install.done = true;

  if (crashes) {
    process.on('uncaughtException', (err) => fault(err, { hook: 'uncaughtException' }));
    process.on('unhandledRejection', (reason) => fault(reason, { hook: 'unhandledRejection' }));
  }

  if (captureConsole) {
    for (const [method, level] of [['error', 'error'], ['warn', 'warning']]) {
      const original = console[method].bind(console);
      console[method] = (...args) => {
        original(...args);
        try {
          const first = args[0];
          if (first instanceof Error) return fault(first, { via_console: method });
          const text = args.map((a) => (typeof a === 'string' ? a : safe(a))).join(' ');
          // Never report our own chatter, or one failure to report becomes an
          // unbounded loop of failures to report.
          if (text.includes('[ib]')) return;
          send({ kind: 'degradation', level, message: text.slice(0, 4000), context: { via_console: method } });
        } catch {
          /* never let logging break logging */
        }
      };
    }
  }
}

function safe(v) {
  try {
    return JSON.stringify(scrub(v));
  } catch {
    return String(v);
  }
}

/** Express error middleware. Mount it AFTER your routes. */
function expressErrors() {
  return (err, req, _res, next) => {
    try {
      fault(err, { method: req?.method, path: req?.route?.path || req?.path, status: err?.status });
    } catch {
      /* reporting must not replace the error being reported */
    }
    next(err);
  };
}

module.exports = { install, fault, degradation, invariant, expressErrors, enabled };
