import nodemailer from 'nodemailer'
import { recordRegistration } from '../../utils/registrations'

/**
 * Optional details captured AFTER a registration has already succeeded.
 *
 * Deliberately separate from register.post.ts: this must never send another
 * confirmation, and it must never be able to fail in a way that makes an
 * already-registered person think their signup did not work. The page treats
 * every outcome here as non-blocking.
 */

interface Body {
  email?: string
  name?: string
  business?: string
  website?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const recent = new Map<string, number[]>()
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 10

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  hits.push(now)
  recent.set(ip, hits)
  if (recent.size > 5000) recent.clear()
  return hits.length > MAX_PER_WINDOW
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<Body>(event)

  if (body?.website) return { ok: true } // honeypot

  const email = (body?.email ?? '').trim().slice(0, 200).toLowerCase()
  const name = (body?.name ?? '').trim().slice(0, 120)
  const business = (body?.business ?? '').trim().slice(0, 160)

  // Nothing to report — succeed quietly rather than erroring at someone who
  // has already registered.
  if (!EMAIL_RE.test(email) || (!name && !business)) return { ok: true }

  const ip =
    getRequestHeader(event, 'cf-connecting-ip') ||
    getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  if (rateLimited(ip)) return { ok: true }

  // Store it too, not just email it — the DB row is what reminders address by
  // name. The upsert never blanks fields, so this only ever fills them in.
  try {
    recordRegistration({ email, name, business })
  } catch (err: any) {
    console.error('[webinar] could not persist profile:', { email }, err?.message)
  }

  if (!config.mailHost || !config.mailUser) {
    console.error('[webinar] SMTP not configured — profile NOT emailed:', { email, name, business })
    return { ok: true }
  }

  const transporter = nodemailer.createTransport({
    host: config.mailHost,
    port: Number(config.mailPort || 587),
    secure: false,
    auth: { user: config.mailUser, pass: config.mailPassword }
  })

  const notifyTo = config.webinarNotifyTo || 'alexmartos96@gmail.com'

  try {
    await transporter.sendMail({
      from: `"Fullstack Labs" <${config.mailFrom || config.mailUser}>`,
      to: notifyTo,
      replyTo: email,
      subject: `Datos del registro: ${name || email}${business ? ` (${business})` : ''}`,
      text: [
        'Un registrado completó sus datos después de registrarse.',
        '',
        `Correo:   ${email}`,
        `Nombre:   ${name || '—'}`,
        `Negocio:  ${business || '—'}`,
        `Recibido: ${new Date().toISOString()}`
      ].join('\n')
    })
  } catch (err: any) {
    // Never surface this: the registration itself already succeeded.
    console.error('[webinar] profile email failed:', { email, name, business }, err?.message)
  }

  return { ok: true }
})
