<template>
  <div class="text-gray-800 font-sans">

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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">10 de octubre, 2026</p>
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
          <p class="text-gray-600">Campestre Media</p>
          <p class="text-gray-600">Proyecto: Reestructuración del CRM</p>
        </div>
      </div>

      <!-- Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Reestructuración del CRM — Campestre Media
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Lo acordado en la llamada del 10 de octubre. Campestre Media sigue cotizando fuera de la
          plataforma; el CRM deja de ser un cotizador y se convierte en el lugar donde una cotización
          aprobada se vuelve tareas, calendario y cobranza. Sustituye al alcance del 24 de septiembre.
        </p>
      </div>

      <!-- 1. El flujo -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          El flujo nuevo
        </h3>
        <div class="sm:ml-11">
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-2">
            <div v-for="(f, i) in flujo" :key="i" class="rounded-lg border border-sky-200 bg-sky-50 p-3 text-center avoid-break">
              <p class="text-sky-700 text-xs font-bold tracking-wider">{{ i + 1 }}</p>
              <p class="text-sky-900 text-sm font-semibold mt-1 leading-snug">{{ f.title }}</p>
              <p class="text-sky-700 text-xs mt-1 leading-relaxed">{{ f.detail }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Qué se hace -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Qué se hace
        </h3>
        <div class="sm:ml-11 space-y-2">
          <div v-for="(h, i) in hace" :key="i" class="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-start gap-3 avoid-break">
            <span class="text-lg shrink-0">{{ h.icon }}</span>
            <div class="min-w-0">
              <p class="font-semibold text-gray-900 text-sm">{{ h.name }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ h.detail }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Qué se retira -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Qué se retira
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed">
            Contratos y el cotizador, el catálogo de paquetes, la propuesta impresa, el cobro por Stripe,
            Ediciones, Invoices y Scope of Work, los calendarios de agendamiento, Automatización, el
            tablero de oportunidades, Programas, y en la ficha del contacto los paneles de Deals e
            Historial comercial. Los datos se conservan apagados, no se destruyen.
          </p>
        </div>
      </section>

      <!-- 4. Entrega -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Entrega
        </h3>
        <div class="sm:ml-11 space-y-2">
          <div class="rounded-lg bg-sky-50 border border-sky-200 p-4 avoid-break">
            <p class="text-sm font-semibold text-sky-900">Lunes 12 de octubre — el flujo completo operando</p>
            <p class="text-xs text-sky-700 mt-1 leading-relaxed">Cuenta limpia, menú en español, cotizaciones con versiones y aprobación, tareas con subtareas desde el calendario de entregables (capturado a mano en el asistente de revisión), compromisos de pago y tablero de cobranza, ranking por asesor.</p>
          </div>
          <div class="rounded-lg border border-gray-200 p-4 avoid-break">
            <p class="text-sm font-semibold text-gray-900">Semana siguiente</p>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">Lectura automática del calendario de entregables, tablero por cliente y mes con filtros, actividades de agosto convertidas en tareas.</p>
          </div>
        </div>
        <p class="sm:ml-11 text-xs text-gray-500 mt-3 leading-relaxed">
          El desglose completo —cada pieza, los acuerdos tomados en la llamada y qué pasa con los datos de la cuenta— está en el
          <a href="/proposals/campestre-crm-detalle" class="text-sky-700 underline">detalle técnico</a>.
        </p>
      </section>

      <!-- 5. Inversión -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Inversión
        </h3>
        <div class="sm:ml-11">
          <div class="rounded-lg border-2 border-sky-600 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 avoid-break">
            <div>
              <p class="font-semibold text-gray-900">Reestructuración del CRM</p>
              <p class="text-xs text-gray-500 mt-1 leading-relaxed">Todo lo descrito en las secciones 2, 3 y 4. Pago único.</p>
            </div>
            <p class="text-3xl sm:text-4xl font-bold text-sky-700 whitespace-nowrap">$500 <span class="text-base font-semibold text-gray-500">USD</span></p>
          </div>
        </div>
      </section>

      <!-- Notas -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>La cobranza es un registro interno: el sistema no emite facturas ni cobra a nadie. Los cobros automáticos por Stripe se apagan en el mismo cambio.</li>
          <li>La vista del cliente con sus evidencias y el reporte mensual quedó como fase posterior y se cotiza aparte cuando toque.</li>
          <li>Fuera de este alcance: integración de WhatsApp, generar la cotización desde el CRM, los sitios web del grupo y el soporte técnico mensual, que tienen su propio documento.</li>
          <li>Campestre Media entrega la lista de datos de prueba que se borran y el calendario de entregables de Core Medical.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/campestre-crm' },
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
  title: 'Alcance de trabajo — Reestructuración del CRM, Campestre Media | Fullstack Labs',
  description: 'El CRM deja de ser un cotizador: cotización aprobada → tareas → calendario → cobranza. $500 USD.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Alcance de trabajo — Reestructuración del CRM, Campestre Media | Fullstack Labs',
  ogDescription: 'El CRM deja de ser un cotizador: cotización aprobada → tareas → calendario → cobranza.',
  ogUrl: 'https://fullstacklabs.org/proposals/campestre-crm',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Alcance de trabajo — Reestructuración del CRM, Campestre Media | Fullstack Labs',
  twitterDescription: 'El CRM deja de ser un cotizador: cotización aprobada → tareas → calendario → cobranza.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const flujo = [
  { title: 'Prospecto', detail: 'El asesor lo da de alta y lleva su seguimiento en la ficha.' },
  { title: 'Cotización', detail: 'Se hace fuera y se sube en PDF a la ficha. Varias versiones, con fecha.' },
  { title: 'Aprobada', detail: '«Ésta fue la que aprobó el cliente». Ahí se vuelve cliente y nacen sus pagos.' },
  { title: 'Tareas', detail: 'Se sube el calendario de entregables y se crean las tareas mes a mes con subtareas.' },
  { title: 'Cobranza', detail: 'Administración marca cada pago mensual como cobrado.' }
]

const hace = [
  { icon: '📎', name: 'Cotizaciones en la ficha del cliente', detail: '«Sube tu cotización aquí», versiones con fecha, botón de aprobada (asesor o administrador), las demás quedan bloqueadas. Al aprobar: cliente, compromisos de pago y el sistema pide el calendario de entregables.' },
  { icon: '📄', name: 'Lectura del calendario de entregables', detail: 'Del «Desglose por mes» salen las tareas y subtareas; una pantalla de revisión las confirma antes de crearse. Aviso a Mych cuando quedan creadas.' },
  { icon: '✅', name: 'Tareas con subtareas', detail: 'Entregable grande con sus entregables individuales, cada uno con responsable; detalle editable (fecha, hora, lugar, responsable); «mes asignado, día por confirmar»; confirmación al completar, con deshacer. Sin departamento.' },
  { icon: '🗂️', name: 'Tablero por cliente y mes, unificado con el calendario', detail: 'Tareas y calendario son una sola cosa. Filtros por mes, persona, cliente, pendientes de fecha o de asignar. Cada quien ve las suyas, jefes las de su departamento, administradores todo.' },
  { icon: '💰', name: 'Compromisos de pago y cobranza', detail: 'Pagos mensuales sin IVA, marcados cobrados o pendientes; vendido contra cobrado; por cliente. Sólo Ricardo y Alexandra.' },
  { icon: '🏆', name: 'Ranking de ventas por asesor', detail: 'Cuánto colocó cada quien este mes, con qué clientes, desde las cotizaciones aprobadas.' },
  { icon: '🧹', name: 'Limpieza, español y menú', detail: 'Datos de prueba fuera, menú y pantallas en el vocabulario del equipo: Prospectos, Clientes, Tareas, Calendario, Cobranza.' }
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
  @page { margin: 12mm; }
  .avoid-break, h2, h3, h4 { break-inside: avoid; page-break-inside: avoid; }
  h2, h3, h4 { break-after: avoid; page-break-after: avoid; }
}
</style>
