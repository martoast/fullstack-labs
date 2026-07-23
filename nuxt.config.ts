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
    '/logo.png': { headers: { 'cache-control': 'public, max-age=604800' } }
  },
  build: {
    transpile: ['three']
  },
})
