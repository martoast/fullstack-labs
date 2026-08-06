import { WEBINAR, nextSession, icsLocalStamp, icsUtcStamp } from '../../utils/webinar'

/**
 * Downloadable calendar invite for the weekly webinar.
 *
 * Served as a real recurring VEVENT rather than a one-off: the goal is to sit
 * in the attendee's calendar every week, not just once.
 *
 * DTSTART carries a TZID and the file ships its own VTIMEZONE, so the series
 * stays at 10:00 local on both sides of a DST change. A UTC DTSTART would
 * silently drift by an hour twice a year. Tijuana follows US DST rules (it is
 * a border municipality), not mainland Mexico's — which no longer has DST.
 */

/** RFC 5545: escape, then fold at 75 octets with a leading space on continuations. */
function icsLine(name: string, value: string): string {
  const escaped = value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')

  const line = `${name}:${escaped}`
  const chunks: string[] = []
  let remaining = line
  let limit = 75
  while (Buffer.byteLength(remaining, 'utf8') > limit) {
    let cut = limit
    while (Buffer.byteLength(remaining.slice(0, cut), 'utf8') > limit) cut--
    chunks.push(remaining.slice(0, cut))
    remaining = remaining.slice(cut)
    limit = 74 // continuation lines lose one octet to the leading space
  }
  chunks.push(remaining)
  return chunks.join('\r\n ')
}

export default defineEventHandler((event) => {
  const meetUrl = useRuntimeConfig().public.webinarMeetUrl as string
  const session = nextSession()

  const description = [
    'Webinar gratuito, todos los miércoles.',
    '',
    'Aprende a usar la inteligencia artificial en tu negocio, sin importar tu industria ni tu nivel técnico: atención a clientes, ventas, contenido, cotizaciones y las tareas repetitivas que hoy te quitan horas.',
    '',
    meetUrl ? `Enlace para entrar: ${meetUrl}` : 'El enlace para entrar se envía por correo antes de la sesión.',
    `Información: ${WEBINAR.pageUrl}`
  ].join('\n')

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fullstack Labs//Webinar IA//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    `TZID:${WEBINAR.timeZone}`,
    'BEGIN:DAYLIGHT',
    'TZOFFSETFROM:-0800',
    'TZOFFSETTO:-0700',
    'TZNAME:PDT',
    'DTSTART:19700308T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU',
    'END:DAYLIGHT',
    'BEGIN:STANDARD',
    'TZOFFSETFROM:-0700',
    'TZOFFSETTO:-0800',
    'TZNAME:PST',
    'DTSTART:19701101T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    // Stable UID: re-downloading updates the same series instead of stacking
    // duplicate weekly events in the attendee's calendar.
    'UID:webinar-ia-semanal@fullstacklabs.org',
    `DTSTAMP:${icsUtcStamp(new Date().toISOString())}`,
    `DTSTART;TZID=${WEBINAR.timeZone}:${icsLocalStamp(session.startIso)}`,
    `DTEND;TZID=${WEBINAR.timeZone}:${icsLocalStamp(session.endIso)}`,
    'RRULE:FREQ=WEEKLY;BYDAY=WE',
    icsLine('SUMMARY', WEBINAR.title),
    icsLine('DESCRIPTION', description),
    icsLine('LOCATION', meetUrl || WEBINAR.pageUrl),
    icsLine('URL', WEBINAR.pageUrl),
    icsLine('ORGANIZER;CN=Fullstack Labs', 'mailto:alexmartos96@gmail.com'),
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'SEQUENCE:0',
    // Two nudges — the day-before reminder is what actually gets people to show up.
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    icsLine('DESCRIPTION', 'Mañana: Webinar IA para tu Negocio'),
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT10M',
    'ACTION:DISPLAY',
    icsLine('DESCRIPTION', 'En 10 minutos: Webinar IA para tu Negocio'),
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ]

  setHeader(event, 'Content-Type', 'text/calendar; charset=utf-8')
  setHeader(event, 'Content-Disposition', 'attachment; filename="webinar-ia-fullstack-labs.ics"')
  // Contains the next session's date, so it must not be cached at the edge.
  setHeader(event, 'Cache-Control', 'no-store')

  return lines.join('\r\n')
})
