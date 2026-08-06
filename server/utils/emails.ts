import { WEBINAR } from './webinar'

/**
 * Every webinar email, in one place, so the confirmation and the three
 * reminders cannot drift apart.
 *
 * The CTA changes with how far away the session is — that is the whole point:
 * "join now" is the wrong ask three days out, and "add to calendar" is the
 * wrong ask sixty minutes before it starts.
 */

export const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

interface Ctx {
  name?: string
  when: string
  dateLabel: string
  meetUrl: string
  googleUrl: string
}

const button = (href: string, label: string, color = '#0284c7') =>
  `<a href="${href}" style="display:inline-block;background:${color};color:#fff;text-decoration:none;padding:14px 26px;border-radius:9px;font-weight:600;font-size:16px">${label}</a>`

const layout = (body: string, opts: { showOptOut?: boolean } = {}) =>
  `
<div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111827;line-height:1.6">
${body}
  <p style="margin:28px 0 0;font-size:14px;color:#6b7280">Alejandro Martos · Fullstack Labs<br>¿Dudas? Responde a este correo.</p>
${
  opts.showOptOut
    ? '  <p style="margin:12px 0 0;font-size:12px;color:#9ca3af">Si ya no quieres estos recordatorios, responde <strong>BAJA</strong> y te saco de la lista.</p>'
    : ''
}
</div>`.trim()

const details = (when: string) => `
  <table role="presentation" style="width:100%;background:#f3f4f6;border-radius:10px;padding:18px;margin:0 0 22px">
    <tr><td style="padding:2px 0"><strong>Cuándo:</strong> ${escapeHtml(when)}</td></tr>
    <tr><td style="padding:2px 0"><strong>Dónde:</strong> Google Meet (en línea)</td></tr>
    <tr><td style="padding:2px 0"><strong>Costo:</strong> Gratis</td></tr>
  </table>`

/** Sent immediately on registration. The session is days away, so the ask is
 *  the calendar — not joining a call that has not started. */
export function confirmationEmail(ctx: Ctx) {
  const greeting = ctx.name ? `¡Listo, ${escapeHtml(ctx.name)}!` : '¡Listo!'
  return {
    subject: `Confirmado: IA para tu Negocio — ${ctx.dateLabel}`,
    html: layout(`
  <p style="font-size:18px;margin:0 0 16px"><strong>${greeting} Tu lugar está apartado.</strong></p>
  <p style="margin:0 0 20px">Nos vemos en el webinar <strong>IA para tu Negocio</strong>.</p>
${details(ctx.when)}
  <p style="margin:0 0 10px"><strong>Agrégalo a tu calendario ahora.</strong> Es la diferencia entre apartar el lugar y que se te pase.</p>
  <p style="margin:0 0 18px">${button(ctx.googleUrl, 'Agregar a mi calendario')}</p>
  <p style="margin:0 0 22px;font-size:15px"><a href="${WEBINAR.icsUrl}" style="color:#0369a1">Apple / Outlook (.ics)</a> &nbsp;·&nbsp; <a href="${WEBINAR.pageUrl}" style="color:#0369a1">Ver detalles</a></p>
  <p style="margin:0;font-size:14px;color:#6b7280">El día del webinar entras por aquí: <a href="${ctx.meetUrl}" style="color:#0369a1">${ctx.meetUrl}</a><br>Te mandaremos un recordatorio antes de empezar.</p>`),
    text: `${ctx.name ? `¡Listo, ${ctx.name}!` : '¡Listo!'} Tu lugar está apartado.

Cuándo: ${ctx.when}

Agrégalo a tu calendario: ${ctx.googleUrl}
Detalles: ${WEBINAR.pageUrl}

El día del webinar entras por aquí: ${ctx.meetUrl}
Te mandaremos un recordatorio antes de empezar.

Alejandro Martos · Fullstack Labs`
  }
}

/** Three days out — re-sell the session, keep the calendar as the ask. */
export function reminder3dEmail(ctx: Ctx) {
  return {
    subject: `Este miércoles: IA para tu Negocio`,
    html: layout(`
  <p style="font-size:18px;margin:0 0 16px"><strong>Falta poco.</strong></p>
  <p style="margin:0 0 20px">El <strong>${escapeHtml(ctx.dateLabel)}</strong> vemos, en vivo, cómo aplicar IA a trabajo real de tu negocio: atención a clientes, seguimiento, cotizaciones y las tareas que hoy te quitan horas.</p>
${details(ctx.when)}
  <p style="margin:0 0 10px">Si todavía no lo tienes en tu calendario, este es el momento:</p>
  <p style="margin:0 0 22px">${button(ctx.googleUrl, 'Agregar a mi calendario')}</p>
  <p style="margin:0;font-size:14px;color:#6b7280">Trae tu caso — la última parte de la sesión es de preguntas.</p>`, { showOptOut: true }),
    text: `Falta poco.

El ${ctx.dateLabel} vemos en vivo cómo aplicar IA a trabajo real de tu negocio.

Cuándo: ${ctx.when}
Agrégalo a tu calendario: ${ctx.googleUrl}

Trae tu caso — la última parte es de preguntas.

Alejandro Martos · Fullstack Labs`
  }
}

/** The day before — still calendar-first, but the link is now worth carrying. */
export function reminder1dEmail(ctx: Ctx) {
  return {
    subject: `Mañana: IA para tu Negocio (${ctx.when})`,
    html: layout(`
  <p style="font-size:18px;margin:0 0 16px"><strong>Es mañana.</strong></p>
  <p style="margin:0 0 20px">Nos vemos en <strong>IA para tu Negocio</strong>. Son 45 minutos y sales con algo que puedes aplicar el mismo día.</p>
${details(ctx.when)}
  <p style="margin:0 0 18px">${button(ctx.googleUrl, 'Agregar a mi calendario')}</p>
  <p style="margin:0 0 8px;font-size:15px">Guarda este enlace para mañana:</p>
  <p style="margin:0 0 4px"><a href="${ctx.meetUrl}" style="color:#0369a1;font-size:15px">${ctx.meetUrl}</a></p>`, { showOptOut: true }),
    text: `Es mañana.

Cuándo: ${ctx.when}
Enlace para entrar: ${ctx.meetUrl}
Agrégalo a tu calendario: ${ctx.googleUrl}

Alejandro Martos · Fullstack Labs`
  }
}

/** One hour out — now, and only now, the ask is to join. */
export function reminder1hEmail(ctx: Ctx) {
  return {
    subject: `Empezamos en 1 hora — IA para tu Negocio`,
    html: layout(`
  <p style="font-size:18px;margin:0 0 16px"><strong>Empezamos en una hora.</strong></p>
  <p style="margin:0 0 22px">Este es tu enlace para entrar. Puedes abrirlo desde la computadora o el celular.</p>
  <p style="margin:0 0 20px">${button(ctx.meetUrl, 'Entrar al webinar', '#16a34a')}</p>
  <p style="margin:0 0 6px;font-size:15px">O copia esta dirección:</p>
  <p style="margin:0 0 22px"><a href="${ctx.meetUrl}" style="color:#0369a1;font-size:15px">${ctx.meetUrl}</a></p>
  <p style="margin:0;font-size:14px;color:#6b7280">Trae tu caso — la última parte es de preguntas en vivo.</p>`, { showOptOut: true }),
    text: `Empezamos en una hora.

Entra aquí: ${ctx.meetUrl}

Trae tu caso — la última parte es de preguntas en vivo.

Alejandro Martos · Fullstack Labs`
  }
}

export const REMINDERS = {
  '3d': reminder3dEmail,
  '1d': reminder1dEmail,
  '1h': reminder1hEmail
} as const

export type ReminderKind = keyof typeof REMINDERS
