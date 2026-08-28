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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">28 de agosto, 2026</p>
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
          <p class="text-gray-600">Testa Marketing Inc.</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Sitio web de Testa Marketing — El sitio en 5 niveles
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Desarrollo del nuevo sitio de Testa Marketing siguiendo fielmente la arquitectura definida
          por Ariosto: un sitio fácil de entender y construido para crecer mucho — Inicio, Soluciones,
          Técnicas, Sectores y Experiencia, Aprende, Nosotros y Contacto.
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
          Cronograma — 2 semanas
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
                Sitio completo en 5 niveles siguiendo la arquitectura definida por Testa Marketing<br />
                <span class="font-medium">Forma de pago flexible: 50% para iniciar y 50% a la entrega, o plan de pagos a convenir.</span>
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $450 <span class="text-sm sm:text-base font-normal text-sky-400">USD</span>
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
          <li>La estructura y el contenido del sitio siguen el documento de arquitectura ("El sitio en 5 niveles") definido por Testa Marketing.</li>
          <li>Los textos, imágenes, videos y casos de éxito serán proporcionados por Testa Marketing.</li>
          <li>Las secciones marcadas para 2027 (Asistente Testa IA, Herramientas, test de NSE, Observatorio Testa IA y la página personal de Ariosto Manrique) quedan previstas en la arquitectura y se cotizarán como fases futuras.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/testa-web' },
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
  title: 'Propuesta — Sitio web Testa Marketing | Fullstack Labs',
  description: 'Propuesta de Fullstack Labs para Testa Marketing: desarrollo del nuevo sitio web en 5 niveles — Soluciones, Técnicas, Sectores y Experiencia, Aprende, Nosotros y Contacto.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Propuesta — Sitio web Testa Marketing | Fullstack Labs',
  ogDescription: 'Desarrollo del nuevo sitio de Testa Marketing siguiendo la arquitectura en 5 niveles definida por el cliente: Soluciones, Técnicas, Sectores y Experiencia, Aprende, Nosotros y Contacto.',
  ogUrl: 'https://fullstacklabs.org/proposals/testa-web',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Propuesta — Sitio web Testa Marketing | Fullstack Labs',
  twitterDescription: 'Desarrollo del nuevo sitio de Testa Marketing siguiendo la arquitectura en 5 niveles definida por el cliente.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    highlight: true,
    title: 'Inicio — una sola página principal que conecta todo',
    items: [
      'Qué hace Testa',
      'Las 6 soluciones',
      'Técnicas principales',
      'Sectores destacados',
      'Experiencia y casos',
      'Acceso a Aprende',
      'Testa + IA',
      'Nosotros',
      '"Hablemos de tu proyecto"'
    ]
  },
  {
    title: 'Soluciones — página principal + 6 páginas internas',
    items: [
      'Market Intelligence, Customer Understanding, Brand Intelligence, Customer Experience, Product & Innovation, y Reputation & Public Opinion',
      'Cada solución con su propia página: qué significa, cómo se hace, beneficios, y video o información relevante relacionada',
      'Estructura preparada para agregar después páginas por problemas de búsqueda (p. ej. "Cómo conocer mejor a mis clientes", "Cómo medir satisfacción", "Cómo validar un producto") sin modificar el sitio'
    ]
  },
  {
    title: 'Técnicas — página principal + 11 páginas internas',
    items: [
      'Encuestas cara a cara · Encuestas telefónicas con IA · Paneles online · Entrevistas a profundidad · Grupos focales · Etnografía',
      'Mystery shopper · Análisis de gabinete · Análisis de datos y Big Data · Análisis de discursos y narrativas · Pruebas sensoriales',
      'A futuro pueden agregarse técnicas sin modificar la estructura'
    ]
  },
  {
    title: 'Sectores y Experiencia — página principal + 14 páginas de sector',
    items: [
      'Consumo, retail y alimentos · Salud y bienestar · Energía y combustibles · Turismo, hoteles y restaurantes · Inmobiliario y desarrollo urbano · Educación · Tecnología y servicios digitales',
      'Banca, seguros y fintech · Industria y soluciones B2B · Deporte, entretenimiento y apuestas · Gobierno, opinión pública y elecciones · Servicios ambientales y funerarios · Moda, calzado y diseño · Recursos humanos y clima laboral',
      'Dentro de cada sector aparecen los casos correspondientes, sin crear otra sección separada',
      'Cada caso puede tener su propia URL cuando valga la pena posicionarlo'
    ]
  },
  {
    title: 'Aprende — centro de contenido de Testa',
    items: [
      'Centro de Conocimiento: artículos, guías, preguntas frecuentes y glosario — cada contenido con página propia',
      'Testa Academy (YouTube embebido): cursos, talleres, webinars, capacitación y recursos educativos',
      'Arquitectura prevista para las secciones 2027: Asistente Testa IA, Herramientas (calculadora de muestra, margen de error, nivel de confianza), Niveles Socioeconómicos con test interactivo, y Observatorio Testa IA por sector'
    ]
  },
  {
    title: 'Nosotros',
    items: [
      'Quiénes somos, trayectoria y cómo trabajamos',
      'Equipo, cobertura y afiliaciones',
      'Testa + IA',
      'Ariosto Manrique (con liga a página personal en 2027) y perfiles de integrantes clave cuando sea conveniente',
      'Oficinas y ubicaciones'
    ]
  },
  {
    title: 'Contacto — "Hablemos de tu proyecto"',
    items: [
      'Página independiente y burbuja de contacto siempre presente',
      'Formulario: nombre, empresa o sector, teléfono celular, ciudad, correo y qué necesita',
      'Liga directa para agendar cita con el Director (Calendly)',
      'Teléfono, correo, WhatsApp y ubicaciones'
    ]
  }
]

const timeline = [
  {
    label: 'Semana 1',
    title: 'Arquitectura, diseño y secciones principales',
    detail: 'Diseño visual, página de Inicio, y las páginas principales de Soluciones, Técnicas y Sectores con sus páginas internas.'
  },
  {
    label: 'Semana 2',
    title: 'Aprende, Nosotros, Contacto y lanzamiento',
    detail: 'Centro de Conocimiento, Testa Academy, sección Nosotros, formulario de contacto con Calendly y WhatsApp, revisión con Testa y salida a producción.'
  }
]

const deliverables = [
  { title: 'Sitio en producción', detail: 'en español, adaptable a celular y optimizado para buscadores' },
  { title: 'Estructura completa en 5 niveles', detail: 'Inicio, Soluciones, Técnicas, Sectores y Experiencia, Aprende, Nosotros y Contacto' },
  { title: '6 páginas de soluciones', detail: 'cada una con explicación, cómo se hace, beneficios y material relacionado' },
  { title: '11 páginas de técnicas', detail: 'de encuestas cara a cara hasta pruebas sensoriales' },
  { title: '14 páginas de sector', detail: 'con los casos de cada sector integrados y URLs propias para casos destacados' },
  { title: 'Centro de Conocimiento y Testa Academy', detail: 'artículos, guías, FAQ, glosario y videos embebidos de YouTube' },
  { title: 'Contacto completo', detail: 'formulario, burbuja permanente, Calendly, WhatsApp y ubicaciones' },
  { title: 'Estructura lista para crecer', detail: 'nuevas técnicas, casos y las secciones 2027 se agregan sin rediseñar el sitio' }
]

const lineItems = [
  {
    name: 'Arquitectura del sitio y página de Inicio',
    detail: 'Diseño visual, navegación en 5 niveles y la página principal que conecta todas las secciones'
  },
  {
    name: 'Soluciones, Técnicas y Sectores',
    detail: '31 páginas internas: 6 soluciones, 11 técnicas y 14 sectores con sus casos'
  },
  {
    name: 'Aprende, Nosotros y Contacto',
    detail: 'Centro de Conocimiento, Testa Academy, sección institucional y contacto con formulario y Calendly'
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
