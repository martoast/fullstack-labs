<template>
  <div id="contact" class="bg-primary relative overflow-hidden">
    <!-- Background effect remains the same -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"></div>
      <div class="absolute inset-0 mix-blend-overlay opacity-30">
        <div class="absolute inset-0 blur-3xl animate-pulse-slow-1">
          <div class="w-full h-full bg-white/10 rounded-full transform -rotate-12 scale-150"></div>
        </div>
      </div>
    </div>

    <div class="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-8">
      <!-- Contact Info Section -->
      <div class="px-6 py-24 lg:py-32">
        <div class="max-w-xl">
          <div class="fade-in-up">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
              Let's Create Something Amazing Together
            </h2>
            <p class="text-lg text-gray-300 mb-12">
              Get in touch with us and let's discuss how we can help bring your vision to life.
            </p>
            <!-- Contact Details -->
            <div class="space-y-6 text-gray-300">
              <div class="flex items-center space-x-4 group">
                <div class="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <EnvelopeIcon class="h-6 w-6 text-white" />
                </div>
                <a href="mailto:alexmartos96@gmail.com" class="hover:text-white transition-colors duration-300">
                  alexmartos96@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="px-6 pb-24 lg:py-32">
        <div class="bg-white rounded-2xl shadow-xl p-8 fade-in-up delay-300">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="group">
                <label class="block text-sm font-medium text-gray-700 mb-2">First name</label>
                <input 
                  type="text" 
                  class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                         focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                         placeholder:text-gray-500
                         transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div class="group">
                <label class="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                <input 
                  type="text" 
                  class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                         focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                         placeholder:text-gray-500
                         transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                       focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                       placeholder:text-gray-500
                       transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
              <input 
                type="tel" 
                class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                       focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                       placeholder:text-gray-500
                       transition-all duration-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4" 
                class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                       focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                       placeholder:text-gray-500
                       transition-all duration-300"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button 
                type="submit"
                class="px-8 py-4 bg-primary text-white rounded-xl font-semibold 
                       transition-all duration-300 ease-out 
                       hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const handleSubmit = () => {
  // Add your form submission logic here
}
</script>

<style scoped>
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

.fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.delay-300 {
  animation-delay: 300ms;
}

.animate-pulse-slow-1 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>