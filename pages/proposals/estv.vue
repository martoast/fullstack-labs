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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">7 de julio, 2026</p>
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
          Sistema Integral de Control Escolar — ESTV
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Plataforma web completa para la gestión académica y administrativa de la Escuela de Servicios Turísticos de Veracruz: desde la preinscripción de aspirantes por CURP hasta el seguimiento de egresados — incluyendo portales para alumnos, docentes y administrativos, control escolar, finanzas, reportes y página web pública.
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

      <!-- Timeline -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Tiempo de entrega
        </h3>
        <div class="sm:ml-11">
          <div class="border border-gray-200 rounded-lg p-4 flex items-start gap-3">
            <div class="text-xl sm:text-2xl shrink-0">📅</div>
            <div>
              <p class="font-semibold text-gray-900 text-sm">Desarrollo estimado: aproximadamente 2 semanas</p>
              <p class="text-gray-400 text-xs mt-1 leading-relaxed">El trabajo inicia una vez recibido el anticipo. El módulo de preinscripción de aspirantes se entrega primero para pruebas, de modo que esté operando antes de la apertura de la convocatoria. Se mantendrá comunicación constante durante todo el desarrollo.</p>
            </div>
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
                Sistema integral de control escolar + página web pública<br />
                <span class="font-medium">Esquema de pago: 50% anticipo para iniciar · 50% contra entrega.</span>
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $5,000.00 <span class="text-sm sm:text-base font-normal text-sky-400">USD</span>
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
          <li>El proyecto inicia una vez aprobada la propuesta y recibido el anticipo del 50%.</li>
          <li>Los pagos en línea (inscripciones, constancias, etc.) se procesan a través de un tercero (Stripe, OpenPay o similar) — las comisiones por transacción son ajenas a esta propuesta y se rigen por las tarifas del proveedor.</li>
          <li>La facturación CFDI, en caso de requerirse, se realiza mediante un proveedor externo de timbrado y su costo corre por cuenta de la institución.</li>
          <li>Las cuentas de Google Workspace (correo institucional, Meet, Classroom) son opcionales y se pagan directamente a Google por cuenta — no están incluidas en esta propuesta.</li>
          <li>El costo del dominio y del servidor/hosting posterior al primer año corre por cuenta de la institución.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/estv' },
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
  title: 'Propuesta — ESTV | Fullstack Labs',
  description: 'Propuesta de Fullstack Labs para Bolt Media: sistema integral de control escolar para la ESTV — preinscripción por CURP, control escolar, portales para alumnos y docentes, finanzas, reportes y página web pública.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Propuesta — ESTV | Fullstack Labs',
  ogDescription: 'Sistema integral de control escolar: preinscripción por CURP, control escolar, portales para alumnos y docentes, finanzas, reportes y página web pública.',
  ogUrl: 'https://fullstacklabs.org/proposals/estv',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Propuesta — ESTV | Fullstack Labs',
  twitterDescription: 'Sistema integral de control escolar: preinscripción por CURP, control escolar, portales para alumnos y docentes, finanzas, reportes y página web pública.',
  twitterImage: 'https://fullstacklabs.org/logo.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    highlight: true,
    title: 'Preinscripción de aspirantes (prioridad — convocatoria)',
    items: [
      'Registro en línea a través de la CURP — el sistema obtiene automáticamente los datos del aspirante',
      'Cuestionario de ingreso y carga de documentos (PDF hasta 3 MB; fotografía JPG/PNG hasta 1 MB)',
      'Asignación automática de folio y acuse de registro descargable en PDF',
      'Panel de revisión documental: aprobar o rechazar cada documento con motivo — el aspirante recibe aviso por correo y solo re-sube los documentos rechazados',
      'Lista pública de resultados mostrando únicamente folios (protección de datos personales)',
      'Dashboard con contadores por estatus (borrador, en revisión, aprobado, rechazado) y reportes descargables en Excel y PDF'
    ]
  },
  {
    title: 'Configuración institucional y seguridad',
    items: [
      'Datos de la institución: nombre, logos, sellos y firmas para documentos oficiales, datos fiscales',
      'Periodos escolares (cuatrimestres), calendario académico y periodos vacacionales — alimentan la emisión automática de constancias',
      'Roles y permisos gestionados desde un panel gráfico: docente, caja, control escolar, finanzas y administrador',
      'Recuperación de contraseña, autenticación en dos pasos (opcional) y bitácora de acciones clave del sistema',
      'Respaldos automáticos y manuales de la base de datos, con módulo de restauración'
    ]
  },
  {
    title: 'Inscripción, matrícula y control escolar',
    items: [
      'Inscripción de aspirantes aprobados con generación automática de matrícula (nomenclatura configurable, ej. 2026-001)',
      'Expediente digital completo vinculado a la CURP — documentos consultables y descargables',
      'Altas, bajas y cambios desde ventanilla o por solicitud del alumno desde su portal',
      'Reinscripción por cuatrimestre respetando la seriación de materias, con asignación automática de materias, docente, aula y horario',
      'Historial académico (kardex), estatus escolar y estadísticas de alumnos activos, bajas y egresados — información lista para reportar a la SEP'
    ]
  },
  {
    title: 'Plan académico, grupos y horarios',
    items: [
      'Catálogo de carreras (preparado para agregar más carreras en el futuro), plan de estudios y mapa curricular',
      'Catálogo de materias con horas, créditos y área de formación',
      'Seriación: el sistema valida que no se pueda cursar una materia sin haber aprobado su prerrequisito',
      'Oferta académica por cuatrimestre, grupos con límite de alumnos configurable',
      'Horarios y aulas con detección automática de traslapes (misma aula/mismo horario)'
    ]
  },
  {
    title: 'Docentes y recursos humanos',
    items: [
      'Catálogo de docentes con altas, bajas, edición y carga masiva',
      'Expediente laboral digital: títulos, certificaciones y cursos en PDF, con reportes de cumplimiento de perfil',
      'Evaluación docente por parte de los alumnos — anónima para el docente, con resultados visibles para la administración'
    ]
  },
  {
    title: 'Portal docente — operación académica',
    items: [
      'Lista de asistencia en tiempo real desde computadora o celular, con registro de fecha y hora',
      'Captura de calificaciones por oportunidad (primera, segunda, tercera) — el sistema filtra automáticamente a los alumnos no aprobados',
      'Flujo de actas: guardar, firmar con llave digital del docente y cierre definitivo',
      'Reapertura de actas únicamente con autorización superior y justificante en PDF (trazabilidad para auditorías)',
      'Consulta de grupos, materias y listas de alumnos asignados, descargables en Excel y PDF'
    ]
  },
  {
    title: 'Portal del alumno',
    items: [
      'Acceso a avisos, boletas, kardex y calificaciones',
      'Solicitud en línea de constancias, credenciales y trámites — sin filas en ventanilla',
      'Emisión automática de constancias y certificados con firma, sello, folio y código QR de validación contra falsificaciones',
      'Documentos pagados descargables las veces que se necesiten desde el portal'
    ]
  },
  {
    title: 'Finanzas y caja',
    items: [
      'Cobro de trámites y servicios: inscripciones, constancias, credenciales, cursos (incluso en $0 para registro contable)',
      'Pagos en línea mediante pasarela de terceros y registro manual de pagos con referencia (tipo OXXO) — control escolar libera el trámite al validar el pago',
      'Control de adeudos por alumno con reportes por grupo',
      'Cortes de caja diarios y reportes financieros por rango de fechas (ingresos vs egresos)',
      'Becas y descuentos configurables por alumno (hasta el 100%)',
      'Cálculo de nómina docente por horas asignadas (opcional)'
    ]
  },
  {
    title: 'Egresados y reportes directivos',
    items: [
      'Seguimiento de egresados mediante cuestionario en línea vinculado al catálogo de prestadores de servicios turísticos por municipio',
      'Estadísticas de empleabilidad: dónde y en qué sector laboran los egresados',
      'Reportes académicos, administrativos y financieros para el grupo directivo, exportables en Excel y PDF'
    ]
  },
  {
    title: 'Página web pública e integraciones',
    items: [
      'Página web institucional: carreras, oferta académica, convocatorias y acceso a los portales de alumnos, docentes y administrativos',
      'Notificaciones por correo electrónico en todos los procesos clave',
      'Página pública de validación de documentos por código QR y folio',
      'Preparado para conectarse con Google Workspace (correo institucional, Meet, Classroom) y con proveedores externos de facturación'
    ]
  }
]

const deliverables = [
  { title: 'Sistema web funcional en producción', detail: 'todos los módulos instalados, probados y operando en el servidor' },
  { title: 'Módulo de preinscripción priorizado', detail: 'entregado primero para pruebas antes de la apertura de la convocatoria' },
  { title: 'Página web pública', detail: 'sitio institucional conectado a los portales del sistema' },
  { title: 'Base de datos relacional y código fuente', detail: 'propiedad de la institución, con manual técnico para futuros desarrollos' },
  { title: 'Capacitación por módulo', detail: 'cada usuario capacitado en el módulo que le corresponde (caja, control escolar, docentes, administración)' },
  { title: 'Configuración del servidor y puesta en producción', detail: 'instalación, pruebas funcionales, respaldos y liberación' }
]

const lineItems = [
  {
    name: 'Sistema integral de control escolar',
    detail: 'Preinscripción por CURP, inscripción y matrícula, control escolar, plan académico, grupos y horarios, portales de alumno y docente, docentes/RH, finanzas y caja, egresados y reportes'
  },
  {
    name: 'Página web pública institucional',
    detail: 'Diseño y desarrollo del sitio de la escuela, incluido sin costo adicional'
  },
  {
    name: 'Instalación, capacitación y puesta en producción',
    detail: 'Configuración del servidor, pruebas funcionales, capacitación por módulo y entrega de código fuente con manual técnico'
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
