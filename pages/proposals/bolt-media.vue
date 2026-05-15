<template>
  <div class="text-gray-800 font-sans">

    <!-- Print Button -->
    <div class="no-print fixed top-3 right-3 sm:top-4 sm:right-4 z-50">
      <button
        @click="printPage"
        class="bg-sky-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-lg hover:bg-sky-700 transition text-xs sm:text-sm font-medium"
      >
        <span class="hidden sm:inline">Imprimir / Guardar PDF</span>
        <span class="sm:hidden">PDF</span>
      </button>
    </div>

    <div class="max-w-4xl mx-auto bg-white shadow-none sm:shadow-xl my-0 sm:my-8 print:my-0 print:shadow-none">

      <!-- Header -->
      <div class="bg-gradient-to-r from-sky-700 to-sky-900 text-white px-5 sm:px-10 py-6 sm:py-8">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <a href="https://fullstacklabs.org" target="_blank" rel="noopener">
              <img src="/logo.svg" alt="Fullstack Labs" class="h-14 sm:h-20 w-auto" />
            </a>
          </div>
          <div class="text-left sm:text-right">
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">PROPUESTA</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">14 de mayo, 2026</p>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="px-5 sm:px-10 py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-b border-gray-200 text-sm">
        <div>
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">De</p>
          <p class="font-semibold text-gray-900">Alejandro Martos Ayala</p>
          <p class="text-gray-600">Fullstack Labs</p>
          <p class="text-gray-600">Tel: (619) 888-5248</p>
        </div>
        <div>
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Para</p>
          <p class="font-semibold text-gray-900">Ricardo Ochoa</p>
          <p class="text-gray-600">Bolt Media</p>
          <p class="text-gray-600">Tel: +52 1 612 103 1166</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Migración, Infraestructura, Sitio Web y CRM — Bolt Media
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Infraestructura digital consolidada, nueva landing page enfocada en conversión, y un CRM a la medida para gestionar todo el flujo de leads.
        </p>
      </div>

      <!-- Scope -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          Alcance del trabajo
        </h3>

        <div class="space-y-4 sm:ml-11">
          <div
            v-for="(card, i) in scopeCards"
            :key="i"
            :class="['rounded-lg p-4 scope-card border', card.highlight ? 'border-sky-200 bg-sky-50' : 'border-gray-200']"
          >
            <h4 :class="['font-semibold', card.highlight ? 'text-sky-900' : 'text-gray-900']">{{ card.title }}</h4>
            <ul :class="['text-sm mt-1 space-y-1 list-disc list-inside', card.highlight ? 'text-sky-700' : 'text-gray-500']">
              <li v-for="(item, j) in card.items" :key="j">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Deliverables -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Entregables
        </h3>
        <div class="sm:ml-11 space-y-3 text-sm">
          <div v-for="(item, i) in deliverables" :key="i" class="flex items-start">
            <span class="text-sky-500 mr-2 mt-0.5 shrink-0">✓</span>
            <span class="text-gray-600"><strong class="text-gray-900">{{ item.title }}</strong> — {{ item.detail }}</span>
          </div>
        </div>
      </section>

      <!-- Pricing -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Inversión
        </h3>

        <div class="sm:ml-11">
          <!-- Mobile cards (≤sm) -->
          <div class="space-y-3 sm:hidden">
            <div
              v-for="(row, i) in lineItems"
              :key="i"
              class="border border-gray-200 rounded-lg p-4"
            >
              <p class="font-semibold text-gray-900 text-sm">{{ row.name }}</p>
              <p class="text-gray-400 text-xs mt-1 leading-relaxed">{{ row.detail }}</p>
              <div class="flex justify-end items-center mt-3 pt-3 border-t border-gray-100">
                <span class="font-semibold text-gray-900 text-sm">{{ row.cost }}</span>
              </div>
            </div>
          </div>

          <!-- Desktop table (≥sm) -->
          <table class="w-full text-sm hidden sm:table">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 font-semibold text-gray-500 uppercase text-xs tracking-wider">Concepto</th>
                <th class="text-right py-3 font-semibold text-gray-500 uppercase text-xs tracking-wider">Costo (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in lineItems" :key="i" class="border-b border-gray-100 align-top">
                <td class="py-4 pr-4">
                  <p class="font-semibold text-gray-900">{{ row.name }}</p>
                  <p class="text-gray-400 text-xs mt-0.5">{{ row.detail }}</p>
                </td>
                <td class="text-right py-4 font-semibold text-gray-900 whitespace-nowrap">{{ row.cost }}</td>
              </tr>
            </tbody>
          </table>

          <!-- Total -->
          <div class="mt-5 sm:mt-6 bg-sky-50 border border-sky-200 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
            <div>
              <p class="font-semibold text-sky-900">Total del proyecto</p>
              <p class="text-xs text-sky-500 mt-0.5">Migraciones + Landing Page + CRM personalizado</p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $2,500.00 <span class="text-sm sm:text-base font-normal text-sky-400">USD</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Payment -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Métodos de pago
        </h3>
        <div class="sm:ml-11 grid grid-cols-2 gap-3 sm:gap-4">
          <div class="border border-gray-200 rounded-lg p-3 sm:p-4 text-center">
            <div class="text-xl sm:text-2xl mb-1">💳</div>
            <p class="font-semibold text-gray-900 text-sm">Stripe</p>
            <p class="text-gray-400 text-xs mt-1">Tarjeta de crédito/débito</p>
          </div>
          <div class="border border-gray-200 rounded-lg p-3 sm:p-4 text-center">
            <div class="text-xl sm:text-2xl mb-1">💰</div>
            <p class="font-semibold text-gray-900 text-sm">Efectivo</p>
            <p class="text-gray-400 text-xs mt-1">Pago en persona</p>
          </div>
        </div>
      </section>

      <!-- Notes -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>Los costos de renovación de dominios en Cloudflare y los planes de Google Workspace son pagos directos del cliente y no están incluidos en esta propuesta.</li>
          <li>El hosting en Netlify se cubre dentro del plan gratuito o estándar según el volumen de tráfico — cualquier excedente correrá por cuenta del cliente.</li>
          <li>Cambios significativos fuera del alcance descrito pueden requerir un ajuste en costo y tiempo.</li>
          <li>El proyecto inicia una vez aprobada la propuesta y recibido el primer pago.</li>
        </ul>
      </section>

      <!-- Footer -->
      <div class="bg-gray-50 px-5 sm:px-10 py-5 sm:py-6 text-center border-t border-gray-200">
        <p class="text-sm text-gray-400">
          <a href="https://fullstacklabs.org" target="_blank" rel="noopener" class="text-gray-600 font-semibold hover:text-sky-700 transition">Fullstack Labs</a> · Alejandro Martos Ayala · (619) 888-5248
        </p>
        <p class="text-xs text-gray-400 mt-1">
          <a href="https://fullstacklabs.org" target="_blank" rel="noopener" class="hover:text-sky-600 transition">fullstacklabs.org</a>
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

useHead({
  htmlAttrs: { lang: 'es' },
  bodyAttrs: { class: 'bg-primary' },
  link: [
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/bolt-media' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
    { name: 'theme-color', content: '#0369a1' }
  ]
})

useSeoMeta({
  title: 'Propuesta — Bolt Media | Fullstack Labs',
  description: 'Propuesta de Fullstack Labs para Bolt Media: migración de infraestructura, rediseño del sitio web y CRM personalizado multi-tenant con dashboard en tiempo real.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Propuesta — Bolt Media | Fullstack Labs',
  ogDescription: 'Migración, infraestructura, sitio web rediseñado y CRM personalizado con dashboard en tiempo real — propuesta integral para Bolt Media.',
  ogUrl: 'https://fullstacklabs.org/proposals/bolt-media',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Propuesta — Bolt Media | Fullstack Labs',
  twitterDescription: 'Migración, infraestructura, sitio web rediseñado y CRM personalizado con dashboard en tiempo real — propuesta integral para Bolt Media.',
  twitterImage: 'https://fullstacklabs.org/logo.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    title: 'Migración de dominios — GoDaddy a Cloudflare',
    items: [
      'Transferencia de todos los dominios existentes en GoDaddy hacia Cloudflare',
      'Configuración de DNS, registros MX, SSL y reglas de seguridad en Cloudflare',
      'Validación de que ningún servicio activo (correo, sitios) se vea interrumpido durante la migración'
    ]
  },
  {
    title: 'Migración de cuentas y servicios asociados',
    items: [
      'Migración de Google Search Console y Google Workspace a la nueva infraestructura',
      'Migración del hosting actual a Netlify, donde se alojarán las landing pages',
      'Conexión de Netlify con los dominios ya transferidos a Cloudflare',
      'Entrega de accesos y documentación de todas las cuentas migradas'
    ]
  },
  {
    title: 'Rediseño del sitio web boltmedia.com.mx',
    items: [
      'Rediseño completo del sitio actual con enfoque en conversión de leads',
      'Reestructuración del embudo de ventas dentro de la landing page',
      'Diseño moderno, responsivo y optimizado para dispositivos móviles',
      'Integración directa con el CRM — los formularios envían leads automáticamente',
      'Despliegue final en Netlify, conectado al dominio en Cloudflare'
    ]
  },
  {
    highlight: true,
    title: 'CRM personalizado multi-tenant',
    items: [
      'Sistema CRM a la medida — similar en funcionalidad a Go High Level pero personalizado',
      'Captura automática de leads provenientes de la landing page',
      'Interfaz tipo Kanban para gestionar pipelines, etapas y estatus de cada lead',
      'Multi-tenant — soporte para múltiples equipos / cuentas dentro del mismo sistema',
      'Asignación de leads a miembros del equipo y seguimiento del avance',
      'Panel de administración para gestionar usuarios, permisos y configuración',
      'Dashboard administrativo en tiempo real — visualización de leads entrantes, métricas clave y KPIs para medir el desempeño del equipo y del embudo de ventas'
    ]
  }
]

const deliverables = [
  { title: 'Dominios migrados a Cloudflare', detail: 'DNS, SSL y configuración de seguridad listos' },
  { title: 'Cuentas migradas', detail: 'Google Search Console, Google Workspace y hosting consolidados' },
  { title: 'Hosting unificado en Netlify', detail: 'conectado a los dominios en Cloudflare' },
  { title: 'Sitio web boltmedia.com.mx rediseñado', detail: 'desplegado, responsivo y optimizado para conversión' },
  { title: 'CRM personalizado desplegado', detail: 'multi-tenant, con interfaz Kanban y gestión de equipo' },
  { title: 'Integración landing → CRM', detail: 'captura automática de leads desde el sitio' },
  { title: 'Documentación y accesos', detail: 'credenciales, guías de uso y panel administrativo' }
]

const lineItems = [
  {
    name: 'Migración de dominios y cuentas',
    detail: 'GoDaddy → Cloudflare, Google Workspace, Search Console y hosting → Netlify',
    type: 'Pago único',
    cost: '$350.00'
  },
  {
    name: 'Rediseño y desarrollo de la landing page',
    detail: 'Rediseño completo de boltmedia.com.mx con embudo de ventas optimizado',
    type: 'Pago único',
    cost: '$950.00'
  },
  {
    name: 'CRM personalizado multi-tenant',
    detail: 'Interfaz Kanban, gestión de pipelines, asignación de equipo, integración con landing',
    type: 'Pago único',
    cost: '$1,200.00'
  }
]

function printPage() {
  if (typeof window !== 'undefined') window.print()
}
</script>

<style>
html, body { background-color: #8298B0; }
body { margin: 0; overscroll-behavior: none; }

@media print {
  html, body { background: #ffffff !important; }
  body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
  .no-print { display: none !important; }
  .page-break { page-break-before: always; }
  @page { margin: 12mm; }
  .avoid-break,
  .scope-card,
  table,
  tr,
  h2, h3, h4 {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  h2, h3, h4 {
    break-after: avoid;
    page-break-after: avoid;
  }
}
</style>
