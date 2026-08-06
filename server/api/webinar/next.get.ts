import { nextSession, WEBINAR } from '../../utils/webinar'

/**
 * The next session, resolved server-side.
 *
 * The page fetches this rather than computing the date in the component: the
 * server and the browser sit in different time zones and evaluate `now` at
 * different instants, so computing it in both places risks a hydration
 * mismatch — and would show a visitor in Madrid the wrong day.
 */
export default defineEventHandler((event) => {
  setHeader(event, 'Cache-Control', 'no-store')
  const session = nextSession()
  return {
    ...session,
    timeZone: WEBINAR.timeZone,
    durationMinutes: WEBINAR.durationMinutes
  }
})
