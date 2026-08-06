import { nextSession } from '../../utils/webinar'
import { confirmationEmail } from '../../utils/emails'
import { recordRegistration } from '../../utils/registrations'
import { mailer, mailIdentity } from '../../utils/mailer'

/**
 * Webinar registration.
 *
 * Persists the registrant to SQLite and sends two emails: a confirmation to
 * them and a notification to Alex. The stored row is what the reminder blasts
 * (see send-reminder.post.ts) send to — without it there is no list.
 *
 * The confirmation's CTA is the calendar, not the Meet link: the session is
 * days away, and getting it into their calendar is what makes them show up.
 */

interface Body {
  name?: string
  email?: string
  business?: string
  /** Honeypot — real users never fill this; bots fill everything. */
  website?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Crude per-IP throttle. In-memory, so it resets on deploy — enough to stop
 *  a bored script, and this endpoint only sends mail. */
const recent = new Map<string, number[]>()
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  hits.push(now)
  recent.set(ip, hits)
  if (recent.size > 5000) recent.clear() // crude bound on memory
  return hits.length > MAX_PER_WINDOW
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<Body>(event)

  // Honeypot: accept and drop, so the bot sees success and does not retry.
  if (body?.website) return { ok: true }

  // Email is the ONLY required field — the form asks for one input on purpose.
  // Name and business are still accepted so the endpoint keeps working if they
  // are ever reintroduced, but nothing depends on them being present.
  const name = (body?.name ?? '').trim().slice(0, 120)
  const email = (body?.email ?? '').trim().slice(0, 200).toLowerCase()
  const business = (body?.business ?? '').trim().slice(0, 160)

  if (!EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Escribe un correo válido.' })
  }

  const ip =
    getRequestHeader(event, 'cf-connecting-ip') ||
    getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  if (rateLimited(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Demasiados registros. Intenta más tarde.' })
  }

  const session = nextSession()
  const meetUrl = config.public.webinarMeetUrl as string
  const googleUrl = config.public.webinarGoogleUrl as string

  if (!config.mailHost || !config.mailUser) {
    // Never lose a registration to a mail misconfiguration: log it loudly so
    // it can be recovered from `docker logs`, and tell the user the truth.
    console.error('[webinar] SMTP not configured — registration NOT emailed:', { name, email, business })
    throw createError({ statusCode: 500, statusMessage: 'No pudimos completar el registro. Escríbenos a alexmartos96@gmail.com.' })
  }

  const transporter = mailer()!

  const when = `${session.dateLabel}, ${session.timeLabel} (hora de Tijuana)`

  // Persist BEFORE emailing. A signup that is stored but not emailed can be
  // recovered and re-sent; one that is emailed but not stored is invisible to
  // every reminder that follows. Never let a storage failure reject the
  // registration itself.
  try {
    recordRegistration({ email, name, business })
  } catch (err: any) {
    console.error('[webinar] could not persist registration:', { email }, err?.message)
  }

  const confirmation = confirmationEmail({
    name: name || undefined,
    when,
    dateLabel: session.dateLabel,
    meetUrl,
    googleUrl
  })

  const notificationText = [
    'Nuevo registro al webinar',
    '',
    `Nombre:   ${name || '—'}`,
    `Correo:   ${email}`,
    `Negocio:  ${business || '—'}`,
    `Sesión:   ${when}`,
    `IP:       ${ip}`,
    `Recibido: ${new Date().toISOString()}`
  ].join('\n')

  const { from, replyTo: notifyTo } = mailIdentity()

  try {
    // The registrant's confirmation is the one that must not fail — send it first.
    await transporter.sendMail({
      from,
      to: email,
      replyTo: notifyTo,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text
    })

    await transporter.sendMail({
      from,
      to: notifyTo,
      replyTo: email,
      subject: `Registro webinar: ${name || email}${business ? ` (${business})` : ''}`,
      text: notificationText
    })
  } catch (err: any) {
    // A registration that reached us but could not be emailed is still a lead.
    console.error('[webinar] registration email failed:', { name, email, business }, err?.message)
    throw createError({
      statusCode: 502,
      statusMessage: 'Tu registro se recibió pero el correo falló. Escríbenos a alexmartos96@gmail.com.'
    })
  }

  return { ok: true, meetUrl, googleUrl, when }
})
