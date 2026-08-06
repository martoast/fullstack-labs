import nodemailer from 'nodemailer'
import { WEBINAR, nextSession } from '../../utils/webinar'

/**
 * Webinar registration.
 *
 * There is no database on this app, by design — a registration is two emails:
 * a notification to Alex (that inbox IS the attendee list) and a confirmation
 * to the registrant carrying the join link and the calendar buttons.
 *
 * The confirmation matters more than the record: reminders are what actually
 * get people to show up.
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

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<Body>(event)

  // Honeypot: accept and drop, so the bot sees success and does not retry.
  if (body?.website) return { ok: true }

  const name = (body?.name ?? '').trim().slice(0, 120)
  const email = (body?.email ?? '').trim().slice(0, 200).toLowerCase()
  const business = (body?.business ?? '').trim().slice(0, 160)

  if (!name || !EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Nombre y correo válidos son requeridos.' })
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

  const transporter = nodemailer.createTransport({
    host: config.mailHost,
    port: Number(config.mailPort || 587),
    secure: false,
    auth: { user: config.mailUser, pass: config.mailPassword }
  })

  const when = `${session.dateLabel}, ${session.timeLabel} (hora de Tijuana)`

  const confirmationHtml = `
<div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111827;line-height:1.6">
  <p style="font-size:18px;margin:0 0 16px"><strong>¡Listo, ${escapeHtml(name)}! Tu lugar está apartado.</strong></p>
  <p style="margin:0 0 20px">Nos vemos en el webinar <strong>IA para tu Negocio</strong>.</p>
  <table role="presentation" style="width:100%;background:#f3f4f6;border-radius:10px;padding:18px;margin:0 0 22px">
    <tr><td style="padding:2px 0"><strong>Cuándo:</strong> ${escapeHtml(when)}</td></tr>
    <tr><td style="padding:2px 0"><strong>Dónde:</strong> Google Meet (en línea)</td></tr>
    <tr><td style="padding:2px 0"><strong>Costo:</strong> Gratis</td></tr>
  </table>
  <p style="margin:0 0 12px"><a href="${meetUrl}" style="display:inline-block;background:#0284c7;color:#fff;text-decoration:none;padding:13px 24px;border-radius:9px;font-weight:600">Entrar al webinar</a></p>
  <p style="margin:0 0 24px"><a href="${googleUrl}" style="color:#0369a1">Agregar a mi calendario</a> &nbsp;·&nbsp; <a href="${WEBINAR.pageUrl}" style="color:#0369a1">Ver detalles</a></p>
  <p style="margin:0 0 8px"><strong>Un consejo:</strong> agrégalo a tu calendario ahora. Es la diferencia entre apartar el lugar y olvidarlo.</p>
  <p style="margin:24px 0 0;font-size:14px;color:#6b7280">El webinar se repite todos los miércoles — el mismo enlace sirve cada semana.</p>
  <p style="margin:16px 0 0;font-size:14px;color:#6b7280">Alejandro Martos · Fullstack Labs<br>¿Dudas? Responde a este correo.</p>
</div>`.trim()

  const notificationText = [
    'Nuevo registro al webinar',
    '',
    `Nombre:   ${name}`,
    `Correo:   ${email}`,
    `Negocio:  ${business || '—'}`,
    `Sesión:   ${when}`,
    `IP:       ${ip}`,
    `Recibido: ${new Date().toISOString()}`
  ].join('\n')

  const from = `"Fullstack Labs" <${config.mailFrom || config.mailUser}>`
  const notifyTo = config.webinarNotifyTo || 'alexmartos96@gmail.com'

  try {
    // The registrant's confirmation is the one that must not fail — send it first.
    await transporter.sendMail({
      from,
      to: email,
      replyTo: notifyTo,
      subject: `Confirmado: IA para tu Negocio — ${session.dateLabel}`,
      html: confirmationHtml,
      text: `¡Listo, ${name}! Tu lugar está apartado.\n\nCuándo: ${when}\nEntrar: ${meetUrl}\nAgregar al calendario: ${googleUrl}\n\nEl webinar se repite todos los miércoles.\n\nAlejandro Martos · Fullstack Labs`
    })

    await transporter.sendMail({
      from,
      to: notifyTo,
      replyTo: email,
      subject: `Registro webinar: ${name}${business ? ` (${business})` : ''}`,
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
