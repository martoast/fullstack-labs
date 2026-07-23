<template>
  <div
    class="min-h-screen flex items-center justify-center bg-primary overflow-hidden relative"
  >
    <!-- Dynamic background animation -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"
      ></div>
      <div class="absolute inset-0 mix-blend-overlay opacity-40">
        <div
          v-for="i in 3"
          :key="i"
          class="absolute inset-0 blur-3xl"
          :class="`animate-pulse-slow-${i}`"
        >
          <div
            class="w-full h-full bg-white/10 rounded-full transform rotate-12 scale-150"
          ></div>
        </div>
      </div>
    </div>
    <!-- Main content -->
    <div class="relative w-full max-w-7xl mx-auto px-6 py-24">
      <!-- Logo with fade-in -->
      <div class="fade-in-up">
        <img class="h-10" src="/logo.svg" alt="Your Company" />
      </div>

      <!-- Content grid -->
      <div class="mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8">
        <!-- Text content -->
        <div class="space-y-16">
          <!-- Animated heading -->
          <div class="space-y-4">
            <h1
              class="text-6xl md:text-8xl font-bold text-white tracking-tight split-words"
            >
              <span class="block overflow-hidden">
                <span class="slide-up inline-block">Build</span>
                <span class="text-blue-400 slide-up inline-block delay-a"
                  >.</span
                >
              </span>
              <span class="block overflow-hidden">
                <span class="slide-up inline-block delay-b">Innovate</span>
                <span class="text-blue-400 slide-up inline-block delay-c"
                  >.</span
                >
              </span>
              <span class="block overflow-hidden">
                <span class="slide-up inline-block delay-d">Transform</span>
                <span class="text-blue-400 slide-up inline-block delay-e"
                  >.</span
                >
              </span>
            </h1>
          </div>
          <!-- Animated subheading -->
          <p
            class="text-xl md:text-2xl text-gray-300 max-w-2xl fade-in-up delay-f"
          >
            Creating remarkable digital experiences that elevate your business
            to new heights.
          </p>
          <!-- Interactive CTA section -->
          <div class="flex flex-wrap gap-8 items-center fade-in-up delay-g">
            <NuxtLink
              to="#contact"
              class="px-8 py-4 bg-white text-primary rounded-xl font-semibold transition-all duration-300 ease-out hover:shadow-xl hover:shadow-white/20 hover:scale-105"
            >
              Start a Project
            </NuxtLink>
            <NuxtLink
              to="#portfolio"
              class="group flex items-center gap-3 text-lg text-gray-300 hover:text-white transition-colors duration-200"
            >
              <span>View Our Work</span>
              <div
                class="group-hover:translate-x-2 transition-transform duration-200"
              >
                <ArrowRightIcon class="w-5 h-5" />
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Three.js container -->
        <div class="hidden lg:block mt-12 lg:mt-0 relative">
          <div class="w-[600px] h-[600px] relative mx-auto">
            <ThreeAnimation />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped>
/* Animation keyframes */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Animation classes */
.slide-up {
  animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform: translateY(100%);
}
.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
/* Delay utilities */
.delay-a {
  animation-delay: 80ms;
}
.delay-b {
  animation-delay: 160ms;
}
.delay-c {
  animation-delay: 240ms;
}
.delay-d {
  animation-delay: 320ms;
}
.delay-e {
  animation-delay: 400ms;
}
.delay-f {
  animation-delay: 500ms;
}
.delay-g {
  animation-delay: 650ms;
}
/* Background animation utilities */
.animate-pulse-slow-1 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.animate-pulse-slow-2 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: -2s;
}
.animate-pulse-slow-3 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: -4s;
}
</style>
