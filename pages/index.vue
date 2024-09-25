<template>
    <div>
      <Hero/>
      
      <Features/>
      <Portfolio/>
      
      <Contact/>
      <Footer/>
      
    </div>
  </template>
  
  <script setup>
  
  useHead({
    title: 'Fullstack Labs - Innovate. Create. Grow.',
    description: 'Empowering Businesses with Cutting-Edge Fullstack Software Solutions.',
    ogDescription: 'Empowering Businesses with Cutting-Edge Fullstack Software Solutions.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'description', content: 'Fullstack Labs: Empowering Businesses with Cutting-Edge Fullstack Software Solutions.' }
    ]
  })
  
  </script>