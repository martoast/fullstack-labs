<template>
  <div class="min-h-screen flex items-center justify-center bg-primary px-6">
    <div class="text-center">
      <p class="text-7xl font-bold text-white/20">404</p>
      <h1 class="mt-4 text-2xl font-semibold text-white">Page not found</h1>
      <p class="mt-2 text-white/60">The page you're looking for doesn't exist.</p>
      <NuxtLink
        to="/"
        class="mt-8 inline-block rounded-lg bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition"
      >
        Back to home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Catch-all for paths no real page claims — mostly bot probes for PHP files
// (/img/about.php etc.). Without this route, Vue Router console.warns on every
// probe and the ideasandbugs reporter ships each warn as a fresh event; the
// unmatched path also throws through Nitro's error hook as a fault. Rendering
// a plain 404 here (rather than throwing createError) keeps both quiet.
if (import.meta.server) {
  setResponseStatus(useRequestEvent(), 404, 'Page Not Found')
}

useSeoMeta({
  title: 'Page not found - Fullstack Labs',
  robots: 'noindex',
})
</script>
