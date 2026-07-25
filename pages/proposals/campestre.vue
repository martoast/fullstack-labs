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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">24 de julio, 2026</p>
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
          <p class="text-gray-600">Proyecto: Campestre Media</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Plataforma CRM y de gestión comercial — Campestre Media
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Una plataforma a la medida para que Campestre Media administre todo su ciclo comercial en un
          solo lugar: contactos y cuentas por segmento, propuestas y ventas de sus paquetes
          publicitarios, seguimiento de entregables por edición de la revista, y facturación y cobros
          automatizados vía Stripe.
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

      <!-- Product catalog for validation -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Catálogo y estructura de precios — para revisión y confirmación
        </h3>
        <p class="sm:ml-11 text-sm text-gray-500 mb-4 leading-relaxed">
          Este es el catálogo que se configurará en la plataforma, basado en la operación actual de
          Campestre Media. <strong class="text-gray-700">Favor de revisarlo y confirmar (o corregir)
          niveles, precios y reglas antes de iniciar el desarrollo</strong> — será la base de las
          ventas, los entregables y la cobranza del sistema.
        </p>

        <div class="sm:ml-11 space-y-5">
          <!-- Tier table -->
          <div>
            <h4 class="font-semibold text-gray-900 text-sm mb-2">Niveles de paquete (precio mensual, MXN + IVA)</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr class="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                    <th class="px-3 py-2 font-semibold">Nivel</th>
                    <th class="px-3 py-2 font-semibold whitespace-nowrap">Precio / mes</th>
                    <th class="px-3 py-2 font-semibold">Producto ancla</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(t, i) in tiers" :key="i" class="border-t border-gray-200">
                    <td class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">{{ t.name }}</td>
                    <td class="px-3 py-2 text-sky-700 font-semibold whitespace-nowrap">{{ t.price }}</td>
                    <td class="px-3 py-2 text-gray-500">{{ t.anchor }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Inventory pools -->
          <div class="rounded-lg p-4 border border-gray-200 scope-card">
            <h4 class="font-semibold text-gray-900 text-sm">Los cinco inventarios que alimentan cada paquete</h4>
            <ul class="text-sm mt-1 space-y-1 list-disc list-inside text-gray-500">
              <li v-for="(inv, i) in inventories" :key="i">{{ inv }}</li>
            </ul>
          </div>

          <!-- Add-ons -->
          <div class="rounded-lg p-4 border border-gray-200 scope-card">
            <h4 class="font-semibold text-gray-900 text-sm">Complementos y cortesías (se ligan a los paquetes, sin precio individual)</h4>
            <ul class="text-sm mt-1 space-y-1 list-disc list-inside text-gray-500">
              <li v-for="(a, i) in addons" :key="i">{{ a }}</li>
            </ul>
          </div>

          <!-- Payment structure -->
          <div class="rounded-lg p-4 border border-sky-200 bg-sky-50 scope-card">
            <h4 class="font-semibold text-sky-900 text-sm">Reglas comerciales y de cobro que aplicará el sistema</h4>
            <ul class="text-sm mt-1 space-y-1 list-disc list-inside text-sky-700">
              <li v-for="(r, i) in paymentRules" :key="i">{{ r }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Cronograma — 4 semanas
        </h3>
        <div class="sm:ml-11 space-y-3">
          <div
            v-for="(week, i) in timeline"
            :key="i"
            class="border border-gray-200 rounded-lg p-4 flex items-start gap-3 scope-card"
          >
            <span class="bg-sky-100 text-sky-700 rounded-md px-2 py-1 text-xs font-bold shrink-0 whitespace-nowrap">{{ week.label }}</span>
            <div>
              <p class="font-semibold text-gray-900 text-sm">{{ week.title }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ week.detail }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Deliverables -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Entregables
        </h3>
        <div class="sm:ml-11 space-y-3 text-sm">
          <div v-for="(item, i) in deliverables" :key="i" class="flex items-start">
            <span class="text-sky-500 mr-2 mt-0.5 shrink-0">✓</span>
            <span class="text-gray-600"><strong class="text-gray-900">{{ item.title }}</strong> — {{ item.detail }}</span>
          </div>
        </div>
      </section>

      <!-- Notes -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>Las comisiones de Stripe por transacción las define Stripe y no forman parte de este alcance.</li>
          <li>La información inicial (cartera de clientes, catálogo de paquetes, propuestas activas) será proporcionada por el equipo de Campestre Media para su carga en la plataforma.</li>
          <li>La facturación fiscal (CFDI / timbrado ante el SAT) no está incluida en esta etapa; la plataforma genera los cobros y recibos vía Stripe y deja registro para el proceso contable.</li>
          <li>Cambios significativos fuera del alcance descrito pueden requerir un ajuste en el cronograma.</li>
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
  title: 'Alcance de trabajo — CRM Campestre Media | Fullstack Labs',
  description: 'Alcance de trabajo de Fullstack Labs para Bolt Media: plataforma CRM y de gestión comercial para Campestre Media con contactos, ventas, seguimiento de entregables por edición y cobros vía Stripe.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Alcance de trabajo — CRM Campestre Media | Fullstack Labs',
  ogDescription: 'Plataforma CRM y de gestión comercial para Campestre Media: contactos, ventas, entregables por edición y cobros vía Stripe.',
  ogUrl: 'https://fullstacklabs.org/proposals/campestre',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Alcance de trabajo — CRM Campestre Media | Fullstack Labs',
  twitterDescription: 'Plataforma CRM y de gestión comercial para Campestre Media: contactos, ventas, entregables por edición y cobros vía Stripe.',
  twitterImage: 'https://fullstacklabs.org/logo.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    title: 'CRM de contactos y cuentas',
    items: [
      'Base de datos de clientes y prospectos con contactos, notas e historial de interacciones',
      'Segmentación por vertical: desarrolladores/bienes raíces, política, cámaras y líderes empresariales, hospitalidad/salud/retail',
      'Pipeline comercial tipo Kanban: prospecto → propuesta enviada → negociación → firmada / perdida',
      'Historial de versiones de propuesta por cliente — cambios de precio, plazo y cortesías quedan registrados para dar seguimiento a cada negociación',
      'Asignación de cuentas a miembros del equipo y recordatorios de seguimiento'
    ]
  },
  {
    title: 'Catálogo de productos y paquetes',
    items: [
      'Catálogo de los cinco inventarios: revista impresa, réplica digital, programas/podcasts, pantallas y base de correo/eventos',
      'Paquetes por nivel (plana, publirreportaje, secciones premium, portada) con precio mensual, IVA y vigencia',
      'Complementos y cortesías (REPLAY, video, cobertura de eventos, pantallas, envíos de correo) ligados a cada paquete',
      'Soporte para acuerdos de intercambio (barter) como tipo de contrato sin cobro, con valor nominal registrado'
    ]
  },
  {
    title: 'Ventas y contratos',
    items: [
      'Registro de cada venta con paquete, monto mensual, IVA, duración y calendario de pagos iguales',
      'Primer pago ligado a la firma — el contrato arranca al confirmarse el pago inicial',
      'Ciclo por edición de la revista (del 15 al 15) — cada venta se asocia a las ediciones que abarca',
      'Estatus de contrato: activo, por renovar, vencido — con alertas de renovación antes del cierre de cada edición'
    ]
  },
  {
    highlight: true,
    title: 'Seguimiento de entregables por edición',
    items: [
      'Checklist de entregables por cliente y por edición: planas, publirreportajes, apariciones en podcast, cápsulas REPLAY, cobertura de eventos, envíos de correo y pantalla',
      'Tablero por edición — qué se le debe a cada cliente este mes y qué ya se entregó',
      'Estatus por entregable (pendiente, en producción, publicado) con responsable y fecha',
      'Vista por cliente para transparencia total: todo lo contratado contra todo lo entregado',
      'Alertas de entregables atrasados antes del cierre de edición'
    ]
  },
  {
    title: 'Facturación y cobros con Stripe',
    items: [
      'Generación automática del calendario de cobros mensuales de cada contrato',
      'Cobro vía Stripe: links de pago y cobro recurrente por tarjeta',
      'Estatus de cada pago (pendiente, pagado, vencido) con recordatorios automáticos de cobranza',
      'Registro de pagos fuera de Stripe (transferencia, efectivo) y de contratos de intercambio sin cobro',
      'Historial de facturación por cliente y por contrato'
    ]
  },
  {
    title: 'Dashboard y administración',
    items: [
      'Dashboard general: valor del pipeline, ingresos mensuales contratados, cobranza pendiente y entregables abiertos por edición',
      'Reportes por vertical, por paquete y por vendedor',
      'Panel de administración con usuarios, roles y permisos',
      'Diseño adaptable a celular para gestionar todo desde el teléfono'
    ]
  }
]

const tiers = [
  { name: 'Plana', price: '$13,000', anchor: 'Una plana (anuncio de página completa) en revista impresa + réplica web' },
  { name: 'Publirreportaje', price: '$20,000', anchor: 'Publirreportaje de 2 páginas + perfil en podcast o video (1 mes)' },
  { name: 'Publirreportaje plus', price: '$25,000', anchor: 'Publirreportaje o sección gastronómica + aparición en podcast o programa' },
  { name: 'Sección premium', price: '$30,000', anchor: 'Sección Imperdibles o paquete de cobertura de evento + planas multi-mes' },
  { name: 'Paquete mayor', price: '$40,000', anchor: 'Paquetes ampliados: cobertura de eventos, Imperdibles + REPLAY, patrocinios' },
  { name: 'Portada', price: '$50,000', anchor: 'Portada + reportaje de portada de 6 páginas + planas mensuales + podcast/programa (compromiso de 6 meses)' }
]

const inventories = [
  'Revista impresa mensual — circula en Tijuana, Rosarito, Tecate, Ensenada, Mexicali y puntos de San Diego; cada edición corre del 15 al 15',
  'Réplica digital — todo lo impreso se republica en campestre.media, Facebook, Instagram, LinkedIn, Threads, TikTok y X (+ YouTube/Spotify para podcasts)',
  'Programas y podcasts propios — TrendTalk, Campestre Médico, Cosas de Mujeres, Visionarios, Lujo y Sabor, Top of Mind y Perfil en Video',
  'Pantallas físicas — mega-pantallas en Gran Hotel Tijuana y TV Azteca Tijuana',
  'Base de correo y eventos — envíos masivos a la base de contactos de Baja California y Executive Mornings by Campestre'
]

const addons = [
  'Cápsulas animadas REPLAY (1 por mes)',
  'Video promocional y perfil en video',
  'Kit de cobertura de evento: nota web + video recap + video entrevistas + publicación social',
  'Presencia en pantallas (frecuentemente como cortesía)',
  'Envíos de correo masivo (solo en paquetes mayores)',
  'Espacios de conferencia en Executive Mornings'
]

const paymentRules = [
  'Pagos mensuales iguales durante la vigencia del contrato — sin anticipos porcentuales ni hitos',
  'El primer pago se efectúa a la firma de la propuesta — la firma dispara el cobro inicial',
  'Duraciones típicas: 1 mes (políticos, restaurantes, eventos), 2–4 meses (paquetes medios), 5–6 meses (portadas), hasta 8–12 meses en casos especiales',
  'Todos los precios son + IVA; el sistema permitirá marcar excepciones donde el IVA se absorbe',
  'Contratos de intercambio (barter) sin cobro, con valor nominal registrado y mismos entregables',
  'Los descuentos y reestructuras (bajar mensualidad, extender plazo, convertir items a cortesía) quedan registrados como versiones de la propuesta'
]

const timeline = [
  {
    label: 'Semana 1',
    title: 'Base, CRM y catálogo',
    detail: 'Diseño de la plataforma, base de datos, contactos y cuentas segmentadas, pipeline Kanban y catálogo de paquetes con complementos y cortesías.'
  },
  {
    label: 'Semana 2',
    title: 'Ventas, contratos y entregables',
    detail: 'Registro de ventas con calendario de pagos, ciclo por edición (15 al 15), checklist de entregables por cliente y tablero por edición.'
  },
  {
    label: 'Semana 3',
    title: 'Stripe y cobranza',
    detail: 'Integración con Stripe: links de pago, cobros recurrentes, estatus y recordatorios de cobranza, pagos manuales e intercambios.'
  },
  {
    label: 'Semana 4',
    title: 'Dashboard, carga de datos y lanzamiento',
    detail: 'Dashboard y reportes, carga de la cartera actual de clientes y contratos, pruebas end-to-end, capacitación al equipo y salida a producción.'
  }
]

const deliverables = [
  { title: 'Plataforma CRM en producción', detail: 'contactos, cuentas segmentadas y pipeline comercial tipo Kanban' },
  { title: 'Catálogo de paquetes', detail: 'los cinco inventarios con niveles de paquete, complementos, cortesías e intercambios' },
  { title: 'Módulo de ventas y contratos', detail: 'pagos mensuales iguales, primer pago a la firma y ciclo por edición del 15 al 15' },
  { title: 'Seguimiento de entregables', detail: 'checklist por cliente y por edición con estatus, responsables y alertas de atraso' },
  { title: 'Cobros vía Stripe', detail: 'links de pago, cobros recurrentes, recordatorios y registro de pagos manuales' },
  { title: 'Dashboard y reportes', detail: 'pipeline, ingresos contratados, cobranza y entregables abiertos por edición' },
  { title: 'Carga de datos inicial', detail: 'cartera de clientes, paquetes y contratos activos capturados en la plataforma' },
  { title: 'Capacitación y documentación', detail: 'accesos, guía de uso y capacitación al equipo de Campestre Media' }
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
