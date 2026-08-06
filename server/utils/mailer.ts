import nodemailer from 'nodemailer'

/**
 * One transporter factory, so the registration route and the reminder blast
 * cannot drift apart on SMTP settings.
 *
 * Mailgun's account API key is disabled — SMTP is the working path. The
 * sending identity is mg.boxly.mx (see CLAUDE.md); From carries the Fullstack
 * Labs display name and Reply-To points at Alex.
 */
export function mailer() {
  const config = useRuntimeConfig()
  if (!config.mailHost || !config.mailUser) return null
  return nodemailer.createTransport({
    host: config.mailHost,
    port: Number(config.mailPort || 587),
    secure: false,
    auth: { user: config.mailUser, pass: config.mailPassword }
  })
}

export function mailIdentity() {
  const config = useRuntimeConfig()
  return {
    from: `"Fullstack Labs" <${config.mailFrom || config.mailUser}>`,
    replyTo: config.webinarNotifyTo || 'alexmartos96@gmail.com'
  }
}
