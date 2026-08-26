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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">19 de agosto, 2026</p>
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
          <p class="font-semibold text-gray-900">Ariosto Manrique</p>
          <p class="text-gray-600">Testa Marketing</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Plataforma de encuestas telefónicas con IA — Testa Marketing
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Una plataforma a la medida de Testa Marketing: campañas que llaman automáticamente a listas
          de números en México, un agente de voz con inteligencia artificial aplica la encuesta por
          teléfono, y cada respuesta queda capturada, visualizada en un dashboard y exportable a CSV —
          con cuentas separadas para cada cliente de Testa.
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
          Cronograma — 4 a 6 semanas
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
                Plataforma completa: campañas, agente de voz IA, resultados, dashboard, exportación y multi-cuenta<br />
                <span class="font-medium">En 5 pagos de $550 USD, ligados al avance del proyecto — ver plan de pagos.</span>
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $2,750 <span class="text-sm sm:text-base font-normal text-sky-400">USD</span>
            </p>
          </div>

          <!-- Plan de pagos -->
          <div class="mt-5 sm:mt-6 avoid-break">
            <p class="font-semibold text-gray-900 text-sm mb-3">Plan de pagos — 5 pagos por avance</p>
            <div class="space-y-2">
              <div
                v-for="(pago, i) in paymentPlan"
                :key="i"
                class="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-center gap-3 scope-card"
              >
                <span class="w-7 h-7 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{{ i + 1 }}</span>
                <div class="flex-1 min-w-0">
                  <p class="font-semibold text-gray-900 text-sm">{{ pago.title }}</p>
                  <p class="text-gray-400 text-xs mt-0.5 leading-relaxed">{{ pago.detail }}</p>
                </div>
                <p class="font-bold text-sky-700 text-sm sm:text-base whitespace-nowrap shrink-0">$550 <span class="font-normal text-sky-400 text-xs">USD</span></p>
              </div>
            </div>
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
          <li>Los costos de consumo de Twilio (llamadas por minuto y números telefónicos) y de los servicios de inteligencia artificial (API) son pagos directos del cliente y no están incluidos en esta propuesta.</li>
          <li>Las listas de números a contactar serán proporcionadas por Testa Marketing o sus clientes; su uso debe apegarse a la normativa aplicable de contacto telefónico y protección de datos personales.</li>
          <li>Los costos de dominio y hosting son pagos directos del cliente y no están incluidos en esta propuesta.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/testa-encuestas' },
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
  title: 'Propuesta — Plataforma de encuestas telefónicas con IA | Fullstack Labs',
  description: 'Propuesta de Fullstack Labs para Testa Marketing: plataforma multi-cuenta de encuestas telefónicas con agentes de voz IA — campañas desde CSV, captura de resultados, dashboard y exportación.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Propuesta — Plataforma de encuestas telefónicas con IA | Fullstack Labs',
  ogDescription: 'Plataforma a la medida para Testa Marketing: campañas telefónicas con agentes de voz IA, resultados por pregunta, dashboard, exportación a CSV y cuentas por cliente.',
  ogUrl: 'https://fullstacklabs.org/proposals/testa-encuestas',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Propuesta — Plataforma de encuestas telefónicas con IA | Fullstack Labs',
  twitterDescription: 'Campañas telefónicas con agentes de voz IA, resultados por pregunta, dashboard, exportación a CSV y cuentas por cliente.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    title: 'Campañas de llamadas desde un CSV',
    items: [
      'Carga de listas de números telefónicos de México desde un archivo CSV',
      'Creación de campañas: nombre del estudio, cuestionario y lista de números a contactar',
      'Marcación automática vía Twilio con control de horarios de llamada',
      'Estatus por número: contestada, sin respuesta, buzón, número inválido o rechazada',
      'Reintentos automáticos para los números que no contestaron'
    ]
  },
  {
    title: 'Agente de voz con inteligencia artificial',
    items: [
      'Un agente de voz conduce la encuesta por teléfono en español natural',
      'Se presenta, explica el estudio y pide la disposición del encuestado antes de comenzar',
      'Aplica las preguntas del cuestionario en orden y entiende tanto respuestas de opción como respuestas abiertas',
      'Maneja aclaraciones y repeticiones ("¿me lo puede repetir?") sin perder el hilo de la encuesta',
      'Cada llamada queda transcrita para poder revisar exactamente qué se dijo'
    ]
  },
  {
    title: 'Captura y almacenamiento de resultados',
    items: [
      'Cada respuesta se guarda por pregunta, por llamada y por campaña — nada se pierde',
      'Tabla de resultados completa por campaña: cada fila una llamada, cada columna una pregunta',
      'Transcripción de la conversación asociada a cada llamada',
      'Historial completo de campañas y resultados por cuenta'
    ]
  },
  {
    title: 'Dashboard de resultados',
    items: [
      'Visualización por campaña: gráficas de distribución de respuestas por pregunta',
      'Métricas de la campaña: llamadas realizadas, contestadas, encuestas completadas y tasa de respuesta',
      'Interpretación de resultados: resúmenes y lectura de los hallazgos principales de cada estudio',
      'Vista por cuenta y por campaña, para presentar resultados a cada cliente'
    ]
  },
  {
    title: 'Exportación de resultados',
    items: [
      'Exportación a CSV de todos los resultados por campaña o por cuenta',
      'Archivos listos para abrirse en Excel o cargarse en herramientas de análisis',
      'Incluye respuestas por pregunta, estatus de cada llamada y datos de la campaña'
    ]
  },
  {
    highlight: true,
    title: 'Plataforma multi-cuenta para los clientes de Testa',
    items: [
      'Plataforma personalizada y exclusiva para Testa Marketing',
      'Cuentas separadas para cada cliente de Testa — cada una con sus campañas, resultados y usuarios',
      'Agregar una cuenta nueva es fácil y no requiere desarrollo adicional',
      'Panel de administración para Testa: gestión de cuentas, usuarios y acceso a todo',
      'Los datos de cada cliente permanecen aislados de los demás',
      'Posibilidad de white label: la plataforma puede operar con otra marca, por si una empresa quiere rentar a Testa el servicio completo del sistema'
    ]
  }
]

const timeline = [
  {
    label: 'Semanas 1-2',
    title: 'Base de la plataforma y motor de campañas',
    detail: 'Estructura multi-cuenta, carga de CSV, cuestionarios, y marcación automática vía Twilio con estatus por llamada y reintentos.'
  },
  {
    label: 'Semanas 3-4',
    title: 'Agente de voz con IA y captura de resultados',
    detail: 'El agente conduce la encuesta por teléfono en español natural; cada respuesta se guarda por pregunta, con transcripción por llamada. Pruebas con llamadas reales.'
  },
  {
    label: 'Semanas 5-6',
    title: 'Dashboard, exportación y lanzamiento',
    detail: 'Gráficas y métricas por campaña, interpretación de resultados, exportación a CSV, panel de administración, cuentas de los primeros clientes y salida a producción.'
  }
]

const deliverables = [
  { title: 'Plataforma en producción', detail: 'sistema a la medida de Testa Marketing, accesible desde el navegador' },
  { title: 'Motor de campañas telefónicas', detail: 'carga de CSV, marcación automática vía Twilio, estatus por número y reintentos' },
  { title: 'Agente de voz con IA', detail: 'aplica la encuesta por teléfono en español natural y captura cada respuesta' },
  { title: 'Base de resultados completa', detail: 'cada respuesta almacenada por pregunta, llamada y campaña, con transcripciones' },
  { title: 'Dashboard de resultados', detail: 'gráficas por pregunta, métricas de campaña e interpretación de hallazgos' },
  { title: 'Exportación a CSV', detail: 'todos los resultados descargables por campaña o por cuenta' },
  { title: 'Multi-cuenta', detail: 'cuentas por cliente de Testa, con altas fáciles y datos aislados' },
  { title: 'Documentación y accesos', detail: 'credenciales, guía de uso y panel administrativo' }
]

const lineItems = [
  {
    name: 'Motor de campañas telefónicas',
    detail: 'Carga de CSV, cuestionarios, marcación automática vía Twilio, estatus por llamada y reintentos'
  },
  {
    name: 'Agente de voz con IA',
    detail: 'Encuesta conducida por teléfono en español natural, con captura de respuestas y transcripción de cada llamada'
  },
  {
    name: 'Resultados: captura, dashboard y exportación',
    detail: 'Base de resultados por pregunta, gráficas y métricas por campaña, interpretación y exportación a CSV'
  },
  {
    name: 'Multi-cuenta y panel de administración',
    detail: 'Cuentas por cliente de Testa con datos aislados, altas fáciles y administración central'
  }
]

const paymentPlan = [
  {
    title: 'Para iniciar el proyecto',
    detail: 'Al aprobar la propuesta — arranca el desarrollo de la plataforma'
  },
  {
    title: 'Motor de campañas listo',
    detail: 'Carga de CSV, cuestionarios y marcación automática vía Twilio funcionando (semanas 1-2)'
  },
  {
    title: 'Agente de voz con IA funcionando',
    detail: 'El agente aplica la encuesta por teléfono y captura respuestas, probado con llamadas reales (semanas 3-4)'
  },
  {
    title: 'Dashboard y exportación listos',
    detail: 'Gráficas y métricas por campaña, interpretación de resultados y exportación a CSV (semanas 5-6)'
  },
  {
    title: 'Entrega y salida a producción',
    detail: 'Plataforma en producción con las cuentas de los primeros clientes, documentación y accesos'
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
