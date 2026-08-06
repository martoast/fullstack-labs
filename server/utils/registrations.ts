import { DatabaseSync } from 'node:sqlite'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Registration store — SQLite, via Node's built-in `node:sqlite`.
 *
 * No dependency and no native build: the module ships with Node 22 (verified
 * on node:22-alpine, the deploy image). It only prints an ExperimentalWarning.
 *
 * Before this, a registration existed solely as an email in Alex's inbox,
 * which meant reminders had nobody to send to. The DB file lives on a Docker
 * volume — the container is disposable, this file is not.
 */

export interface Registration {
  email: string
  name: string | null
  business: string | null
  created_at: string
}

let db: DatabaseSync | null = null

function conn(): DatabaseSync {
  if (db) return db
  const dir = process.env.NUXT_WEBINAR_DATA_DIR || '/data'
  mkdirSync(dir, { recursive: true })
  db = new DatabaseSync(join(dir, 'webinar.sqlite'))
  db.exec(`
    CREATE TABLE IF NOT EXISTS registrations (
      email        TEXT PRIMARY KEY,
      name         TEXT,
      business     TEXT,
      created_at   TEXT NOT NULL,
      unsubscribed INTEGER NOT NULL DEFAULT 0
    );
    -- One row per (person, session, reminder), so re-running a blast can
    -- never send the same reminder twice.
    CREATE TABLE IF NOT EXISTS reminders_sent (
      email        TEXT NOT NULL,
      session_date TEXT NOT NULL,
      kind         TEXT NOT NULL,
      sent_at      TEXT NOT NULL,
      PRIMARY KEY (email, session_date, kind)
    );
  `)
  return db
}

/** Upsert. Never blanks an existing name/business with an empty later value. */
export function recordRegistration(entry: {
  email: string
  name?: string
  business?: string
}): void {
  conn()
    .prepare(
      `INSERT INTO registrations (email, name, business, created_at)
       VALUES (?, ?, ?, ?)
       ON CONFLICT(email) DO UPDATE SET
         name     = COALESCE(NULLIF(excluded.name, ''), registrations.name),
         business = COALESCE(NULLIF(excluded.business, ''), registrations.business)`
    )
    .run(entry.email, entry.name || null, entry.business || null, new Date().toISOString())
}

/** Everyone still subscribed. */
export function activeRegistrations(): Registration[] {
  return conn()
    .prepare(
      `SELECT email, name, business, created_at
         FROM registrations
        WHERE unsubscribed = 0
        ORDER BY created_at`
    )
    .all() as unknown as Registration[]
}

/** Subscribers who have not yet received this reminder for this session. */
export function pendingForReminder(sessionDate: string, kind: string): Registration[] {
  return conn()
    .prepare(
      `SELECT r.email, r.name, r.business, r.created_at
         FROM registrations r
        WHERE r.unsubscribed = 0
          AND NOT EXISTS (
            SELECT 1 FROM reminders_sent s
             WHERE s.email = r.email AND s.session_date = ? AND s.kind = ?
          )
        ORDER BY r.created_at`
    )
    .all(sessionDate, kind) as unknown as Registration[]
}

export function markReminderSent(email: string, sessionDate: string, kind: string): void {
  conn()
    .prepare(
      `INSERT OR IGNORE INTO reminders_sent (email, session_date, kind, sent_at)
       VALUES (?, ?, ?, ?)`
    )
    .run(email, sessionDate, kind, new Date().toISOString())
}

export function unsubscribe(email: string): void {
  conn().prepare(`UPDATE registrations SET unsubscribed = 1 WHERE email = ?`).run(email)
}

export function stats(): { total: number; active: number } {
  const row = conn()
    .prepare(
      `SELECT COUNT(*) AS total,
              SUM(CASE WHEN unsubscribed = 0 THEN 1 ELSE 0 END) AS active
         FROM registrations`
    )
    .get() as any
  return { total: Number(row?.total ?? 0), active: Number(row?.active ?? 0) }
}
