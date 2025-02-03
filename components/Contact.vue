<template>
  <div id="contact" class="bg-primary relative overflow-hidden">
    <!-- Background effect -->
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
          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            @submit="handleSubmit"
            class="space-y-6"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="group">
                <label class="block text-sm font-medium text-gray-700 mb-2">First name</label>
                <input 
                  type="text"
                  name="firstName" 
                  class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                         focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                         placeholder:text-gray-500
                         transition-all duration-300"
                  placeholder="John"
                  required
                />
              </div>
              <div class="group">
                <label class="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                <input 
                  type="text"
                  name="lastName" 
                  class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                         focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                         placeholder:text-gray-500
                         transition-all duration-300"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            
            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email"
                name="email" 
                class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                       focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                       placeholder:text-gray-500
                       transition-all duration-300"
                placeholder="john@example.com"
                required
              />
            </div>
            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
              <input 
                type="tel"
                name="phone" 
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
                name="message"
                rows="4" 
                class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                       focus:ring-2 focus:ring-primary/30 focus:border-primary/30
                       placeholder:text-gray-500
                       transition-all duration-300"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <!-- Netlify's honeypot field -->
            <input type="hidden" name="form-name" value="contact" />
            
            <div class="flex justify-end">
              <button 
                type="submit"
                :disabled="loading"
                class="px-8 py-4 bg-primary text-white rounded-xl font-semibold 
                       transition-all duration-300 ease-out 
                       hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:scale-105
                       disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ loading ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const loading = ref(false)

const handleSubmit = async (event) => {
  event.preventDefault()
  loading.value = true

  try {
    const formData = new FormData(event.target)
    
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    
    if (response.ok) {
      alert('Thank you for your message. We will get back to you soon!')
      event.target.reset()
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    alert('Sorry, there was an error submitting the form. Please try again.')
  } finally {
    loading.value = false
  }
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