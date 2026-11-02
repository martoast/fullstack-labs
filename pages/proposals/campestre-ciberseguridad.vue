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
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">CIBERSEGURIDAD</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">2 de noviembre, 2026</p>
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
        </div>
      </div>

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Cyber Security Starter Pack — Campestre Media
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Servicio mensual para que todos los sitios WordPress de Campestre Media estén bien y sin
          riesgos de hackeo, y para que su información esté segura y protegida con respaldos
          automáticos. Si a pesar de todo algo pasa, se limpia y se restaura como parte del servicio,
          no como una emergencia aparte.
        </p>
      </div>

      <!-- Scope -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          Qué incluye el servicio
        </h3>

        <div class="sm:ml-11 space-y-4">
          <div
            v-for="(card, i) in scopeCards"
            :key="i"
            :class="['rounded-lg p-4 sm:p-5 scope-card avoid-break', card.highlight ? 'bg-sky-50 border border-sky-200' : 'border border-gray-200']"
          >
            <div class="flex items-start gap-3">
              <span class="text-lg sm:text-xl shrink-0">{{ card.icon }}</span>
              <div class="min-w-0">
                <h4 :class="['font-semibold', card.highlight ? 'text-sky-900' : 'text-gray-900']">{{ card.title }}</h4>
                <ul class="mt-2 space-y-1.5">
                  <li v-for="(item, j) in card.items" :key="j" class="flex items-start text-sm text-gray-600">
                    <span :class="['mr-2 mt-0.5 shrink-0', card.highlight ? 'text-sky-500' : 'text-gray-300']">▸</span>
                    <span class="leading-relaxed">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Servicios cubiertos -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Sobre qué aplica
        </h3>
        <div class="sm:ml-11">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="(s, i) in servicios" :key="i" class="border border-gray-200 rounded-lg p-4">
              <p class="font-semibold text-gray-900 text-sm">{{ s.name }}</p>
              <p class="text-gray-400 text-xs mt-1 leading-relaxed">{{ s.detail }}</p>
            </div>
          </div>
          <p class="text-gray-500 text-xs mt-3 leading-relaxed">
            La cuota cubre todos los sitios WordPress del grupo, no uno suelto: si se publica un sitio
            nuevo en WordPress, entra al servicio sin costo adicional.
          </p>
        </div>
      </section>

      <!-- Tiempos -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Tiempos de atención
        </h3>
        <div class="sm:ml-11 space-y-3">
          <div v-for="(t, i) in tiempos" :key="i" :class="['rounded-lg p-4 flex items-start gap-3 avoid-break', t.urgente ? 'bg-sky-50 border border-sky-200' : 'border border-gray-200']">
            <span :class="['w-2.5 h-2.5 rounded-full mt-1.5 shrink-0', t.urgente ? 'bg-sky-600' : 'bg-gray-300']"></span>
            <div>
              <p :class="['font-semibold text-sm', t.urgente ? 'text-sky-900' : 'text-gray-900']">{{ t.title }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ t.detail }}</p>
            </div>
          </div>
          <p class="text-gray-500 text-xs leading-relaxed pt-1">
            Canal directo por WhatsApp con Alejandro Martos para reportar cualquier cosa sospechosa,
            sin ticket ni formulario.
          </p>
        </div>
      </section>

      <!-- Pricing -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Inversión
        </h3>

        <div class="sm:ml-11">
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            <div>
              <p class="font-semibold text-sky-900">Cyber Security Starter Pack</p>
              <p class="text-xs text-sky-500 mt-1 leading-relaxed">
                Cuota mensual fija. Se factura el día 2 de cada mes por Stripe, con 7 días para pagar,
                y se renueva mes a mes — sin plazo forzoso.
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $200 <span class="text-sm sm:text-base font-normal text-sky-400">USD / mes</span>
            </p>
          </div>

          <div class="mt-5 sm:mt-6 avoid-break">
            <h4 class="font-semibold text-gray-900 text-sm mb-2">Lo que NO cubre esta cuota</h4>
            <ul class="space-y-1.5">
              <li v-for="(x, i) in fuera" :key="i" class="flex items-start text-sm text-gray-600">
                <span class="text-gray-300 mr-2 mt-0.5 shrink-0">▸</span>
                <span class="leading-relaxed">{{ x }}</span>
              </li>
            </ul>
            <p class="text-gray-500 text-xs mt-3 leading-relaxed">
              Nada de esto se factura por sorpresa: si una solicitud cae fuera del alcance, se dice
              antes y se cotiza aparte.
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
          <li>La cuota es mensual y se renueva mes a mes. Cualquiera de las dos partes puede darla por terminada avisando con 30 días.</li>
          <li>Ningún servicio de seguridad puede prometer riesgo cero. Lo que este servicio sí garantiza es que los sitios se mantienen protegidos y al día, que cualquier problema se detecta pronto y que siempre hay un respaldo reciente del cual restaurar.</li>
          <li>Es complementario al soporte técnico e infraestructura: aquél mantiene el servidor y los servicios arriba; éste se enfoca en la seguridad de los sitios WordPress y en sus respaldos.</li>
          <li>Licencias de plugins o temas de pago, dominios y hosting de terceros se pagan directamente por Campestre Media y no están incluidos.</li>
          <li>El servicio arranca con el pago del primer mes; la primera factura se emitió el 2 de noviembre de 2026.</li>
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

const desc = 'Cyber Security Starter Pack para Campestre Media: todos sus sitios WordPress protegidos contra hackeos, al día y con respaldos automáticos. Cuota mensual fija.'

useHead({
  htmlAttrs: { lang: 'es' },
  bodyAttrs: { class: 'bg-primary' },
  link: [
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/campestre-ciberseguridad' },
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
  title: 'Cyber Security Starter Pack — Campestre Media | Fullstack Labs',
  description: desc,
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Cyber Security Starter Pack — Campestre Media | Fullstack Labs',
  ogDescription: 'Sus sitios WordPress sin riesgos de hackeo y su información respaldada automáticamente. Cuota mensual fija.',
  ogUrl: 'https://fullstacklabs.org/proposals/campestre-ciberseguridad',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Cyber Security Starter Pack — Campestre Media | Fullstack Labs',
  twitterDescription: 'Sus sitios WordPress sin riesgos de hackeo y su información respaldada automáticamente.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    icon: '🛡️',
    highlight: true,
    title: 'Protección contra hackeos',
    items: [
      'Firewall de aplicación que bloquea ataques conocidos antes de que lleguen al sitio',
      'Bloqueo de intentos repetidos de acceso al panel de WordPress (fuerza bruta)',
      'Verificación en dos pasos para las cuentas de administrador',
      'Limpieza de usuarios, plugins y temas abandonados — cada cosa que sobra es una puerta abierta',
      'Permisos de archivos y configuración de WordPress endurecidos'
    ]
  },
  {
    icon: '🔄',
    title: 'Todo al día',
    items: [
      'WordPress, plugins y temas actualizados, revisando que el sitio siga funcionando después de cada actualización',
      'Atención prioritaria cuando se publica una vulnerabilidad en algo que usan los sitios',
      'Sustitución de plugins sin mantenimiento por alternativas seguras',
      'Certificados de seguridad (el candado del navegador) vigentes en todos los sitios'
    ]
  },
  {
    icon: '👁️',
    title: 'Monitoreo',
    items: [
      'Escaneo periódico en busca de malware y código inyectado',
      'Aviso si un archivo del sitio cambia sin que nadie lo haya pedido',
      'Aviso si un sitio deja de responder',
      'Revisión de que Google no marque los sitios como peligrosos'
    ]
  },
  {
    icon: '💾',
    highlight: true,
    title: 'Respaldos automáticos',
    items: [
      'Respaldo diario y automático de cada sitio: archivos y base de datos',
      'Copias guardadas fuera del servidor, para que un problema en el servidor no se lleve también los respaldos',
      '30 días de historial: se puede regresar a cualquier día del último mes',
      'Prueba de restauración periódica — un respaldo que nunca se ha probado no es un respaldo'
    ]
  },
  {
    icon: '🚨',
    title: 'Respuesta a incidentes',
    items: [
      'Si un sitio llega a ser comprometido, limpieza y restauración incluidas en la cuota',
      'Cierre de la puerta por la que entraron, no sólo limpieza del síntoma',
      'Explicación en palabras claras de qué pasó y qué se hizo'
    ]
  }
]

const servicios = [
  {
    name: 'Sitios WordPress del grupo',
    detail: 'campestre.media y los demás sitios WordPress de Campestre Media — los que ya existen y los que se vayan publicando.'
  },
  {
    name: 'Su información',
    detail: 'Las bases de datos y los archivos de cada sitio — contenido, imágenes, formularios y usuarios — respaldados todos los días.'
  },
  {
    name: 'Accesos',
    detail: 'Las cuentas de administrador de los sitios: quién tiene acceso, con qué permisos, y que cada una esté protegida.'
  },
  {
    name: 'Reputación',
    detail: 'Que los sitios no aparezcan en listas de sitios peligrosos de Google ni de los navegadores, que alejan a cualquier visitante.'
  }
]

const tiempos = [
  {
    urgente: true,
    title: 'Un sitio comprometido o caído',
    detail: 'Atención inmediata en cuanto se detecta o se reporta, sin esperar a horario de oficina.'
  },
  {
    title: 'Vulnerabilidad crítica publicada',
    detail: 'Parche o mitigación dentro de las siguientes 24 horas.'
  },
  {
    title: 'Restaurar desde un respaldo',
    detail: 'Mismo día hábil.'
  },
  {
    title: 'Actualizaciones de rutina y revisiones',
    detail: 'Cada semana, sin interrumpir los sitios.'
  }
]

const fuera = [
  'Diseño, rediseño o contenido nuevo de los sitios — eso va en un alcance de trabajo aparte',
  'Desarrollo de funciones nuevas o sitios nuevos',
  'Licencias de plugins o temas de pago, dominios y hosting de terceros',
  'Seguridad de computadoras, celulares o la red interna de las oficinas',
  'Sitios que no estén hechos en WordPress (se cotizan aparte)'
]
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
