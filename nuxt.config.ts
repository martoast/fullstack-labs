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
    '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
  },
  build: {
    transpile: ['three']
  },
})
