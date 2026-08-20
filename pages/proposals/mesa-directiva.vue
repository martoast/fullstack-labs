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
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">CONFIRMACIÓN DE TRABAJO</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">13 de julio, 2026</p>
            <span class="inline-flex items-center gap-1.5 mt-2 bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 rounded-full px-3 py-1 text-xs font-semibold">
              ✓ Pago recibido — trabajo confirmado
            </span>
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
          <p class="font-semibold text-gray-900">Mesa Directiva</p>
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Soporte para múltiples cuentas de Stripe + Mejoras de checkout y reportes — Mesa Directiva
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Este documento confirma el trabajo a realizar, con base en la reunión del 13 de julio: separación de finanzas en tres cuentas de Stripe (cafetería, rifa y eventos), pagos en parcialidades dependientes, mejoras al proceso de compra y reportes personalizados por nivel de usuario. El pago ya fue recibido y el trabajo está en curso.
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
              <p class="font-semibold text-gray-900 text-sm">Entrega estimada: jueves 17 de julio de 2026</p>
              <p class="text-gray-400 text-xs mt-1 leading-relaxed">El trabajo ya está en curso y se realiza durante esta semana. Se mantendrá comunicación durante todo el proceso y se avisará antes de aplicar cualquier cambio en producción. Al finalizar se agenda una reunión para mostrar los cambios y resolver dudas.</p>
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
          <div class="mt-5 sm:mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            <div>
              <p class="font-semibold text-emerald-900 flex items-center gap-2">
                Total del proyecto
                <span class="inline-flex items-center bg-emerald-600 text-white rounded-full px-2.5 py-0.5 text-xs font-semibold">✓ PAGADO</span>
              </p>
              <p class="text-xs text-emerald-600 mt-1 leading-relaxed">
                Multi-Stripe (3 cuentas) + Pagos dependientes + Mejoras de checkout + Reportes por nivel
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-emerald-700 whitespace-nowrap">
              $350.00 <span class="text-sm sm:text-base font-normal text-emerald-500">USD</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Payment status -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Estado del pago
        </h3>
        <div class="sm:ml-11">
          <div class="border border-emerald-200 bg-emerald-50 rounded-lg p-4 flex items-start gap-3">
            <div class="text-xl sm:text-2xl shrink-0">✅</div>
            <div>
              <p class="font-semibold text-emerald-900 text-sm">Pago recibido en su totalidad</p>
              <p class="text-emerald-600 text-xs mt-1 leading-relaxed">No hay pagos pendientes. Este documento sirve como confirmación del alcance de trabajo acordado.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Notes -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>El pago del proyecto ya fue recibido; el trabajo está confirmado y en curso.</li>
          <li>Para arrancar los reportes, el equipo de Mesa Directiva enviará por correo: (1) las columnas exactas del reporte resumido y (2) la definición de los dos niveles de acceso (quién ve el reporte completo y quién el resumido).</li>
          <li>La creación y verificación de las cuentas adicionales de Stripe corre por cuenta del cliente — Fullstack Labs se encarga de toda la integración técnica.</li>
          <li>El tipo de cambio en los pagos lo determina Stripe automáticamente al momento de la transacción; no interviene configuración manual.</li>
          <li>Las comisiones de Stripe por transacción son ajenas a esta propuesta y se rigen por las tarifas de Stripe.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/mesa-directiva' },
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
  title: 'Confirmación de trabajo — Mesa Directiva | Fullstack Labs',
  description: 'Confirmación de trabajo de Fullstack Labs para Mesa Directiva: tres cuentas de Stripe con finanzas separadas, pagos en parcialidades dependientes, mejoras al checkout y reportes personalizados por nivel de usuario.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Confirmación de trabajo — Mesa Directiva | Fullstack Labs',
  ogDescription: 'Tres cuentas de Stripe con finanzas separadas, pagos en parcialidades dependientes, mejoras al checkout y reportes personalizados por nivel de usuario.',
  ogUrl: 'https://fullstacklabs.org/proposals/mesa-directiva',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Confirmación de trabajo — Mesa Directiva | Fullstack Labs',
  twitterDescription: 'Tres cuentas de Stripe con finanzas separadas, pagos en parcialidades dependientes, mejoras al checkout y reportes personalizados por nivel de usuario.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    highlight: true,
    title: 'Soporte para múltiples cuentas de Stripe — 3 cuentas separadas',
    items: [
      'Cambio de arquitectura para que la plataforma soporte tres cuentas de Stripe en lugar de una sola',
      'Cuenta 1 — Cafetería / flujo diario: prepago de comida, promocionales y productos de venta general (cuenta actual)',
      'Cuenta 2 — Rifa: los ingresos de rifas quedan aislados en su propia cuenta, sin mezclarse con nada más',
      'Cuenta 3 — Eventos: primera comunión, graduaciones, paseos y demás eventos cobran en la cuenta nueva',
      'Al crear cada producto o evento se selecciona a qué cuenta se dirige el dinero',
      'El checkout procesa automáticamente el pago en la cuenta de Stripe correspondiente al producto',
      'Migración de los eventos actuales del año a la cuenta de eventos',
      'Configuración y pruebas de webhooks, llaves y eventos de Stripe para las tres cuentas antes de liberar a producción'
    ]
  },
  {
    title: 'Pagos en parcialidades dependientes (tiers)',
    items: [
      'Posibilidad de dividir un mismo evento en dos o tres pagos (tiers)',
      'Los pagos se habilitan en orden: el pago 2 solo está disponible si el pago 1 ya se completó, y el 3 requiere el 1 y el 2'
    ]
  },
  {
    title: 'Mejoras al proceso de compra (checkout)',
    items: [
      'Campos "Nombre del alumno" y "Clave del alumno" en la sección de pago, con opción de prenderlos o apagarlos por producto — así los compradores externos (que no son alumnos) no ven campos que no aplican',
      'Eliminar la etiqueta "(opcional)" de los campos que en realidad son obligatorios (salón, generación, etc.), para que el comprador sepa que debe llenarlos'
    ]
  },
  {
    title: 'Reportes personalizados con dos niveles de acceso',
    items: [
      'Reporte resumido para coordinadoras de sección — únicamente las columnas que el equipo defina, listo para usarse sin depurar',
      'Reporte completo para administradores — toda la información (hora, número de orden, transacción) para rastreo ante cualquier situación',
      'El reporte que ve cada usuario depende de su nivel de acceso en la plataforma'
    ]
  },
  {
    title: 'Zona horaria fija',
    items: [
      'La creación de eventos queda fija en la zona horaria de Tijuana — se elimina el selector de zona horaria para evitar errores'
    ]
  }
]

const deliverables = [
  { title: 'Plataforma con soporte para 3 cuentas de Stripe', detail: 'cafetería, rifa y eventos operando en paralelo, cada una con sus cobros, depósitos y reportes independientes' },
  { title: 'Selección de cuenta por producto', detail: 'al crear un producto o evento se elige a qué cuenta va el dinero; el checkout cobra en la cuenta correcta automáticamente' },
  { title: 'Pagos en parcialidades dependientes', detail: 'eventos divisibles en 2–3 pagos que se habilitan en orden conforme se completan' },
  { title: 'Checkout mejorado', detail: 'campos de alumno configurables por producto y etiquetas corregidas en campos obligatorios' },
  { title: 'Reportes por nivel de usuario', detail: 'versión resumida para coordinadoras y versión completa para administradores' },
  { title: 'Zona horaria fija de Tijuana', detail: 'sin selector, sin riesgo de eventos con horario equivocado' },
  { title: 'Pruebas de extremo a extremo', detail: 'flujo de compra validado en las tres cuentas antes de la entrega' }
]

const lineItems = [
  {
    name: 'Cambio de sistema — soporte para múltiples cuentas de Stripe',
    detail: 'Arquitectura multi-Stripe con tres cuentas (cafetería, rifa y eventos): cada producto cobra en su propia cuenta, con finanzas completamente separadas, incluyendo migración de los eventos actuales'
  },
  {
    name: 'Pagos dependientes y mejoras de checkout',
    detail: 'Parcialidades en orden (2–3 pagos por evento), campos de alumno configurables por producto y corrección de etiquetas en campos obligatorios'
  },
  {
    name: 'Reportes personalizados y zona horaria',
    detail: 'Dos niveles de reporte según el usuario (resumido / completo) y zona horaria fija de Tijuana en la creación de eventos'
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
