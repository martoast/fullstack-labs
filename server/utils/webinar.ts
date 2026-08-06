/**
 * Single source of truth for the weekly webinar schedule.
 *
 * The landing page, the .ics invite, the Google Calendar link and both emails
 * all derive from here — if the slot ever moves, this is the only place to
 * change it.
 */

export const WEBINAR = {
  /** 0 = Sunday … 3 = Wednesday */
  weekday: 3,
  startHour: 10,
  startMinute: 0,
  durationMinutes: 60,
  timeZone: 'America/Tijuana',
  title: 'IA para tu Negocio — Webinar Gratuito Semanal',
  organizer: 'Fullstack Labs',
  pageUrl: 'https://fullstacklabs.org/webinar',
  icsUrl: 'https://fullstacklabs.org/api/webinar/invite'
} as const

/**
 * Offset of a time zone, in minutes, at a given instant. Positive means ahead
 * of UTC. Derived from Intl rather than hardcoded, so Tijuana's DST switches
 * (it follows US rules, not mainland Mexico's) are handled for free.
 */
function zoneOffsetMinutes(instant: number, timeZone: string): number {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  const parts = dtf.formatToParts(new Date(instant))
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value)
  // Intl renders hour 24 for midnight under hour12:false in some engines.
  const hour = get('hour') % 24
  const asUtc = Date.UTC(get('year'), get('month') - 1, get('day'), hour, get('minute'), get('second'))
  return (asUtc - instant) / 60000
}

/**
 * Convert a wall-clock time in `timeZone` to the corresponding UTC instant.
 * Solved in two passes because the offset itself depends on the instant —
 * the second pass fixes the answer when the first guess landed on the other
 * side of a DST boundary.
 */
function wallTimeToInstant(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string
): number {
  const guess = Date.UTC(year, month - 1, day, hour, minute)
  const firstPass = guess - zoneOffsetMinutes(guess, timeZone) * 60000
  const secondOffset = zoneOffsetMinutes(firstPass, timeZone)
  return guess - secondOffset * 60000
}

/** The calendar date in `timeZone` at a given instant. */
function zonedDateParts(instant: number, timeZone: string) {
  const dtf = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short'
  })
  const parts = dtf.formatToParts(new Date(instant))
  const value = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return {
    year: Number(value('year')),
    month: Number(value('month')),
    day: Number(value('day')),
    weekday: weekdayNames.indexOf(value('weekday'))
  }
}

export interface WebinarSession {
  /** ISO instant the session starts */
  startIso: string
  /** ISO instant the session ends */
  endIso: string
  /** e.g. "miércoles 12 de agosto" */
  dateLabel: string
  /** e.g. "10:00 AM" */
  timeLabel: string
}

/**
 * The next session that has not yet finished. A session in progress still
 * counts as "next" — someone landing at 10:20 should be told to join now,
 * not sent away for a week.
 */
export function nextSession(now: number = Date.now()): WebinarSession {
  const today = zonedDateParts(now, WEBINAR.timeZone)
  const durationMs = WEBINAR.durationMinutes * 60000

  for (let offset = 0; offset <= 7; offset++) {
    // Step day-by-day through the zone's own calendar rather than adding 24h
    // to an instant, which drifts across a DST change.
    const probe = Date.UTC(today.year, today.month - 1, today.day + offset, 12)
    const parts = zonedDateParts(probe, WEBINAR.timeZone)
    if (parts.weekday !== WEBINAR.weekday) continue

    const start = wallTimeToInstant(
      parts.year,
      parts.month,
      parts.day,
      WEBINAR.startHour,
      WEBINAR.startMinute,
      WEBINAR.timeZone
    )
    if (start + durationMs <= now) continue

    return {
      startIso: new Date(start).toISOString(),
      endIso: new Date(start + durationMs).toISOString(),
      dateLabel: new Intl.DateTimeFormat('es-MX', {
        timeZone: WEBINAR.timeZone,
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      }).format(new Date(start)),
      timeLabel: new Intl.DateTimeFormat('es-MX', {
        timeZone: WEBINAR.timeZone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(new Date(start))
    }
  }

  // Unreachable: any 8-day window contains the weekday.
  throw new Error('No upcoming webinar session found')
}

/** YYYYMMDDTHHMMSS in the webinar's own zone — the form TZID-based ICS wants. */
export function icsLocalStamp(iso: string): string {
  const dtf = new Intl.DateTimeFormat('en-CA', {
    timeZone: WEBINAR.timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  const parts = dtf.formatToParts(new Date(iso))
  const v = (t: string) => parts.find((p) => p.type === t)?.value ?? '00'
  const hour = String(Number(v('hour')) % 24).padStart(2, '0')
  return `${v('year')}${v('month')}${v('day')}T${hour}${v('minute')}${v('second')}`
}

/** YYYYMMDDTHHMMSSZ */
export function icsUtcStamp(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}
