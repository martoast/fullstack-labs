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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">23 de julio, 2026</p>
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
          <p class="font-semibold text-gray-900">A quien corresponda</p>
          <p class="text-gray-600">Consejo de Desarrollo de Tijuana (CDT)</p>
          <p class="text-gray-600">Tijuana, B.C.</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Plataforma digital metropolitana — Tijuana 2040
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Una plataforma útil, abierta y actualizable que convierta al CDT en la puerta digital para
          conocer el futuro de la ciudad: el Plan Estratégico Metropolitano, datos confiables, mapa
          interactivo, participación ciudadana, portafolio de proyectos e inteligencia artificial —
          todo en una sola experiencia organizada por las necesidades de quien entra, no por la
          estructura interna del Consejo.
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
          Cronograma — 6 semanas
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
                Plataforma completa: portal, PEM 2040, mapa, foro, observatorio, portafolio, agenda e IA<br />
                <span class="font-medium">50% para iniciar ($1,250 USD) · 50% a la entrega ($1,250 USD)</span>
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $2,500 <span class="text-sm sm:text-base font-normal text-sky-400">USD</span>
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
          <li>Los costos de dominio, hosting y consumo de los servicios de inteligencia artificial (API) son pagos directos del cliente y no están incluidos en esta propuesta.</li>
          <li>Las integraciones con CEMDI y la Universidad Virtual (Tijuana Ventures) dependen de que el CDT proporcione los accesos, APIs o procesos de datos correspondientes.</li>
          <li>Los contenidos institucionales (documentos del PEM, indicadores, información de proyectos, textos e imágenes) serán proporcionados por el equipo del CDT.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/cdt' },
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
  title: 'Propuesta — CDT Tijuana 2040 | Fullstack Labs',
  description: 'Propuesta de Fullstack Labs para el Consejo de Desarrollo de Tijuana: plataforma digital metropolitana con el Plan Estratégico Tijuana 2040, mapa interactivo, participación ciudadana, observatorio de datos, portafolio de proyectos e inteligencia artificial.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Propuesta — CDT Tijuana 2040 | Fullstack Labs',
  ogDescription: 'Plataforma digital metropolitana del CDT: Plan Estratégico Tijuana 2040, mapa interactivo, foro ciudadano, observatorio de datos, portafolio de proyectos e inteligencia artificial.',
  ogUrl: 'https://fullstacklabs.org/proposals/cdt',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Propuesta — CDT Tijuana 2040 | Fullstack Labs',
  twitterDescription: 'Plataforma digital metropolitana del CDT: Plan Estratégico Tijuana 2040, mapa interactivo, foro ciudadano, observatorio de datos, portafolio de proyectos e inteligencia artificial.',
  twitterImage: 'https://fullstacklabs.org/logo.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    title: 'Portal principal organizado por necesidades',
    items: [
      'Arquitectura de información y diseño visual de toda la plataforma',
      'Página inicial con rutas por intención: conocer el futuro de Tijuana, consultar datos, participar, invertir, emprender, colaborar y capacitarse',
      'Cada ruta termina en una acción concreta: consultar, descargar, registrarse, comentar, contactar o inscribirse',
      'Navegación bilingüe (español e inglés), diseño adaptable a celular, accesible y optimizado para buscadores'
    ]
  },
  {
    title: 'Tijuana 2040 — Plan Estratégico Metropolitano',
    items: [
      'Micrositio que explica de forma sencilla la visión de futuro, escenarios y prioridades',
      'Línea de tiempo, documentos resumidos y avances del plan',
      'Sección de participación por tema o zona de la ciudad'
    ]
  },
  {
    title: 'Mapa interactivo metropolitano y binacional',
    items: [
      'Mapa por capas: proyectos, infraestructura, movilidad, zonas industriales, universidades, centros de innovación y oportunidades',
      'Filtros por eje del CDT, colonia, delegación, municipio, etapa y tipo de proyecto',
      'Fichas georreferenciadas por ubicación'
    ]
  },
  {
    title: 'Participación ciudadana y comunidad',
    items: [
      'Foro moderado para comentar propuestas, responder consultas y priorizar retos — enfocado en los proyectos del PEM 2040',
      'Cada consulta muestra objetivo, contexto, fecha de cierre, resultados y respuesta institucional',
      'Agenda única de foros, mesas técnicas, consultas y talleres, con suscripción por temas y recordatorios',
      'Registro segmentado de ciudadanos, empresarios, academia, aliados e inversionistas (CRM de contactos)'
    ]
  },
  {
    title: 'Observatorio CEMDI y portafolio de proyectos',
    items: [
      'Tablero conectado con CEMDI: indicadores económicos, competitividad, empleo, inversión y emprendimiento',
      'Series históricas, comparativos, fichas descargables y explicaciones en lenguaje sencillo, con fuentes y fecha de actualización visibles',
      'Ficha pública por proyecto: problema, solución, impacto, responsables, aliados, etapa, avances y formas de colaborar',
      'Historias de impacto: casos breves y verificables de alianzas y proyectos que mejoraron la ciudad'
    ]
  },
  {
    title: 'Inversión, emprendimiento y Universidad Virtual',
    items: [
      'Portal de inversión: vocaciones productivas, ventajas de localización, datos binacionales y formulario de vinculación',
      'Ecosistema emprendedor: directorio de incubadoras, aceleradoras, fondos, mentorías, eventos y convocatorias',
      'Integración con la Universidad Virtual CDT (Tijuana Ventures): catálogo, enlaces de inscripción y cursos recomendados según el perfil del usuario'
    ]
  },
  {
    highlight: true,
    title: 'Inteligencia artificial aplicada',
    items: [
      'Asistente Tijuana: responde preguntas usando únicamente fuentes autorizadas del CDT, CEMDI, PEM y documentos aliados',
      'Explorador de proyectos: recomienda proyectos según la colonia, interés, profesión o sector del usuario',
      'Traductor de datos: explica indicadores y gráficas en lenguaje sencillo y señala tendencias',
      'Generador de rutas: orienta a emprendedores, inversionistas y ciudadanos sobre pasos, recursos y contactos',
      'Análisis ciudadano: clasifica comentarios del foro, detecta temas recurrentes y genera resúmenes para las mesas técnicas',
      'Tijuana para niñas y niños: experiencia educativa para plantear problemas de su colonia y recibir acciones posibles a su nivel'
    ]
  },
  {
    title: 'Panel de administración y transparencia',
    items: [
      'Panel sencillo para que el equipo del CDT actualice contenidos sin depender del desarrollador',
      'Roles y permisos por eje, proyecto y tipo de contenido',
      'Historial de cambios y moderación del foro con reglas de participación y protección de datos personales',
      'Indicadores públicos de uso e impacto: consultas, participantes, alianzas, proyectos y avances',
      'Analítica web: navegación, conversiones, intereses y consultas'
    ]
  }
]

const timeline = [
  {
    label: 'Semana 1',
    title: 'Arquitectura, diseño y base del portal',
    detail: 'Arquitectura de información, diseño visual, página inicial con rutas por necesidad y estructura bilingüe.'
  },
  {
    label: 'Semana 2',
    title: 'Tijuana 2040 y portafolio de proyectos',
    detail: 'Micrositio del PEM con línea de tiempo y avances, fichas públicas de proyectos e historias de impacto.'
  },
  {
    label: 'Semana 3',
    title: 'Mapa interactivo y observatorio',
    detail: 'Mapa por capas con filtros, tablero de indicadores conectado con CEMDI y fichas descargables.'
  },
  {
    label: 'Semana 4',
    title: 'Participación, agenda y CRM',
    detail: 'Foro ciudadano moderado, consultas con resultados públicos, agenda de eventos, registro de usuarios y base de contactos segmentada.'
  },
  {
    label: 'Semana 5',
    title: 'Inteligencia artificial y Universidad Virtual',
    detail: 'Asistente Tijuana con fuentes controladas, recomendadores, traductor de datos, análisis ciudadano, experiencia infantil e integración con Tijuana Ventures.'
  },
  {
    label: 'Semana 6',
    title: 'Admin, pruebas y lanzamiento',
    detail: 'Panel de administración con roles, capacitación al equipo del CDT, pruebas end-to-end, accesibilidad y salida a producción.'
  }
]

const deliverables = [
  { title: 'Plataforma en producción', detail: 'portal bilingüe organizado por necesidades del usuario, adaptable a celular y optimizado para buscadores' },
  { title: 'Micrositio Tijuana 2040', detail: 'visión, escenarios, línea de tiempo, documentos y participación por tema o zona' },
  { title: 'Mapa interactivo', detail: 'capas metropolitanas y binacionales con filtros por eje, zona, etapa y tipo de proyecto' },
  { title: 'Foro ciudadano y agenda', detail: 'consultas moderadas con resultados públicos, calendario único y suscripciones por tema' },
  { title: 'Observatorio CEMDI', detail: 'indicadores con series históricas, comparativos, fichas descargables y fuentes visibles' },
  { title: 'Portafolio de proyectos', detail: 'ficha pública por proyecto con avances, aliados y formas de colaborar' },
  { title: 'Portal de inversión y ecosistema emprendedor', detail: 'oportunidades por sector, directorio de apoyos y vinculación con la Universidad Virtual' },
  { title: 'Suite de inteligencia artificial', detail: 'Asistente Tijuana, explorador de proyectos, traductor de datos, generador de rutas, análisis ciudadano y experiencia infantil' },
  { title: 'Panel de administración', detail: 'gestión de contenidos con roles y permisos, moderación, analítica e indicadores de impacto' },
  { title: 'Capacitación y documentación', detail: 'manuales de administración, capacitación al equipo del CDT, credenciales y propiedad del código y los datos' }
]

const lineItems = [
  {
    name: 'Portal principal y micrositio Tijuana 2040',
    detail: 'Arquitectura, diseño, rutas por necesidad, PEM 2040, portafolio de proyectos e historias de impacto'
  },
  {
    name: 'Mapa interactivo y observatorio CEMDI',
    detail: 'Capas georreferenciadas con filtros, tablero de indicadores, series históricas y fichas descargables'
  },
  {
    name: 'Participación ciudadana, agenda y CRM',
    detail: 'Foro moderado, consultas públicas, calendario de actividades y registro segmentado de contactos'
  },
  {
    name: 'Inversión, emprendimiento y Universidad Virtual',
    detail: 'Portal de inversión, ecosistema emprendedor e integración con Tijuana Ventures'
  },
  {
    name: 'Inteligencia artificial aplicada',
    detail: 'Asistente con fuentes controladas, recomendadores, traductor de datos, análisis ciudadano y experiencia infantil'
  },
  {
    name: 'Panel de administración y capacitación',
    detail: 'Gestión de contenidos con roles, moderación, analítica, manuales y capacitación al equipo'
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
