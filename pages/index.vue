<template>
    <div>
      <Hero/>
      
      <!-- <Features/> -->
      <Portfolio id="portfolio"/>
      
      <Contact/>
      <Footer/>
      
    </div>
  </template>
  
  <script setup>
  
  useHead({
    title: 'Fullstack Labs - Build. Innovate. Transform.',
    description: 'Creating remarkable digital experiences that elevate your business to new heights.',
    ogDescription: 'Creating remarkable digital experiences that elevate your business to new heights.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'description', content: 'Creating remarkable digital experiences that elevate your business to new heights.' }
    ]
  })
  
  </script>