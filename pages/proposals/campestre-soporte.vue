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
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">SOPORTE TÉCNICO</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">23 de septiembre, 2026</p>
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
          Soporte técnico e infraestructura — Campestre Media
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Servicio mensual sobre el servidor de Campestre Media y todo lo que vive en él —
          sitio, correo, DNS y CRM— para que siga funcionando: los servicios arriba, las fallas
          corregidas, y las altas de cuentas y correos atendidas sin que nadie del equipo tenga que
          esperar. Es el acompañamiento continuo, no un proyecto con fecha de entrega.
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
          Sobre qué servicios aplica
        </h3>
        <div class="sm:ml-11">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="(s, i) in servicios" :key="i" class="border border-gray-200 rounded-lg p-4">
              <p class="font-semibold text-gray-900 text-sm">{{ s.name }}</p>
              <p class="text-gray-400 text-xs mt-1 leading-relaxed">{{ s.detail }}</p>
            </div>
          </div>
          <p class="text-gray-500 text-xs mt-3 leading-relaxed">
            La cuota cubre el servidor del grupo como un todo, no un servicio suelto: si se publica un
            sitio nuevo o se levanta un servicio más en esa misma máquina, queda cubierto sin costo
            adicional.
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
            Canal directo por WhatsApp con Alejandro Martos. No hay límite de solicitudes mientras
            estén dentro del alcance de arriba.
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
              <p class="font-semibold text-sky-900">Soporte técnico e infraestructura</p>
              <p class="text-xs text-sky-500 mt-1 leading-relaxed">
                Cuota mensual fija. Se cobra al inicio de cada mes y se renueva mes a mes —
                sin plazo forzoso.
              </p>
            </div>
            <p class="text-2xl sm:text-3xl font-bold text-sky-700 whitespace-nowrap">
              $350 <span class="text-sm sm:text-base font-normal text-sky-400">USD / mes</span>
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
          <li>El servicio cubre la operación de lo que ya existe. El desarrollo de módulos o sitios nuevos se cotiza por separado — ver el alcance de trabajo vigente.</li>
          <li>Dominios, hosting de terceros, licencias y servicios de consumo (Mailgun, Stripe, Google Workspace, proveedores de IA) se pagan directamente por Campestre Media y no están incluidos.</li>
          <li>Los cambios en registros DNS del grupo se ejecutan donde estén administrados; cuando el acceso lo tiene un tercero, Fullstack Labs entrega los registros exactos y acompaña el cambio.</li>
          <li>El servicio arranca con el pago del primer mes.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/campestre-soporte' },
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
  title: 'Soporte técnico e infraestructura — Campestre Media | Fullstack Labs',
  description: 'Servicio mensual de soporte técnico e infraestructura para Campestre Media: su servidor completo — sitio, correo, DNS, bases de datos y CRM — en operación, con corrección de fallas y altas de cuentas y correos.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Soporte técnico e infraestructura — Campestre Media | Fullstack Labs',
  ogDescription: 'Su servidor completo — sitio, correo, DNS y CRM — arriba y atendido. Cuota mensual fija.',
  ogUrl: 'https://fullstacklabs.org/proposals/campestre-soporte',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Soporte técnico e infraestructura — Campestre Media | Fullstack Labs',
  twitterDescription: 'Su servidor completo — sitio, correo, DNS y CRM — arriba y atendido. Cuota mensual fija.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const scopeCards = [
  {
    icon: '🖥️',
    highlight: true,
    title: 'Que sus servicios estén arriba',
    items: [
      'Vigilancia continua del servidor y de los servicios que corren en él: si algo deja de responder, se levanta solo y queda registrado',
      'Revisión de que el sitio, el correo y el CRM contesten correctamente — no sólo de que el servidor esté encendido',
      'Espacio en disco, memoria y carga: avisar y actuar antes de que el servidor se llene o se frene',
      'Atención inmediata cuando algo se cae, sin esperar a que alguien del equipo lo reporte',
      'Recuperación después de un corte de luz o de internet: que todo vuelva solo y verificar que así fue',
      'Certificados, dominios y rutas públicas vigentes — que nadie se tope con un "sitio no seguro"'
    ]
  },
  {
    icon: '🔧',
    title: 'Arreglos y mantenimiento',
    items: [
      'Corrección de fallas en el servidor, en los sitios, en el correo y en el CRM: lo que se reporta se atiende y se comunica cuando queda',
      'Publicación de las correcciones sin tirar el servicio — el equipo sigue trabajando mientras se despliega',
      'Actualizaciones de seguridad del servidor, de WordPress y de las dependencias de cada servicio',
      'Ajustes de configuración: permisos, catálogos, parámetros de la cuenta y de los departamentos',
      'Revisión de que los procesos automáticos del CRM (ediciones, cobranza, avisos) sigan corriendo'
    ]
  },
  {
    icon: '👤',
    title: 'Altas de cuentas y correos',
    items: [
      'Alta y baja de usuarios del CRM, con su rol y su departamento',
      'Reenvío de invitaciones y restablecimiento de contraseñas cuando alguien no puede entrar',
      'Creación y configuración de cuentas de correo del grupo',
      'Registros de correo (MX, SPF, DKIM y rutas de rebote) para que lo que se manda llegue a la bandeja y no a spam',
      'Verificación de entrega real: no se da por hecho que un correo salió — se comprueba que llegó'
    ]
  },
  {
    icon: '💬',
    title: 'Acompañamiento',
    items: [
      'Canal directo por WhatsApp para reportar cualquier cosa, sin ticket ni formulario',
      'Explicación en palabras claras de qué pasó y qué se hizo cuando algo falla',
      'Apoyo al equipo cuando algo no se entiende o una pantalla no hace lo que esperaban',
      'Aviso proactivo cuando se detecta algo que va a dar problema antes de que lo dé'
    ]
  }
]

const servicios = [
  {
    name: 'Su servidor',
    detail: 'El servidor de Campestre Media completo: los servicios que corren en él, su espacio y memoria, sus actualizaciones, sus certificados y su recuperación. Hoy ese mismo servidor carga el sitio, el correo y los nameservers del grupo, así que atenderlo es atender las tres cosas.'
  },
  {
    name: 'Correo del grupo',
    detail: 'Los buzones @campestre.media: que entreguen y que reciban, su reputación frente a Gmail y Outlook, salida de listas negras, y los registros que lo sostienen (MX, SPF, DKIM y rutas de rebote) — más el dominio de envío del CRM.'
  },
  {
    name: 'Dominios y DNS',
    detail: 'Las zonas y los registros del grupo, incluidos sus propios nameservers, los certificados y las vigencias de los dominios. Un registro mal puesto tira el correo o el sitio entero, y es de lo más rápido de arreglar si alguien lo está viendo.'
  },
  {
    name: 'Sitios web',
    detail: 'campestre.media y los demás sitios del grupo — los que ya existen y los que se vayan publicando — incluyendo WordPress y sus actualizaciones.'
  },
  {
    name: 'CRM de Campestre Media',
    detail: 'La plataforma completa: contactos, negocios, contratos, ediciones, cobranza y calendario de producción, con sus procesos automáticos.'
  },
  {
    name: 'Bases de datos',
    detail: 'Las bases que están detrás del sitio, del correo y del CRM: que estén arriba, que respondan y que no se llenen sin avisar.'
  }
]

const tiempos = [
  {
    urgente: true,
    title: 'Algo está caído',
    detail: 'Atención inmediata en cuanto se detecta o se reporta, en el momento, sin esperar a horario de oficina.'
  },
  {
    title: 'Alguien no puede entrar o necesita una cuenta',
    detail: 'Mismo día hábil. Es lo que más frena a un equipo, así que va antes que cualquier otra solicitud.'
  },
  {
    title: 'Una falla que no detiene la operación',
    detail: 'Dentro de los siguientes dos días hábiles, con aviso de cuándo queda.'
  },
  {
    title: 'Ajustes de configuración y solicitudes menores',
    detail: 'Dentro de la semana, agrupados para no interrumpir el trabajo del equipo con despliegues constantes.'
  }
]

const fuera = [
  'Desarrollo de módulos, pantallas o sitios nuevos — eso va en un alcance de trabajo aparte',
  'Rediseños y cambios de imagen',
  'Migración de sistemas de terceros o recuperación de plataformas que Fullstack Labs no opera',
  'Costos de consumo: dominios, hosting externo, licencias, Mailgun, Stripe, Google Workspace y servicios de IA',
  'Soporte a equipos de cómputo, impresoras o red interna de las oficinas'
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
