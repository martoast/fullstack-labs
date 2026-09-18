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
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">ALCANCE DE TRABAJO</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">18 de septiembre, 2026</p>
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
          <p class="text-gray-600">Bolt Media · Campestre Media</p>
          <p class="text-gray-600">Proyecto: Sitios web, editor propio y ajustes al CRM</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Sitios web del grupo, editor propio dentro del CRM y ajustes al CRM
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Segunda etapa de la plataforma: centralizar en un mismo lugar los sitios web del grupo, sus
          activos gráficos, la edición y publicación de páginas, el calendario, los pipelines y la
          captación de leads por empresa. Incluye un editor de sitios asistido por IA integrado al CRM
          para que el equipo haga cambios y publique sin depender de terceros, la reconstrucción de los
          sitios en orden de prioridad, y los ajustes al CRM acordados en la reunión.
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
            <div class="flex items-start justify-between gap-3">
              <h4 :class="['font-semibold', card.highlight ? 'text-sky-900' : 'text-gray-900']">{{ card.title }}</h4>
              <span v-if="card.priority" class="bg-sky-100 text-sky-700 rounded-md px-2 py-0.5 text-xs font-bold shrink-0 whitespace-nowrap">{{ card.priority }}</span>
            </div>
            <ul :class="['text-sm mt-1 space-y-1 list-disc list-inside', card.highlight ? 'text-sky-700' : 'text-gray-500']">
              <li v-for="(item, j) in card.items" :key="j">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Investment: per project -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Inversión — Esquema A: por proyecto
        </h3>
        <p class="sm:ml-11 text-sm text-gray-500 mb-4 leading-relaxed">
          Cada proyecto tiene su propio precio y se puede aprobar por separado, en el orden de prioridad
          acordado, o todo el paquete de una vez. Precios en dólares (USD).
        </p>

        <div class="sm:ml-11">
          <!-- Phone: stacked cards -->
          <div class="sm:hidden space-y-3">
            <div v-for="(p, i) in projects" :key="'m' + i" class="border border-gray-200 rounded-lg p-4 scope-card">
              <div class="flex items-start justify-between gap-3">
                <p class="font-semibold text-gray-900 text-sm"><span class="text-gray-400 mr-1">{{ i + 1 }}.</span>{{ p.name }}</p>
                <span class="text-sky-700 font-bold text-sm shrink-0 whitespace-nowrap">{{ p.price }}</span>
              </div>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ p.detail }}</p>
            </div>
            <div class="rounded-lg p-4 border border-sky-200 bg-sky-50 scope-card flex items-center justify-between gap-3">
              <div>
                <p class="font-semibold text-sky-900 text-sm">Total del paquete completo</p>
                <p class="text-xs text-sky-700 mt-0.5">Editor propio, cuatro sitios, ajustes al CRM y capacitación.</p>
              </div>
              <div class="text-right whitespace-nowrap shrink-0">
                <span class="text-2xl font-bold text-sky-700">$2,000</span>
                <span class="text-xs text-sky-400 ml-1">USD</span>
              </div>
            </div>
          </div>

          <!-- Tablet and up: table -->
          <div class="hidden sm:block overflow-x-auto">
            <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                  <th class="px-3 py-2 font-semibold">#</th>
                  <th class="px-3 py-2 font-semibold">Proyecto</th>
                  <th class="px-3 py-2 font-semibold">Incluye</th>
                  <th class="px-3 py-2 font-semibold text-right whitespace-nowrap">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(p, i) in projects" :key="i" class="border-t border-gray-200 align-top">
                  <td class="px-3 py-2 text-gray-400 font-medium">{{ i + 1 }}</td>
                  <td class="px-3 py-2 font-medium text-gray-900">{{ p.name }}</td>
                  <td class="px-3 py-2 text-gray-500">{{ p.detail }}</td>
                  <td class="px-3 py-2 text-sky-700 font-semibold text-right whitespace-nowrap">{{ p.price }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="border-t-2 border-sky-200 bg-sky-50">
                  <td colspan="3" class="px-3 py-3">
                    <p class="font-semibold text-sky-900">Total del paquete completo</p>
                    <p class="text-xs text-sky-700 mt-0.5">Editor propio, cuatro sitios, ajustes al CRM y capacitación al equipo.</p>
                  </td>
                  <td class="px-3 py-3 text-right whitespace-nowrap">
                    <span class="text-2xl sm:text-3xl font-bold text-sky-700">$2,000</span>
                    <span class="text-xs sm:text-sm text-sky-400 ml-1">USD</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="mt-4 rounded-lg p-4 border border-gray-200 scope-card">
            <h4 class="font-semibold text-gray-900 text-sm">Por cotizar aparte, cuando se defina el alcance</h4>
            <ul class="text-sm mt-1 space-y-1 list-disc list-inside text-gray-500">
              <li v-for="(x, i) in later" :key="i">{{ x }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Investment: monthly plan -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Inversión — Esquema B: plan mensual
        </h3>
        <p class="sm:ml-11 text-sm text-gray-500 mb-4 leading-relaxed">
          El mismo alcance, repartido en mensualidades iguales. Cada mes se entrega lo que corresponde al
          orden de prioridad, y el equipo va usando el editor conforme se publica cada sitio.
        </p>
        <div class="sm:ml-11 rounded-lg p-4 border border-sky-200 bg-sky-50 scope-card">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p class="font-semibold text-sky-900">4 mensualidades</p>
              <p class="text-xs text-sky-700 mt-0.5">Mismo total que el Esquema A. La primera mensualidad se cubre al arrancar.</p>
            </div>
            <div class="text-left sm:text-right whitespace-nowrap">
              <span class="text-2xl sm:text-3xl font-bold text-sky-700">$500</span>
              <span class="text-xs sm:text-sm text-sky-400 ml-1">USD / mes</span>
            </div>
          </div>
          <ul class="text-sm mt-3 space-y-1 list-disc list-inside text-sky-700">
            <li v-for="(m, i) in monthly" :key="i"><strong class="text-sky-900">{{ m.label }}:</strong> {{ m.detail }}</li>
          </ul>
        </div>
      </section>

      <!-- Timeline -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Tiempos y orden de trabajo
        </h3>
        <p class="sm:ml-11 text-sm text-gray-500 mb-4 leading-relaxed">
          Como se comentó en la reunión: aproximadamente una semana por sitio a partir de que arranca,
          incluyendo elaboración, retroalimentación y entrega en el editor; alrededor de cuatro páginas por
          mes. Es una estimación de planeación, no una fecha contractual — depende de la complejidad, las
          correcciones y las validaciones del equipo.
        </p>
        <div class="sm:ml-11 space-y-3">
          <div
            v-for="(step, i) in timeline"
            :key="i"
            class="border border-gray-200 rounded-lg p-4 flex items-start gap-3 scope-card"
          >
            <span class="bg-sky-100 text-sky-700 rounded-md px-2 py-1 text-xs font-bold shrink-0 whitespace-nowrap">{{ step.label }}</span>
            <div>
              <p class="font-semibold text-gray-900 text-sm">{{ step.title }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ step.detail }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Deliverables -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Entregables
        </h3>
        <div class="sm:ml-11 space-y-3 text-sm">
          <div v-for="(item, i) in deliverables" :key="i" class="flex items-start">
            <span class="text-sky-500 mr-2 mt-0.5 shrink-0">✓</span>
            <span class="text-gray-600"><strong class="text-gray-900">{{ item.title }}</strong> — {{ item.detail }}</span>
          </div>
        </div>
      </section>

      <!-- What we need from Campestre -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">6</span>
          Lo que necesitamos del equipo de Campestre
        </h3>
        <div class="sm:ml-11 rounded-lg p-4 border border-gray-200 scope-card">
          <ul class="text-sm space-y-1.5 list-disc list-inside text-gray-500">
            <li v-for="(n, i) in needs" :key="i">{{ n }}</li>
          </ul>
        </div>
      </section>

      <!-- Payment methods -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">7</span>
          Métodos de pago
        </h3>
        <div class="sm:ml-11 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div class="border border-gray-200 rounded-lg p-4 flex items-start gap-3 scope-card">
            <span class="text-xl shrink-0">💳</span>
            <div>
              <p class="font-semibold text-gray-900">Stripe</p>
              <p class="text-gray-500 text-xs mt-1">Tarjeta de crédito/débito, mediante liga de pago</p>
            </div>
          </div>
          <div class="border border-gray-200 rounded-lg p-4 flex items-start gap-3 scope-card">
            <span class="text-xl shrink-0">💰</span>
            <div>
              <p class="font-semibold text-gray-900">Efectivo</p>
              <p class="text-gray-500 text-xs mt-1">Pago en persona</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Notes -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>En el Esquema A cada proyecto arranca una vez aprobado y recibido su pago. En el Esquema B el trabajo arranca con la primera mensualidad.</li>
          <li>Antes de iniciar cada sitio se confirma por escrito el alcance, el nombre definitivo del sitio y quién aprueba de parte de Campestre; sin eso la semana estimada no corre.</li>
          <li>Los dominios ya están bajo control de la empresa; las renovaciones de dominio y los planes de Google Workspace son pagos directos del cliente y no forman parte de esta cotización.</li>
          <li>Los sitios se publican priorizando rendimiento móvil y tiempos de carga; las animaciones y elementos 3D se incorporan sin comprometer eso.</li>
          <li>No se implementa un bot de IA para atención de leads en esta etapa; la atención se mantiene manual y se registra en el CRM. La integración del WhatsApp de cada asesor se evaluará después.</li>
          <li>Cambios significativos fuera del alcance descrito pueden requerir un ajuste en costo y tiempo.</li>
        </ul>
      </section>

      <!-- Footer -->
      <div class="bg-gray-50 px-5 sm:px-10 py-6 text-center border-t border-gray-200">
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/campestre' },
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
  title: 'Alcance de trabajo — Sitios web y editor propio, Campestre Media | Fullstack Labs',
  description: 'Alcance de trabajo de Fullstack Labs para Bolt Media / Campestre Media: sitios web del grupo, editor de sitios asistido por IA dentro del CRM y ajustes al CRM. Cotización por proyecto y plan mensual.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Alcance de trabajo — Sitios web y editor propio, Campestre Media | Fullstack Labs',
  ogDescription: 'Sitios web del grupo, editor de sitios asistido por IA dentro del CRM y ajustes al CRM. Cotización por proyecto y plan mensual.',
  ogUrl: 'https://fullstacklabs.org/proposals/campestre',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Alcance de trabajo — Sitios web y editor propio, Campestre Media | Fullstack Labs',
  twitterDescription: 'Sitios web del grupo, editor de sitios asistido por IA dentro del CRM y ajustes al CRM. Cotización por proyecto y plan mensual.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    highlight: true,
    priority: 'Base de todo',
    title: 'Editor de sitios web con IA dentro del CRM',
    items: [
      'Módulo de Sitios dentro del CRM: cada empresa del grupo con sus sitios, páginas, dominio y activos gráficos en un solo lugar',
      'Editor asistido por IA: se señala una sección o un texto en la vista previa y se pide el cambio en lenguaje natural; el equipo cambia textos, imágenes y secciones sin tocar código',
      'Biblioteca de activos (logos, fotografías, video) compartida con el CRM, reutilizable en cualquier página',
      'Publicación directa al dominio de cada sitio, con historial de versiones para deshacer cualquier cambio',
      'Formularios de contacto conectados al pipeline de cada empresa: cada lead entra directo al CRM con su origen',
      'Los sitios se construyen y se entregan dentro de este editor, para que dejen de depender de un proveedor externo'
    ]
  },
  {
    priority: 'Prioridad 1',
    title: 'Sitio corporativo del grupo (Bolt / Bolt Business — nombre por confirmar)',
    items: [
      'Corrección inmediata de las fallas visibles: el cambio de empresa que no desplaza la sección correctamente, navegación y presentación',
      'Revisión de la versión en inglés, adaptación móvil, tipografías e imágenes',
      'Migración del sitio al editor propio, usando los accesos a WordPress ya compartidos y el dominio que ya controla la empresa'
    ]
  },
  {
    priority: 'Prioridad 2',
    title: 'Campestre Guatemala',
    items: [
      'Modernización del diseño conservando, en principio, la estructura de secciones existente',
      'Construido en el editor propio; sirve de base de criterios para Campestre México'
    ]
  },
  {
    priority: 'Prioridad 3',
    title: 'City Inmobiliaria',
    items: [
      'Rediseño completo a partir de las referencias visuales recopiladas por el equipo',
      'Formulario de captación conectado al pipeline de City dentro del CRM'
    ]
  },
  {
    priority: 'Prioridad 4',
    title: 'Campestre México',
    items: [
      'Actualización de la página principal tomando como base los avances y criterios definidos para Guatemala'
    ]
  },
  {
    priority: 'En paralelo',
    title: 'Ajustes al CRM',
    items: [
      'Permisos y confidencialidad: diseño, multimedia y producción ven únicamente el calendario — sin contactos, negocios, propuestas, cifras, pagos ni dashboard comercial; cada asesor ve sus propias cotizaciones y contactos; gerencia y dirección comercial con vista integral',
      'Clasificación: sectores estandarizados y administrables por la cuenta (incluyendo despacho de abogados, tienda departamental y alimentos y bebidas), con depuración de los registros existentes',
      'Duplicados: validación al capturar un contacto — si ya existe, se muestra la ficha y quién lo atiende en lugar de crear otro',
      'Ficha de contacto con nombre, empresa y cargo como campos separados; filtros por asesor en contactos y pipeline (contactos asignados y propuestas enviadas)',
      'Correo: adjuntar PDFs (cotizaciones, contratos, kits) a los correos del CRM, y corregir el dominio remitente para que el correo salga a nombre de Campestre',
      'Dashboard: vistas diferenciadas para asesor y administración — propuestas, cierres, cuentas por cobrar, entregables y acciones pendientes — con los próximos tres eventos y recordatorios',
      'Seguimiento comercial manual: registro de llamadas y WhatsApp en el CRM, sin bot de IA en esta etapa'
    ]
  },
  {
    priority: 'Al cierre',
    title: 'Capacitación al equipo',
    items: [
      'Sesión de capacitación una vez implementado el editor, para que el equipo haga cambios menores en las páginas por su cuenta',
      'Guía de uso breve del editor y de los permisos nuevos del CRM'
    ]
  }
]

const projects = [
  { name: 'Editor de sitios web con IA dentro del CRM', detail: 'Módulo de Sitios, editor asistido por IA, biblioteca de activos, publicación con historial y formularios ligados al pipeline', price: '$600' },
  { name: 'Sitio corporativo del grupo', detail: 'Corrección de fallas, revisión de inglés y móvil, migración de WordPress al editor propio', price: '$300' },
  { name: 'Campestre Guatemala', detail: 'Rediseño moderno sobre la estructura actual, construido en el editor', price: '$250' },
  { name: 'City Inmobiliaria', detail: 'Rediseño completo a partir de las referencias, con formulario al pipeline', price: '$250' },
  { name: 'Campestre México', detail: 'Actualización de la página principal con los criterios de Guatemala', price: '$200' },
  { name: 'Ajustes al CRM', detail: 'Permisos por departamento, sectores y duplicados, ficha y filtros, adjuntos y dominio de correo, vistas del dashboard', price: '$200' },
  { name: 'Capacitación al equipo', detail: 'Sesión + guía de uso, tras implementar el editor', price: '$200' }
]

const later = [
  'Sitios adicionales del ecosistema (Printify y las demás marcas mencionadas): $250 USD por sitio, una vez validado el listado y la secuencia',
  'Carga de propuestas / contratos en PDF vinculados al calendario — se cotiza al recibir la descripción de la función por parte del equipo de Campestre',
  'Pipeline de reclutamiento (formulario, carga de CV, etapas de evaluación y agenda de entrevistas) — requiere definir el alcance',
  'Integración del WhatsApp de cada asesor — se evalúa después de esta etapa'
]

const monthly = [
  { label: 'Mes 1', detail: 'ajustes al CRM, corrección de fallas del sitio corporativo y arranque del editor' },
  { label: 'Mes 2', detail: 'editor en producción y sitio corporativo migrado y publicado en él' },
  { label: 'Mes 3', detail: 'Campestre Guatemala y City Inmobiliaria' },
  { label: 'Mes 4', detail: 'Campestre México, capacitación al equipo y cierre' }
]

const timeline = [
  {
    label: 'Próximos días',
    title: 'Ajustes al CRM y fallas del sitio corporativo',
    detail: 'Se aplican los ajustes priorizados del CRM (permisos, sectores, duplicados, ficha, adjuntos, dominio de correo) y se corrigen las fallas visibles del sitio corporativo en su plataforma actual, mientras se construye el editor.'
  },
  {
    label: 'Semanas 1–3',
    title: 'Editor de sitios dentro del CRM',
    detail: 'Módulo de Sitios, editor asistido por IA, biblioteca de activos, publicación con historial y formularios conectados al pipeline. Se entrega con el sitio corporativo ya migrado como primer sitio vivo.'
  },
  {
    label: 'Semana 4',
    title: 'Campestre Guatemala',
    detail: 'Una semana desde el arranque: elaboración, retroalimentación del equipo y entrega en el editor.'
  },
  {
    label: 'Semana 5',
    title: 'City Inmobiliaria',
    detail: 'Rediseño a partir de las referencias ya recopiladas; misma dinámica de una semana.'
  },
  {
    label: 'Semana 6',
    title: 'Campestre México y capacitación',
    detail: 'Actualización de la página principal con los criterios de Guatemala, sesión de capacitación y guía de uso para el equipo.'
  }
]

const deliverables = [
  { title: 'Módulo de Sitios en el CRM', detail: 'editor asistido por IA, biblioteca de activos, publicación con historial de versiones y formularios ligados al pipeline de cada empresa' },
  { title: 'Sitio corporativo del grupo', detail: 'corregido, revisado en inglés y móvil, y publicado desde el editor propio' },
  { title: 'Campestre Guatemala', detail: 'rediseñado y publicado desde el editor' },
  { title: 'City Inmobiliaria', detail: 'rediseñado a partir de las referencias y publicado desde el editor, con formulario al pipeline' },
  { title: 'Campestre México', detail: 'página principal actualizada y publicada desde el editor' },
  { title: 'CRM ajustado', detail: 'permisos por departamento y por asesor, sectores administrables, prevención de duplicados, ficha y filtros nuevos, adjuntos en correo, dominio remitente correcto y vistas del dashboard por rol' },
  { title: 'Capacitación y documentación', detail: 'sesión con el equipo y guía de uso del editor y de los permisos' }
]

const needs = [
  'Referencias y estructura de sitios para Campestre y City (se mencionaron en la reunión; confirmar que la entrega esté completa)',
  'Nombre definitivo de cada sitio y quién aprueba de parte de Campestre antes de arrancar cada uno',
  'Descripción de la función de carga de propuestas / contratos PDF vinculados al calendario (Jocsan, coordinación por confirmar) para poder cotizarla',
  'Listado y secuencia de los demás sitios del ecosistema (Printify y las marcas restantes) antes de programarlos',
  'El dominio de correo con el que debe salir la correspondencia del CRM, para configurarlo como remitente'
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
