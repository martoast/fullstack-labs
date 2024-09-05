<template>
  <div id="features" class="bg-primary py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-white">Services</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Revolutionize the way you manage your business</p>
        <p class="mt-6 text-lg leading-8 text-white">We are a dynamic group of experts specializing in developing custom software solutions and innovative strategies for businesses across all sectors. Combining our technical expertise with industry knowledge, we create tailored solutions that address our clients' unique needs.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
              <component :is="feature.icon" class="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-white">
              <p class="flex-auto">{{ feature.description }}</p>
              <!-- <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
              </p> -->
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CodeBracketIcon, ServerIcon, CpuChipIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Custom Software Development',
    description:
      'We develop tailored software applications that meet your specific business needs, from web and mobile apps to enterprise solutions.',
    href: '#',
    icon: CodeBracketIcon,
  },
  {
    name: 'Cloud Solutions & DevOps',
    description:
      'Our team designs and implements scalable cloud architectures and DevOps practices to enhance your operational efficiency and agility.',
    href: '#',
    icon: ServerIcon,
  },
  {
    name: 'AI & Machine Learning Integration',
    description:
      'We leverage cutting-edge AI and machine learning technologies to create intelligent systems that drive innovation and business growth.',
    href: '#',
    icon: CpuChipIcon,
  }
]
</script>