<template>
    <div ref="container" class="w-full h-full relative"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const { $initThree } = useNuxtApp()
  const container = ref(null)
  let cleanup = null
  
  onMounted(() => {
    if (container.value) {
      cleanup = $initThree(container.value)
    }
  })
  
  onBeforeUnmount(() => {
    if (cleanup) {
      cleanup()
    }
  })
  </script>