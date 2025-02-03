<template>
    <div class="min-h-screen flex items-center justify-center bg-primary overflow-hidden relative">
      <!-- Dynamic background animation -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"></div>
        <div class="absolute inset-0 mix-blend-overlay opacity-40">
          <div class="absolute inset-0 blur-3xl animate-pulse-slow-1">
            <div class="w-full h-full bg-white/10 rounded-full transform rotate-12 scale-150"></div>
          </div>
        </div>
      </div>
  
      <!-- Three.js container -->
      <div class="w-full h-[500px] relative">
        <ThreeAnimation />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  </script>
  
  <style scoped>
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: .8;
      transform: scale(1.1);
    }
  }
  
  .animate-pulse-slow-1 {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  </style>