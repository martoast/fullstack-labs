/**
 * Report failures to the Ideas + Bugs hub.
 *
 * A Nitro plugin rather than a try/catch anywhere: Nitro's `error` hook fires
 * for every unhandled server error including the ones inside API routes, and
 * install() adds the crashes and console.error/warn that never throw at all —
 * which on this box is where the damaging failures have always lived.
 *
 * The reporter is dependency-free and swallows its own failures, so the worst
 * this can do to the site is nothing.
 */
// @ts-expect-error — plain CommonJS, no types shipped
import ib from '../utils/ideasandbugs.cjs'

export default defineNitroPlugin((nitro) => {
  ib.install()

  nitro.hooks.hook('error', (error: any, ctx: any) => {
    ib.fault(error, {
      path: ctx?.event?.path,
      method: ctx?.event?.method,
    })
  })
})
