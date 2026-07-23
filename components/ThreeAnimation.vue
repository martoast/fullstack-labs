<template>
    <div ref="container" class="w-full h-full relative"></div>
  </template>

  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const container = ref(null)
  let cleanup = null
  let cancelled = false

  onMounted(() => {
    // Animation is only visible on lg+ screens — never load three.js on mobile
    if (!window.matchMedia('(min-width: 1024px)').matches) return

    const start = async () => {
      const { initThree } = await import('~/assets/three-scene.js')
      if (!cancelled && container.value) {
        cleanup = initThree(container.value)
      }
    }
    if ('requestIdleCallback' in window) {
      requestIdleCallback(start, { timeout: 2000 })
    } else {
      setTimeout(start, 300)
    }
  })

  onBeforeUnmount(() => {
    cancelled = true
    if (cleanup) {
      cleanup()
    }
  })
  </script>
