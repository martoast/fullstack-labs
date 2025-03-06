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
  
  // useHead({
  //   title: 'Fullstack Labs - Build. Innovate. Transform.',
  //   description: 'Creating remarkable digital experiences that elevate your business to new heights.',
  //   ogDescription: 'Creating remarkable digital experiences that elevate your business to new heights.',
  //   htmlAttrs: {
  //     lang: 'en'
  //   },
  //   meta: [
  //     { name: 'description', content: 'Creating remarkable digital experiences that elevate your business to new heights.' }
  //   ]
  // })

  useSeoMeta({
  title: 'Fullstack Labs - Build. Innovate. Transform.',
  ogTitle: 'Fullstack Labs - Build. Innovate. Transform.',
  author: 'Alex Martos - FullStack Labs',
  charset: 'utf-8',
  description: "Fullstack Labs - Build. Innovate. Transform.",
  ogDescription: "Fullstack Labs - Build. Innovate. Transform.",
  robots: 'index, follow',
  googleSiteVerification: '',
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  ogImage: '/logo.png',
  ogUrl: 'https://fullstack-labs.netlify.app/',
  ogLocaleAlternate: ['en_US'],
  ogType: 'website'
})
  
  </script>