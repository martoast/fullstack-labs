<template>
  <div class="bg-background min-h-screen text-white antialiased">
    <!-- Ambient glow -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden print:hidden" aria-hidden="true">
      <div class="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl"></div>
    </div>

    <!-- Save as PDF -->
    <div class="fixed top-4 right-4 z-50 print:hidden">
      <button
        type="button"
        @click="printPage"
        class="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur transition-colors duration-200 hover:border-white/30 hover:bg-white/20"
      >
        <ArrowDownTrayIcon class="h-4 w-4 flex-none" />
        <span class="hidden sm:inline">Save as PDF</span>
        <span class="sm:hidden">PDF</span>
      </button>
    </div>

    <div class="relative mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">

      <!-- Header -->
      <header class="border-b border-white/10 pb-12">
        <img src="/logo.svg" alt="Fullstack Labs" class="h-9 w-auto" />

        <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center lg:gap-12">
          <!-- Portrait: above the name on mobile, to the right on desktop -->
          <div class="order-first lg:order-last lg:col-span-2">
            <div class="portrait relative mx-auto w-48 sm:w-56 lg:mx-0 lg:w-full">
              <div class="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl shadow-black/40 print:shadow-none">
                <img
                  src="/img/alex-1.webp"
                  alt="Alejandro Martos"
                  width="720"
                  height="1081"
                  fetchpriority="high"
                  decoding="async"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div class="lg:col-span-3">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
              Alejandro Martos
            </h1>
            <p class="mt-3 text-xl text-blue-300 sm:text-2xl">
              Full-stack developer &middot; Fullstack Labs
            </p>

            <p class="mt-8 text-lg leading-relaxed text-gray-300">
              I design, build and run web products end to end &mdash; from the database and the
              deploy pipeline to the interface people actually use. I work with clients across
              Tijuana, San Diego and Mexico City on everything from marketing sites to
              multi-tenant SaaS platforms, and I operate what I ship.
            </p>
          </div>
        </div>

        <!-- Contact chips -->
        <div class="mt-10 flex flex-wrap gap-3">
          <component
            :is="link.href ? 'a' : 'div'"
            v-for="link in contact"
            :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
            class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-200 transition-colors duration-200 print:border-gray-300 print:bg-white print:text-gray-800"
            :class="link.href ? 'hover:border-white/25 hover:bg-white/10 hover:text-white' : ''"
          >
            <component :is="link.icon" class="h-4 w-4 flex-none" />
            <span>{{ link.label }}</span>
          </component>
        </div>
      </header>

      <!-- What I do -->
      <section class="border-b border-white/10 py-14">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">
          What I do
        </h2>
        <div class="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          <div v-for="item in services" :key="item.title">
            <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
            <p class="mt-2 text-gray-300 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="border-b border-white/10 py-14">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">
          Stack
        </h2>
        <dl class="mt-10 space-y-6">
          <div v-for="group in stack" :key="group.label" class="sm:grid sm:grid-cols-4 sm:gap-6">
            <dt class="text-sm font-medium text-gray-400 sm:col-span-1">{{ group.label }}</dt>
            <dd class="mt-2 flex flex-wrap gap-2 sm:col-span-3 sm:mt-0">
              <span
                v-for="tech in group.items"
                :key="tech"
                class="rounded-md bg-white/5 px-2.5 py-1 text-sm text-gray-200 ring-1 ring-inset ring-white/10 print:bg-white print:text-gray-800 print:ring-gray-300"
              >{{ tech }}</span>
            </dd>
          </div>
        </dl>
      </section>

      <!-- Selected work -->
      <section class="py-14">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">
          Selected work
        </h2>

        <div class="mt-10 space-y-14">
          <article
            v-for="project in projects"
            :key="project.name"
            class="grid gap-6 sm:grid-cols-5 sm:gap-8"
          >
            <div class="sm:col-span-2">
              <a :href="project.link" target="_blank" rel="noopener" class="block group">
                <div class="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10">
                  <img
                    :src="project.image"
                    :alt="project.name"
                    width="1280"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </a>
            </div>

            <div class="sm:col-span-3">
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 class="text-xl font-semibold text-white">{{ project.name }}</h3>
                <span class="text-sm text-gray-400">{{ project.role }}</span>
              </div>

              <p class="mt-3 text-gray-300 leading-relaxed">{{ project.description }}</p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="rounded-md bg-white/5 px-2 py-0.5 text-xs text-gray-300 ring-1 ring-inset ring-white/10 print:bg-white print:text-gray-700 print:ring-gray-300"
                >{{ tech }}</span>
              </div>

              <a
                :href="project.link"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 transition-colors duration-200 hover:text-white"
              >
                {{ project.linkLabel || 'Visit site' }}
                <ArrowUpRightIcon class="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <!-- Footer / CTA -->
      <footer class="border-t border-white/10 pt-12">
        <h2 class="text-2xl font-bold text-white">Let's talk</h2>
        <p class="mt-3 max-w-xl text-gray-300 leading-relaxed">
          Happy to walk through any of the projects above, or scope something new.
          Fastest way to reach me is email or WhatsApp.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:alexmartos96@gmail.com"
            class="rounded-xl bg-white px-6 py-3 font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 print:border print:border-gray-300"
          >
            alexmartos96@gmail.com
          </a>
          <a
            href="https://wa.me/16198885248"
            target="_blank"
            rel="noopener"
            class="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            WhatsApp &middot; (619) 888-5248
          </a>
        </div>
        <p class="mt-12 text-xs text-gray-500">
          &copy; {{ year }} Fullstack Labs &middot; fullstacklabs.org
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpRightIcon, ArrowDownTrayIcon, EnvelopeIcon, PhoneIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const year = new Date().getFullYear()

// Browser print dialog — "Save as PDF" is the destination the user picks there.
const printPage = () => window.print()

const contact = [
  { label: 'alexmartos96@gmail.com', href: 'mailto:alexmartos96@gmail.com', icon: EnvelopeIcon },
  { label: '(619) 888-5248', href: 'tel:+16198885248', icon: PhoneIcon },
  { label: 'github.com/martoast', href: 'https://github.com/martoast', icon: GlobeAltIcon, external: true },
  { label: 'Tijuana / San Diego', icon: MapPinIcon }
]

const services = [
  {
    title: 'Web applications & SaaS',
    description:
      'Multi-tenant platforms with authentication, roles, billing and admin tooling. Built to be handed over and operated, not just demoed.'
  },
  {
    title: 'AI-powered automation',
    description:
      'WhatsApp and chat agents trained on a specific business, document and lead processing, and LLM features wired into existing products.'
  },
  {
    title: 'Marketing sites & landing pages',
    description:
      'Fast, bilingual, SEO-ready sites for real estate and agency clients, with forms that feed straight into a CRM instead of an inbox.'
  },
  {
    title: 'Infrastructure & deployment',
    description:
      'Dockerised deploys, CI/CD, zero-downtime releases, monitoring and self-hosted infrastructure. I run my own production servers.'
  }
]

const stack = [
  { label: 'Backend', items: ['Laravel / PHP', 'Node.js', 'Python / FastAPI', 'MySQL', 'PostgreSQL', 'Redis'] },
  { label: 'Frontend', items: ['Vue', 'Nuxt', 'Tailwind CSS', 'Three.js / WebGL'] },
  { label: 'AI', items: ['OpenAI API', 'Anthropic API', 'Embeddings & retrieval', 'Voice / transcription'] },
  { label: 'Infra', items: ['Docker', 'Linux', 'Cloudflare', 'CI/CD', 'Stripe', 'WhatsApp Business API'] }
]

const projects = [
  {
    name: 'WhatsApp Suite',
    role: 'Product — design, build, operate',
    description:
      'An AI-powered WhatsApp automation platform. Businesses connect their number, train the AI on their own business, and let it answer every prospect 24/7 — bilingual, with voice support. Includes agent onboarding and training, automated lead response, conversation management and a free-trial signup flow. Live as a SaaS product.',
    tech: ['Laravel', 'WhatsApp Business API', 'OpenAI', 'Docker'],
    image: '/img/wa-suite.webp',
    link: 'https://wa.fullstacklabs.org/'
  },
  {
    name: 'Bolt Media',
    role: 'Website + custom CRM',
    description:
      'Site for a full-service marketing agency operating in Tijuana, Mexico City and San Diego. Fully bilingual (ES/EN), covering brand strategy, content, media and experiential services, with an influencer portfolio of 200+ and a contact form wired directly into a CRM I built for them, for automatic lead capture.',
    tech: ['Nuxt', 'Laravel', 'Tailwind CSS'],
    image: '/img/bolt-site.webp',
    link: 'https://boltmedia.com.mx/'
  },
  {
    name: 'Boxly',
    role: 'Full platform',
    description:
      'Package consolidation service letting customers in Mexico shop from US online stores. Automated warehouse address assignment with unique user IDs, item declaration and package linking, warehouse management, dynamic shipping quotes, Stripe payments and full tracking from US arrival to delivery in Mexico.',
    tech: ['Laravel', 'Nuxt', 'Stripe', 'MySQL'],
    image: '/img/boxly.webp',
    link: 'https://boxly.mx/'
  },
  {
    name: 'Propquest.ai',
    role: 'Full platform',
    description:
      'A platform for real estate investors with AI property search, expert filters, skip tracing and property analysis tools.',
    tech: ['Laravel', 'Vue', 'OpenAI'],
    image: '/img/propquest.webp',
    link: 'https://propquest.ai/'
  },
  {
    name: 'Pinclick.mx',
    role: 'Full platform',
    description:
      'A market research tool that simplifies location-based analysis in Mexico. Search a location, select an area and instantly generate a market study to support data-driven decisions.',
    tech: ['Vue', 'Mapping APIs', 'Node.js'],
    image: '/img/pinclick.webp',
    link: 'https://pinclickmx.netlify.app/'
  },
  {
    name: 'Riviera Residencial',
    role: 'Landing page',
    description:
      'Landing page for a 46-home private community inside Real del Mar, between Tijuana and Rosarito. Showcases the Murano and Mazzorbo models with galleries, amenities, location highlights and an availability request form. Developed by HIR Baja, marketed by BCapital Brokers.',
    tech: ['Nuxt', 'Tailwind CSS'],
    image: '/img/riviera-site.webp',
    link: 'https://riviera-real-del-mar.netlify.app/'
  },
  {
    name: 'Vento',
    role: 'Landing page',
    description:
      'Landing page for a boutique residential project of 5 apartments in Tijuana, presenting both typologies with galleries, amenities, location and an availability request flow. Marketed by City Inmobiliaria.',
    tech: ['Nuxt', 'Tailwind CSS'],
    image: '/img/vento-site.webp',
    link: 'https://vento-tijuana.netlify.app/'
  },
  {
    name: 'The Heist by MGMS',
    role: 'Smart contracts + mint platform',
    description:
      'NFT collection with custom ERC-721 smart contracts and a minting platform, built around generative art "Identities" by Latina artist MGMS.',
    tech: ['Solidity', 'ERC-721', 'Vue', 'Web3'],
    image: '/img/theheist.webp',
    link: 'https://www.theheist.world/'
  }
]

useHead({
  htmlAttrs: { lang: 'en' }
})

useSeoMeta({
  title: 'Alejandro Martos — Full-stack developer | Fullstack Labs',
  ogTitle: 'Alejandro Martos — Full-stack developer',
  author: 'Alejandro Martos',
  charset: 'utf-8',
  description:
    'Full-stack developer building web applications, SaaS platforms and AI automation. Selected work, stack and contact details.',
  ogDescription:
    'Full-stack developer building web applications, SaaS platforms and AI automation. Selected work, stack and contact details.',
  robots: 'index, follow',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogUrl: 'https://fullstacklabs.org/me',
  ogType: 'profile',
  twitterCard: 'summary_large_image'
})
</script>

<style>
/* Printing / "Save as PDF" — flip the dark theme to something readable on paper. */
@media print {
  html,
  body,
  .bg-background {
    background: #fff !important;
  }
  .text-white,
  .text-gray-300,
  .text-gray-200 {
    color: #111827 !important;
  }
  .text-blue-300,
  .text-gray-400,
  .text-gray-500 {
    color: #374151 !important;
  }
  .bg-white\/5 {
    background: #f3f4f6 !important;
  }
  .border-white\/10,
  .border-t,
  .border-b {
    border-color: #e5e7eb !important;
  }
  article {
    break-inside: avoid;
  }
  /* On paper the layout stacks (page width < lg), so a full-size portrait
     eats most of page 1 and orphans the contact chips onto page 2. */
  .portrait {
    width: 150px !important;
    margin: 0 !important;
  }
  header {
    break-inside: avoid;
  }
}
</style>
