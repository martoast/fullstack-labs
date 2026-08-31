#!/usr/bin/env node
/**
 * Unmatched paths (bot probes like /img/about.php) must 404 cleanly.
 *
 * Every `console.warn` from the SSR server is shipped to the Ideas + Bugs
 * hub by server/plugins/ideasandbugs.ts, so a Vue Router "No match found"
 * warning on each probe becomes a fresh warning event. This test starts the
 * built server, requests a path that has never existed, and fails if the
 * server warns — or if the response is not a 404, or if a real page broke.
 *
 * Run `yarn build` first, then `node scripts/test-unmatched-path.mjs`.
 */
import { spawn } from 'node:child_process'
import { createServer } from 'node:http'
import { setTimeout as sleep } from 'node:timers/promises'

const PORT = process.env.TEST_PORT || '4173'
const HUB_PORT = process.env.TEST_HUB_PORT || '4174'
const BASE = `http://127.0.0.1:${PORT}`

// Stub hub: anything the reporter would ship for the probe lands here.
const shipped = []
const hub = createServer((req, res) => {
  let body = ''
  req.on('data', (d) => { body += d })
  req.on('end', () => {
    try { shipped.push(JSON.parse(body)) } catch { shipped.push({ raw: body }) }
    res.writeHead(202).end('{}')
  })
})
await new Promise((resolve) => hub.listen(HUB_PORT, '127.0.0.1', resolve))

const server = spawn('node', ['.output/server/index.mjs'], {
  env: {
    ...process.env,
    PORT,
    NITRO_PORT: PORT,
    HOST: '127.0.0.1',
    IB_URL: `http://127.0.0.1:${HUB_PORT}`,
    IB_KEY: 'test-key',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
})

let serverOutput = ''
server.stdout.on('data', (d) => { serverOutput += d })
server.stderr.on('data', (d) => { serverOutput += d })

const failures = []

try {
  // Wait for the server to answer.
  let up = false
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(`${BASE}/`)
      up = true
      break
    } catch {
      await sleep(200)
    }
  }
  if (!up) throw new Error(`server never came up on ${BASE}\n${serverOutput}`)

  const home = await fetch(`${BASE}/`)
  if (home.status !== 200) {
    failures.push(`GET / returned ${home.status}, expected 200`)
  }

  const probe = await fetch(`${BASE}/img/about.php`)
  await probe.text()
  if (probe.status !== 404) {
    failures.push(`GET /img/about.php returned ${probe.status}, expected 404`)
  }

  // Give async console output a moment to flush.
  await sleep(500)

  if (serverOutput.includes('[Vue Router warn]')) {
    const line = serverOutput.split('\n').find((l) => l.includes('[Vue Router warn]'))
    failures.push(`server emitted a router warning for the probe: ${line.trim()}`)
  }

  if (shipped.length) {
    failures.push(`probe shipped ${shipped.length} event(s) to the hub: ` +
      shipped.map((e) => `[${e.level}] ${e.message}`).join(' | '))
  }
} finally {
  server.kill()
  hub.close()
}

if (failures.length) {
  console.error('FAIL')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}
console.log('PASS: unmatched path 404s without a router warning, home page still 200')
