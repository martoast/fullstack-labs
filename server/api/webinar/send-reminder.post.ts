import { nextSession } from '../../utils/webinar'
import { REMINDERS, type ReminderKind } from '../../utils/emails'
import { pendingForReminder, markReminderSent, stats } from '../../utils/registrations'
import { mailer, mailIdentity } from '../../utils/mailer'

/**
 * Send one of the reminder emails to every registrant who has not already
 * received it for the upcoming session.
 *
 *   curl -X POST https://fullstacklabs.org/api/webinar/send-reminder \
 *        -H "x-webinar-token: $TOKEN" -H 'content-type: application/json' \
 *        -d '{"kind":"1d"}'
 *
 * Token-protected because it sends mail to the whole list. Add "dryRun": true
 * to see who WOULD get it, or "only": "someone@example.com" to test on one
 * address without touching anyone else.
 *
 * Safe to run twice: reminders_sent is keyed on (email, session, kind), so a
 * repeat run finds nobody pending. That matters because the obvious failure
 * mode here is double-blasting the list.
 */

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const token = config.webinarAdminToken as string

  if (!token) {
    throw createError({ statusCode: 503, statusMessage: 'NUXT_WEBINAR_ADMIN_TOKEN is not configured.' })
  }
  if (getRequestHeader(event, 'x-webinar-token') !== token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  const body = await readBody<{ kind?: string; dryRun?: boolean; only?: string }>(event)
  const kind = body?.kind as ReminderKind
  if (!kind || !(kind in REMINDERS)) {
    throw createError({ statusCode: 400, statusMessage: `kind must be one of: ${Object.keys(REMINDERS).join(', ')}` })
  }

  const session = nextSession()
  const sessionDate = session.startIso.slice(0, 10)
  const meetUrl = config.public.webinarMeetUrl as string
  const googleUrl = config.public.webinarGoogleUrl as string
  const when = `${session.dateLabel}, ${session.timeLabel} (hora de Tijuana)`

  let recipients = pendingForReminder(sessionDate, kind)
  if (body?.only) {
    const only = body.only.trim().toLowerCase()
    recipients = recipients.filter((r) => r.email === only)
    // A test address that has not registered should still be reachable.
    if (!recipients.length) recipients = [{ email: only, name: null, business: null, created_at: '' }]
  }

  if (body?.dryRun) {
    return {
      ok: true,
      dryRun: true,
      kind,
      session: sessionDate,
      wouldSend: recipients.length,
      recipients: recipients.map((r) => r.email),
      list: stats()
    }
  }

  const transporter = mailer()
  if (!transporter) {
    throw createError({ statusCode: 503, statusMessage: 'SMTP is not configured.' })
  }
  const { from, replyTo } = mailIdentity()

  const sent: string[] = []
  const failed: { email: string; error: string }[] = []

  for (const person of recipients) {
    const mail = REMINDERS[kind]({
      name: person.name || undefined,
      when,
      dateLabel: session.dateLabel,
      meetUrl,
      googleUrl
    })
    try {
      await transporter.sendMail({
        from,
        replyTo,
        to: person.email,
        subject: mail.subject,
        html: mail.html,
        text: mail.text
      })
      // Recorded per-recipient, not at the end: if the run dies halfway, the
      // people already emailed must not be emailed again on the retry.
      if (!body?.only) markReminderSent(person.email, sessionDate, kind)
      sent.push(person.email)
    } catch (err: any) {
      console.error('[webinar] reminder failed', kind, person.email, err?.message)
      failed.push({ email: person.email, error: String(err?.message || err) })
    }
    // Gentle on the SMTP relay.
    await new Promise((r) => setTimeout(r, 250))
  }

  return { ok: true, kind, session: sessionDate, sent: sent.length, failed, list: stats() }
})
