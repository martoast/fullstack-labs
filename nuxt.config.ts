// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'node-server',
    compressPublicAssets: true
  },
  routeRules: {
    // Versioned card images — filenames change when content changes
    '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/logo.svg': { headers: { 'cache-control': 'public, max-age=604800' } },
    '/logo.png': { headers: { 'cache-control': 'public, max-age=604800' } },
    // The webinar page renders the next session's date — never let it be cached.
    '/webinar': { headers: { 'cache-control': 'no-store' } },
    '/api/webinar/**': { headers: { 'cache-control': 'no-store' } }
  },
  runtimeConfig: {
    // Private — SMTP credentials, injected from the container environment.
    // Mailgun's account API key is disabled, so SMTP is the working path.
    mailHost: '',
    mailPort: '587',
    mailUser: '',
    mailPassword: '',
    mailFrom: '',
    webinarNotifyTo: '',
    // Guards the reminder blast endpoint. Without it that route refuses to run.
    webinarAdminToken: '',
    public: {
      // Overridable without a rebuild: set NUXT_PUBLIC_WEBINAR_* in .env and
      // restart the container. Both point at the real recurring event.
      webinarMeetUrl: 'https://meet.google.com/kor-etbg-yhs',
      webinarGoogleUrl: 'https://calendar.app.google/kmAuURzZgAxu6oUZ6'
    }
  },
  build: {
    transpile: ['three']
  },
})
