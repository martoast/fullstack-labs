<template>
    <div class="bg-white">
      <div aria-hidden="true" class="relative">
        <img src="/propquest.webp" alt="propquest.ai real estate platform" class="h-96 w-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-t from-white" />
      </div>
  
      <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for creative investors</h2>
          <p class="mt-4 text-gray-500">A powerful real estate investment platform that combines AI-driven property search, expert filters, skip tracing, and comprehensive analysis tools to help investors identify and close deals with confidence.</p>
          <div class="mt-10">
            <a 
              href="https://propquest.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Visit Platform
              <svg class="ml-2 -mr-0.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
  
        <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </template>
  
  <script setup>
  const features = [
    { 
      name: 'AI Property Search', 
      description: 'Natural language property search powered by advanced AI algorithms. Simply describe what you\'re looking for and let our AI find the perfect properties.' 
    },
    { 
      name: 'Expert Search Filters', 
      description: '50+ expertly-crafted filters for precise market targeting, allowing investors to find exactly what they\'re looking for with ease.' 
    },
    { 
      name: 'Skip Tracing', 
      description: 'Industry-leading skip tracing with best-in-class accuracy, providing verified phone numbers, emails, and social profiles for property owners.' 
    },
    { 
      name: 'Comp Analysis', 
      description: 'Intelligent comp analysis with instant ARV calculations, powered by smart algorithms for accurate property value assessment and deal analysis.' 
    },
    { 
      name: 'Property Reports', 
      description: 'Comprehensive property reports including ownership history, tax records, liens, mortgage history, and other crucial investment metrics.' 
    },
    { 
      name: 'Technology Stack', 
      description: 'Built with modern technologies including React, Node.js, MongoDB, and advanced AI/ML models for reliable and scalable performance.' 
    }
  ]
  </script>