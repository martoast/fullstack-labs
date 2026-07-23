<template>
  <div class="bg-primary relative overflow-hidden">
    <!-- Keep your existing background effect -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"></div>
      <div class="absolute inset-0 mix-blend-overlay opacity-30">
        <div class="absolute inset-0 blur-3xl animate-pulse-slow-1">
          <div class="w-full h-full bg-white/10 rounded-full transform rotate-12 scale-150"></div>
        </div>
      </div>
    </div>
 
    <div class="relative mx-auto max-w-7xl px-6 py-32">
      <!-- Simplified header -->
      <div class="fade-in-up max-w-3xl mb-24">
        <h2 class="text-sm font-semibold text-white mb-3">Recent Projects</h2>
        <p class="text-4xl font-bold text-white mb-6">Your Vision Combined With Our Skills.</p>
        <p class="text-lg text-gray-300">Explore our showcase of cutting-edge solutions that transform businesses.</p>
      </div>
 
      <!-- Projects Grid with larger images -->
      <div class="space-y-32">
        <div v-for="project in projects" :key="project.name" 
             class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div class="mt-6 lg:col-span-4 lg:mt-0">
            <h3 class="text-2xl font-bold text-white">{{ project.name }}</h3>
            <p class="mt-4 text-gray-300">{{ project.description }}</p>
            <NuxtLink 
              :to="project.link"
              target="_blank"
              external
              class="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200 mt-6"
            >
              <span class="font-medium">View Project</span>
              <ArrowUpRightIcon 
                class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              />
            </NuxtLink>
          </div>
          <div class="lg:col-span-8">
            <div class="relative aspect-[16/9] overflow-hidden rounded-xl">
              <img 
                :src="project.image" 
                :alt="project.name"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </template>
 
 <script setup>
 import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
 
 const projects = [
  {
    name: 'Bolt Media',
    description: 'The official website for Bolt Media, a full-service marketing agency operating in Tijuana, Mexico City and San Diego. A fully bilingual (ES/EN) site showcasing the agency\'s brand strategy, content, media and experiential services — with an influencer portfolio of 200+, partner showcase, and a contact form wired directly into a custom-built CRM for automatic lead capture.',
    image: '/boltmedia.jpg',
    link: 'https://boltmedia.com.mx/'
  },

  {
    name: 'Riviera Residencial',
    description: 'A real estate landing page for Riviera Residencial Etapa II, a 46-home private community inside Real del Mar between Tijuana and Rosarito. The site showcases the Murano and Mazzorbo home models with photo galleries, amenities including the clubhouse, pool and golf course with ocean views, location highlights, and an availability request form for prospective buyers. Developed by HIR Baja and marketed by BCapital Brokers.',
    image: '/riviera.jpg',
    link: 'https://riviera-real-del-mar.netlify.app/'
  },

  {
    name: 'Boxly',
    description: 'A comprehensive package consolidation system for customers in Mexico to shop from US online stores. Features include automated warehouse address assignment with unique User IDs, item declaration and package linking, warehouse package management, dynamic shipping quotes, secure Stripe payments, and full tracking from US arrival to delivery in Mexico.',
    image: '/envios.png',
    link: 'https://boxly.mx/'
  },

  {
    name: 'Propquest.ai',
    description: 'A powerful platform for real estate investors featuring AI property search, expert filters, skip tracing, and comprehensive property analysis tools.',
    image: '/propquest.webp',
    link: 'https://propquest.ai/'
  },
  {
    name: 'Apollo Medical Transport',
    description: 'A comprehensive medical transport website with integrated request management system. Features include an interactive service area map, automated transport request pipeline, CRM integration for patient data management, and a dynamic scheduling system.',
    image: '/apollo.png',
    link: 'https://apollo-mts.com/'
  },
  {
    name: 'Pinclick.mx',
    description: 'A streamlined market research platform that simplifies location-based analysis in Mexico. Users can easily search locations, select areas, and instantly generate comprehensive market studies to make data-driven business decisions.',
    image: '/pinclick.png',
    link: 'https://pinclickmx.netlify.app/'
  },
  {
    name: 'The Heist by MGMS',
    description: 'NFT collection featuring custom ERC-721 smart contracts and a minting platform. Generated over $200K in NFT sales and built an engaged community of 2,000+ collectors. The project showcases unique generative art "Identities" created by Latina artist MGMS, combining innovative blockchain technology with artistic vision.',
    image: '/theheist.png',
    link: 'https://www.theheist.world/'
  }
 ]
 </script>
 
 <style scoped>
 /* Keep the same animations from before */
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
 }
 
 .animate-pulse-slow-1 {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
 }
 </style>