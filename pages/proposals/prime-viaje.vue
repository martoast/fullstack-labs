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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">15 de julio, 2026</p>
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
          <p class="font-semibold text-gray-900">Prime Viaje</p>
          <p class="text-gray-600">Paseos en van · Valle de Guadalupe, B.C.</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Plataforma de reservas de vans con grupos, pagos divididos y planeador de ruta — Prime Viaje
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Una plataforma web donde los clientes reservan su van al Valle de Guadalupe, arman su grupo
          invitando a sus amigos, dividen la cuenta en partes iguales vía Stripe, y planean su ruta
          eligiendo las vinícolas que van a visitar — con un panel administrativo para que Prime Viaje
          controle ventas, reservas y usuarios.
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

      <!-- Timeline -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Cronograma — 3 a 4 semanas
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
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
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
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Inversión
        </h3>

        <div class="sm:ml-11">
          <!-- Conceptos incluidos -->
          <div class="space-y-3">
            <div
              v-for="(row, i) in lineItems"
              :key="i"
              class="border border-gray-200 rounded-lg p-4 flex items-start gap-3"
            >
              <span class="text-sky-500 mt-0.5 shrink-0">✓</span>
              <div>
                <p class="font-semibold text-gray-900 text-sm">{{ row.name }}</p>
                <p class="text-gray-400 text-xs mt-1 leading-relaxed">{{ row.detail }}</p>
              </div>
            </div>
          </div>

          <!-- Total -->
          <div class="mt-5 sm:mt-6 bg-sky-50 border border-sky-200 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            <div>
              <p class="font-semibold text-sky-900">Total del proyecto</p>
              <p class="text-xs text-sky-500 mt-1 leading-relaxed">
                Plataforma completa: reservas, grupos, pagos divididos, vinícolas y panel administrativo<br />
                <span class="font-medium">50% para iniciar ($15,000 MXN) · 50% a la entrega ($15,000 MXN)</span>
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $30,000 <span class="text-sm sm:text-base font-normal text-sky-400">MXN</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Payment -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Métodos de pago
        </h3>
        <div class="sm:ml-11 grid grid-cols-3 gap-3 sm:gap-4">
          <div class="border border-gray-200 rounded-lg p-3 sm:p-4 text-center">
            <div class="text-xl sm:text-2xl mb-1">💳</div>
            <p class="font-semibold text-gray-900 text-sm">Stripe</p>
            <p class="text-gray-400 text-xs mt-1">Tarjeta de crédito/débito</p>
          </div>
          <div class="border border-gray-200 rounded-lg p-3 sm:p-4 text-center">
            <div class="text-xl sm:text-2xl mb-1">🏦</div>
            <p class="font-semibold text-gray-900 text-sm">Transferencia</p>
            <p class="text-gray-400 text-xs mt-1">SPEI</p>
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
          <li>Las comisiones de Stripe por transacción (cobros a clientes finales y división de pagos) las define Stripe y no están incluidas en esta propuesta.</li>
          <li>Los costos de dominio y hosting son pagos directos del cliente y no están incluidos.</li>
          <li>La información de cada vinícola (fotos, actividades, horarios) se captura mediante el formulario de onboarding — la calidad del contenido depende de lo que cada vinícola proporcione.</li>
          <li>Cambios significativos fuera del alcance descrito pueden requerir un ajuste en costo y tiempo.</li>
          <li>El proyecto inicia una vez aprobada la propuesta y recibido el primer pago.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/prime-viaje' },
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
  title: 'Propuesta — Prime Viaje | Fullstack Labs',
  description: 'Propuesta de Fullstack Labs para Prime Viaje: plataforma de reservas de vans al Valle de Guadalupe con grupos, división de pagos vía Stripe, planeador de ruta con vinícolas y panel administrativo.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Propuesta — Prime Viaje | Fullstack Labs',
  ogDescription: 'Plataforma de reservas de vans al Valle de Guadalupe: grupos con invitaciones, división de pagos vía Stripe, planeador de ruta con vinícolas y panel administrativo.',
  ogUrl: 'https://fullstacklabs.org/proposals/prime-viaje',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Propuesta — Prime Viaje | Fullstack Labs',
  twitterDescription: 'Plataforma de reservas de vans al Valle de Guadalupe: grupos, división de pagos vía Stripe, planeador de ruta con vinícolas y panel administrativo.',
  twitterImage: 'https://fullstacklabs.org/logo.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    highlight: true,
    title: 'Reservas de van con grupos y pagos divididos',
    items: [
      'Registro e inicio de sesión de usuarios',
      'Catálogo de vans — el usuario ve las unidades disponibles y selecciona la de su paseo',
      'Creación de grupo de viaje: el organizador invita a sus amigos por correo o con un link para compartir',
      'Los invitados se unen al grupo y todos ven los detalles del paseo (van, fecha, ruta)',
      'Reservación de la van para el grupo',
      'División de la cuenta en partes iguales entre los miembros del grupo — cada quien paga su parte con tarjeta vía Stripe',
      'Estatus de pago visible para el grupo: quién ya pagó y quién falta'
    ]
  },
  {
    title: 'Vinícolas y planeador de ruta',
    items: [
      'Directorio de vinícolas dentro de la plataforma, con su información, fotos y actividades disponibles',
      'Planeador de ruta: el grupo elige las vinícolas de su paseo (número configurable, p. ej. 3 destinos)',
      'Cada vinícola muestra sus actividades, horarios e información para planear la visita',
      'La ruta seleccionada queda ligada a la reservación de la van'
    ]
  },
  {
    title: 'Onboarding de vinícolas',
    items: [
      'Formulario público de onboarding — se genera un link único para cada vinícola',
      'La vinícola llena y actualiza su propia información: descripción, fotos, actividades, horarios y datos de contacto',
      'La información capturada alimenta directamente el directorio y el planeador de ruta',
      'Sin necesidad de cuentas ni contraseñas para las vinícolas — solo su link'
    ]
  },
  {
    title: 'Panel administrativo',
    items: [
      'Dashboard con ventas, reservaciones y números clave del negocio',
      'Listado de usuarios registrados y grupos creados',
      'Detalle de cada reservación: van, grupo, ruta elegida y estatus de pagos de cada miembro',
      'Gestión del catálogo de vans y de las vinícolas registradas'
    ]
  }
]

const timeline = [
  {
    label: 'Semana 1',
    title: 'Base de la plataforma',
    detail: 'Diseño, registro/inicio de sesión, catálogo de vans y flujo de reservación.'
  },
  {
    label: 'Semana 2',
    title: 'Grupos y pagos',
    detail: 'Creación de grupos, invitaciones por correo y link, y división de pagos en partes iguales vía Stripe.'
  },
  {
    label: 'Semana 3',
    title: 'Vinícolas y planeador',
    detail: 'Directorio de vinícolas, planeador de ruta y formulario público de onboarding para vinícolas.'
  },
  {
    label: 'Semana 3–4',
    title: 'Admin, pruebas y lanzamiento',
    detail: 'Panel administrativo, pruebas end-to-end con pagos reales y salida a producción.'
  }
]

const deliverables = [
  { title: 'Plataforma de reservas en producción', detail: 'registro de usuarios, catálogo de vans y flujo completo de reservación' },
  { title: 'Grupos de viaje con invitaciones', detail: 'invitación por correo electrónico y link para compartir' },
  { title: 'Pagos divididos vía Stripe', detail: 'la cuenta se divide en partes iguales y cada miembro paga su parte con tarjeta' },
  { title: 'Directorio de vinícolas y planeador de ruta', detail: 'el grupo elige sus destinos y ve actividades e información de cada vinícola' },
  { title: 'Formulario de onboarding para vinícolas', detail: 'link público único por vinícola para capturar y mantener su información al día' },
  { title: 'Panel administrativo', detail: 'ventas, reservaciones, usuarios y gestión de vans y vinícolas' },
  { title: 'Documentación y accesos', detail: 'credenciales, guía de uso del panel y del onboarding de vinícolas' }
]

const lineItems = [
  {
    name: 'Plataforma de reservas con grupos y pagos divididos',
    detail: 'Usuarios, vans, grupos con invitaciones, reservación y división de la cuenta vía Stripe'
  },
  {
    name: 'Vinícolas: directorio, planeador de ruta y onboarding',
    detail: 'Información y actividades de cada vinícola, selección de destinos del paseo y formulario público de actualización'
  },
  {
    name: 'Panel administrativo',
    detail: 'Ventas, reservaciones, usuarios y gestión del catálogo'
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
