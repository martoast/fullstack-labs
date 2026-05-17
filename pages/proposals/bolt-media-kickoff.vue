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
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">ACCESOS PARA ARRANCAR</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">Fase 1 — Migración de dominios y hosting</p>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="px-5 sm:px-10 py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-b border-gray-200 text-sm">
        <div>
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">De</p>
          <p class="font-semibold text-gray-900">Alejandro Martos Ayala</p>
          <p class="text-gray-600">Fullstack Labs</p>
          <p class="text-gray-600">alexmartos96@gmail.com</p>
          <p class="text-gray-600">Tel: (619) 888-5248</p>
        </div>
        <div>
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Para</p>
          <p class="font-semibold text-gray-900">Ricardo Ochoa</p>
          <p class="text-gray-600">Bolt Media</p>
          <p class="text-gray-600">Tel: +52 1 612 103 1166</p>
        </div>
      </div>

      <!-- Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Lo que necesitamos para arrancar
        </h2>
      </div>

      <!-- Section 1: Cuentas principales -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          Credenciales de las cuentas principales
        </h3>
        <div class="sm:ml-11 border border-gray-200 rounded-lg p-4 sm:p-5 scope-card">
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            Mándame el <strong>correo y la contraseña</strong> de las siguientes tres cuentas:
          </p>
          <ul class="text-sm text-gray-600 space-y-3 list-disc list-outside pl-5">
            <li>
              <strong class="text-gray-900">GoDaddy</strong> — la cuenta donde están registrados los dominios, para iniciar la transferencia hacia Cloudflare.
            </li>
            <li>
              <strong class="text-gray-900">Cloudflare</strong> — la cuenta destino donde vivirán los dominios y la configuración de DNS.
            </li>
            <li>
              <strong class="text-gray-900">Gmail maestro</strong> — la cuenta de Google que quieren usar como cuenta central de Bolt Media. La usaremos para crear y enlazar la plataforma de hosting donde alojaremos todos los sitios.
            </li>
            <li>
              <strong class="text-gray-900">Cualquier otra cuenta relacionada</strong> — si tienen acceso a algún otro servicio ligado a sus dominios, correo o sitio (por ejemplo Google Workspace, Search Console, Analytics, hosting secundario, etc.), mándenmela también. Mejor sobrar accesos que faltarnos uno a mitad de la migración.
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 2: Hosting -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Acceso al hosting actual
        </h3>
        <div class="sm:ml-11 border border-gray-200 rounded-lg p-4 sm:p-5 scope-card">
          <p class="text-sm text-gray-600 leading-relaxed">
            Mándame el nombre del proveedor donde está hospedado el sitio (Hostinger, Bluehost, GoDaddy Hosting, cPanel, VPS, etc.) junto con el <strong>correo y la contraseña</strong> para entrar al panel.
          </p>
        </div>
      </section>

      <!-- Section 3: CMS / Código del sitio -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Acceso al sitio web o CMS
        </h3>
        <div class="sm:ml-11 border border-gray-200 rounded-lg p-4 sm:p-5 scope-card">
          <p class="text-sm text-gray-600 leading-relaxed">
            Una cosa es el hosting y otra es dónde vive el contenido y el código del sitio. Mándame también el <strong>correo y la contraseña</strong> del panel de administración de la plataforma donde está construido (por ejemplo WordPress, Wix, Squarespace, Webflow, Shopify, etc.). Si el sitio está hecho con código propio en un repositorio (GitHub, GitLab, Bitbucket), compártanme también el acceso al repo.
          </p>
        </div>
      </section>

      <!-- Footer -->
      <div class="bg-gray-50 px-5 sm:px-10 py-6 text-center border-t border-gray-200 mt-2 sm:mt-4">
        <p class="text-sm font-semibold text-gray-700">
          <a href="https://fullstacklabs.org" target="_blank" rel="noopener" class="hover:text-sky-700 transition">Fullstack Labs</a>
        </p>
        <p class="text-sm text-gray-500 mt-1">Alejandro Martos Ayala</p>
        <div class="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-0 text-sm text-gray-500">
          <a href="mailto:alexmartos96@gmail.com" class="hover:text-sky-600 transition break-all">alexmartos96@gmail.com</a>
          <span class="hidden sm:inline mx-2 text-gray-300">·</span>
          <a href="tel:+16198885248" class="hover:text-sky-600 transition">(619) 888-5248</a>
          <span class="hidden sm:inline mx-2 text-gray-300">·</span>
          <a href="https://fullstacklabs.org" target="_blank" rel="noopener" class="hover:text-sky-600 transition">fullstacklabs.org</a>
        </div>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/bolt-media-kickoff' },
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
  title: 'Accesos para arrancar — Bolt Media | Fullstack Labs',
  description: 'Accesos que necesitamos de Bolt Media para arrancar la migración: cuenta de GoDaddy y hosting actual.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Accesos para arrancar — Bolt Media | Fullstack Labs',
  ogDescription: 'Accesos que necesitamos de Bolt Media para arrancar la migración: cuenta de GoDaddy y hosting actual.',
  ogUrl: 'https://fullstacklabs.org/proposals/bolt-media-kickoff',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Accesos para arrancar — Bolt Media | Fullstack Labs',
  twitterDescription: 'Accesos que necesitamos de Bolt Media para arrancar la migración: cuenta de GoDaddy y hosting actual.',
  twitterImage: 'https://fullstacklabs.org/logo.png',
  twitterImageAlt: 'Fullstack Labs'
})

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
