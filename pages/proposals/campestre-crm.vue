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

      <!-- Project Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Reestructuración del CRM — Campestre Media
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Este documento recoge lo que se acordó en la llamada del 10 de octubre con Ricardo Ochoa, y
          <strong class="text-gray-700">sustituye al alcance del 24 de septiembre</strong>. La dirección
          cambió: Campestre Media va a seguir cotizando fuera de la plataforma, y el CRM deja de ser un
          cotizador para convertirse en el lugar donde esa cotización, una vez aprobada, se vuelve
          tareas, calendario y cobranza. Cada punto fue verificado contra la plataforma y los datos
          reales de la cuenta antes de escribirse aquí.
        </p>
        <div class="mt-4 rounded-lg bg-sky-50 border border-sky-200 p-4">
          <p class="text-sm text-sky-900 font-semibold">Este documento no incluye precios.</p>
          <p class="text-xs text-sky-700 mt-1 leading-relaxed">
            El propósito es acordar primero <strong>qué</strong> se va a hacer y en qué orden. Una vez
            que Campestre Media valide el alcance —y descarte lo que no quiera— se cotiza sobre lo aprobado.
          </p>
        </div>
      </div>

      <!-- 1. La nueva forma de trabajar -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          La nueva forma de trabajar
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed">
            La plataforma se construyó para cotizar desde adentro: catálogo de paquetes, contratos,
            propuesta impresa, calendario de pagos y cobro por Stripe. Campestre Media ya tiene una forma
            de cotizar que le funciona y no la va a cambiar. Así que el CRM se simplifica alrededor de
            un solo flujo, en el lenguaje del equipo:
          </p>
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-2">
            <div v-for="(f, i) in flujo" :key="i" class="rounded-lg border border-sky-200 bg-sky-50 p-3 text-center avoid-break">
              <p class="text-sky-700 text-xs font-bold tracking-wider">{{ i + 1 }}</p>
              <p class="text-sky-900 text-sm font-semibold mt-1 leading-snug">{{ f.title }}</p>
              <p class="text-sky-700 text-xs mt-1 leading-relaxed">{{ f.detail }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed mt-4">
            Y dos palabras en lugar de diez: <strong class="text-gray-800">prospecto</strong> mientras no
            haya una cotización aprobada, <strong class="text-gray-800">cliente</strong> a partir de que la
            hay. Todo lo que no cabe en ese flujo se retira de la pantalla.
          </p>
        </div>
      </section>

      <!-- 2. Lo que se retira -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Lo que se retira de la plataforma
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed mb-3">
            Se quita de los menús y de las pantallas todo lo que pertenecía al cotizador o que el equipo
            no usa. Los datos que podrían servir después se conservan apagados, no se destruyen.
          </p>
          <div class="space-y-2">
            <div v-for="(r, i) in retira" :key="i" class="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-start gap-3 avoid-break">
              <span class="text-red-400 mt-0.5 shrink-0">✕</span>
              <div class="min-w-0">
                <p class="font-semibold text-gray-900 text-sm">{{ r.name }}</p>
                <p class="text-gray-400 text-xs mt-1 leading-relaxed">{{ r.detail }}</p>
              </div>
            </div>
          </div>
          <div class="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p class="text-xs font-semibold text-gray-700 mb-1">Lo que se queda en la ficha del cliente</p>
            <p class="text-xs text-gray-500 leading-relaxed">
              Datos, etiquetas, campos personalizados, <strong class="text-gray-700">Expediente</strong> (que pasa a
              decir «Sube tu cotización aquí»), Seguimiento (la bitácora de llamadas y WhatsApp),
              Conversación y correo, Notas, y <strong class="text-gray-700">Tareas</strong> — que hoy existe pero
              está oculto, y es el panel desde donde una tarea nace ligada a un cliente.
            </p>
          </div>
        </div>
      </section>

      <!-- 3. Lo que se construye -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Lo que se construye
        </h3>
        <div class="sm:ml-11 space-y-4">
          <div
            v-for="(m, i) in modulos"
            :key="i"
            :class="['rounded-lg p-4 sm:p-5 scope-card avoid-break', m.highlight ? 'bg-sky-50 border border-sky-200' : 'border border-gray-200']"
          >
            <div class="flex items-start gap-3">
              <span class="text-lg sm:text-xl shrink-0">{{ m.icon }}</span>
              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-3">
                  <h4 :class="['font-semibold', m.highlight ? 'text-sky-900' : 'text-gray-900']">{{ m.title }}</h4>
                  <span v-if="m.tag" class="bg-white border border-sky-200 text-sky-700 rounded-md px-2 py-0.5 text-xs font-bold shrink-0 whitespace-nowrap">{{ m.tag }}</span>
                </div>
                <p class="text-xs text-gray-500 mt-1 leading-relaxed italic">{{ m.porque }}</p>
                <ul class="mt-2 space-y-1.5">
                  <li v-for="(item, j) in m.items" :key="j" class="flex items-start text-sm text-gray-600">
                    <span :class="['mr-2 mt-0.5 shrink-0', m.highlight ? 'text-sky-500' : 'text-gray-300']">▸</span>
                    <span class="leading-relaxed">{{ item }}</span>
                  </li>
                </ul>
                <p v-if="m.nota" class="text-xs text-gray-500 mt-3 leading-relaxed border-t border-gray-200/70 pt-2"><span class="font-medium text-gray-700">Nota:</span> {{ m.nota }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Lo que ya existe -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Lo que ya existe y es la base de lo nuevo
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed mb-3">
            Buena parte del flujo nuevo se apoya en piezas que ya están construidas y en uso. Se listan
            para que no entren a la cotización y para dejar claro sobre qué se construye.
          </p>
          <div class="space-y-2">
            <div v-for="(y, i) in yaHecho" :key="i" class="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-start gap-3 avoid-break">
              <span class="text-green-600 mt-0.5 shrink-0">✓</span>
              <div class="min-w-0">
                <p class="font-semibold text-gray-900 text-sm">{{ y.name }}</p>
                <p class="text-gray-400 text-xs mt-1 leading-relaxed">{{ y.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Orden y entregas -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Orden de trabajo y entregas
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed mb-3">
            Ricardo lo necesita operando el lunes 12. Lo honesto es separar lo que cabe en un fin de
            semana de lo que no, y entregar el flujo completo primero aunque una pieza llegue después.
          </p>
          <div class="space-y-3">
            <div v-for="(e, i) in entregas" :key="i" :class="['rounded-lg p-4 avoid-break', e.highlight ? 'bg-sky-50 border border-sky-200' : 'border border-gray-200']">
              <div class="flex items-start gap-3">
                <span :class="['rounded-md px-2 py-1 text-xs font-bold shrink-0 whitespace-nowrap', e.highlight ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-600']">{{ e.label }}</span>
                <div class="min-w-0">
                  <p :class="['font-semibold text-sm', e.highlight ? 'text-sky-900' : 'text-gray-900']">{{ e.title }}</p>
                  <ul class="mt-2 space-y-1">
                    <li v-for="(item, j) in e.items" :key="j" class="flex items-start text-xs sm:text-sm text-gray-600">
                      <span :class="['mr-2 mt-0.5 shrink-0', e.highlight ? 'text-sky-500' : 'text-gray-300']">▸</span>
                      <span class="leading-relaxed">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p class="text-gray-500 text-xs mt-3 leading-relaxed">
            El atajo que hace posible el lunes: el asistente de revisión que el lector de PDF necesita de
            todas formas se construye primero y se alimenta a mano. Así el flujo cotización aprobada →
            tareas → cobranza funciona desde el primer día, y la lectura automática del PDF llega encima,
            como acelerador, no como requisito.
          </p>
        </div>
      </section>

      <!-- 6. Decisiones -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">6</span>
          Decisiones de Campestre Media antes de empezar
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed mb-3">
            Ninguna se puede adivinar desde el código, y varias escriben datos en la base: elegir mal
            significa volver a capturar, no un arreglo de software.
          </p>
          <div class="space-y-3">
            <div v-for="(d, i) in decisiones" :key="i" class="rounded-lg border border-gray-200 p-4 avoid-break">
              <p class="font-semibold text-gray-900 text-sm">{{ d.pregunta }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ d.detalle }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Lo que necesitamos -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">7</span>
          Lo que necesitamos de Campestre Media
        </h3>
        <div class="sm:ml-11">
          <ul class="space-y-2">
            <li v-for="(n, i) in necesitamos" :key="i" class="flex items-start text-sm text-gray-600">
              <span class="text-sky-500 mr-2 mt-0.5 shrink-0">▸</span>
              <span class="leading-relaxed">{{ n }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- 8. Datos -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">8</span>
          Qué pasa con los datos que ya están en la cuenta
        </h3>
        <div class="sm:ml-11">
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                  <th class="px-3 py-2 font-semibold">Dato</th>
                  <th class="px-3 py-2 font-semibold">Hoy</th>
                  <th class="px-3 py-2 font-semibold">Qué pasa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(d, i) in datos" :key="i" class="border-t border-gray-200 align-top">
                  <td class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">{{ d.name }}</td>
                  <td class="px-3 py-2 text-gray-500 text-xs">{{ d.hoy }}</td>
                  <td class="px-3 py-2 text-gray-600 text-xs">{{ d.que }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 9. Fuera de alcance -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">9</span>
          Fuera de este alcance
        </h3>
        <div class="sm:ml-11">
          <ul class="space-y-2">
            <li v-for="(f, i) in fuera" :key="i" class="flex items-start text-sm text-gray-600">
              <span class="text-gray-300 mr-2 mt-0.5 shrink-0">▸</span>
              <span class="leading-relaxed">{{ f }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Notes -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>Este documento es un alcance, no una cotización. No contiene precios: el propósito es acordar primero qué se construye y en qué orden.</li>
          <li>Sustituye al alcance del 24 de septiembre. Lo que ahí se planteaba —unir el tablero comercial con los contratos, el catálogo por duración, la aprobación de la propuesta desde el CRM— se resuelve de otra manera o deja de aplicar con el flujo nuevo.</li>
          <li>Al retirar el cotizador se retira también lo que se había construido para él: la propuesta comercial impresa, el catálogo de ocho paquetes con sus cuarenta partidas, el cobro por Stripe y el reparto de entregables desde un contrato firmado. Nada de eso llegó a usarse en producción con un cliente real, y los datos se conservan apagados.</li>
          <li>La cobranza es un registro interno: el sistema no emite facturas ni cobra a nadie. Los cobros automáticos por Stripe que existían para los contratos se apagan en el mismo cambio.</li>
          <li>Campestre Media puede descartar cualquier punto de la sección 3; lo que quede aprobado es lo que se cotiza.</li>
          <li>La vista del cliente con evidencias (sección 9) quedó acordada como fase posterior, y se cotiza aparte cuando toque.</li>
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
  description: 'Alcance de trabajo de Fullstack Labs para Campestre Media: el CRM deja de ser un cotizador. Cotización aprobada → tareas con subtareas → calendario → cobranza. Sin precios.',
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
  { title: 'Cotización', detail: 'Se hace fuera, como hoy, y se sube en PDF a su ficha: la propuesta y, cuando existen, el acta y el calendario de entregables. Varias versiones, cada una con fecha.' },
  { title: 'Aprobada', detail: 'Un botón por versión: «ésta fue la que aprobó el cliente». Ahí se vuelve cliente.' },
  { title: 'Tareas', detail: 'El sistema crea los entregables mes a mes con sus subtareas; la coordinación les pone día y responsable.' },
  { title: 'Cobranza', detail: 'Los pagos mensuales comprometidos quedan registrados para que Administración los marque cobrados.' }
]

const retira = [
  { name: 'Contratos y el cotizador', detail: 'Crear un contrato desde paquetes, la propuesta comercial impresa, el calendario de pagos del contrato y el cobro automático por Stripe. La cotización se hace fuera y se sube.' },
  { name: 'Catálogo de paquetes', detail: 'Los ocho paquetes y sus cuarenta partidas se desactivan. Cada cotización es distinta y el catálogo obligaba a elegir una que no era.' },
  { name: 'Ediciones (tablero por edición)', detail: 'Se quita la página. Lo que había que ver ahí se verá en el calendario y en las tareas por cliente.' },
  { name: 'Invoices y Scope of Work', detail: 'Eran el principio de un cotizador propio. Se quitan del menú; si algún día se quiere generar el documento desde el CRM, se retoma.' },
  { name: 'Calendarios de agendamiento', detail: 'La sección «Calendars» (páginas de reserva de citas) nunca se usó y confunde con el calendario de producción, que es uno solo y se queda.' },
  { name: 'Automatización', detail: 'Nunca se configuró ninguna. Se quitan los dos paneles que quedaban en la ficha del contacto.' },
  { name: 'En la ficha del contacto: Deals e Historial comercial', detail: 'El historial queda mejor contado en el Expediente: las cotizaciones aprobadas con su fecha son el historial.' },
  { name: 'El departamento en las tareas', detail: 'La gente se brinca departamentos; una tarea se asigna a una persona y punto.' }
]

const modulos = [
  {
    icon: '📎',
    highlight: true,
    tag: 'Base del flujo',
    title: 'Cotizaciones en la ficha del cliente, con versiones y «ésta fue la aprobada»',
    porque: 'El Expediente ya guarda cotizaciones en PDF (hay cinco subidas por cuatro personas del equipo); lo que falta es que el sistema sepa cuál es cuál y cuál ganó.',
    items: [
      'El panel pasa a decir «Sube tu cotización aquí», para que el asesor sepa exactamente dónde va',
      'Cada cotización se guarda como una versión fechada: se ve cuándo se subió la primera, cuándo la segunda, y cuánto pasó entre las dos',
      'Botón «Esta fue la que aprobó el cliente» en cada versión; sólo una por cliente puede estar aprobada',
      'Al aprobar, un proceso guiado: «tu cliente aprobó esta cotización; se van a crear las tareas y los compromisos de pago», con el enlace a ambos',
      'Aviso automático a la coordinación: «se aprobó la cotización de X, se crearon N tareas, te toca asignarlas»',
      'El contacto pasa de prospecto a cliente en ese momento, sin captura adicional'
    ]
  },
  {
    icon: '📄',
    highlight: true,
    tag: 'Acelerador',
    title: 'Lectura del documento aprobado: calendario de entregables, acta y propuesta',
    porque: 'Los tres documentos reales ya están en mano (ALTUM Aguacaliente: calendario y acta; Core Medical: propuesta). Hoy alguien copia el desglose a mano, tarea por tarea.',
    items: [
      'Se sube el documento y el sistema propone el desglose: para cada mes, el entregable grande y sus entregables individuales («Cobertura de evento 4x4 → nota web con galería, video de entrevistas, video recap, publicación en redes»)',
      'Los entregables recurrentes («2 coberturas por mes», «1 post y 1 historia en Facebook») se despliegan en una tarea por mes, que es lo que ALTUM necesita: unos 9 recurrentes al mes por 12 meses más los específicos, más de 120 tareas de un solo cliente',
      'Los montos mensuales comprometidos salen de la propuesta («$20,000 + IVA mensuales», mes por mes) y alimentan la cobranza',
      'Pantalla de revisión obligatoria: el sistema propone lo que leyó, una persona lo corrige y confirma, y sólo entonces se crean las tareas',
      'La columna TOTAL de la tabla se usa como verificación cruzada: si el sistema leyó 3 casillas donde el total dice 4, lo señala antes de que nadie confirme',
      'Un entregable «fecha por definir» (la ponencia en Executive Mornings) entra como tarea sin mes, y los bonificados (mega pantallas, valla móvil) como tareas sin monto',
      'Un documento escaneado (imagen sin texto) o uno que el sistema no reconoce se captura a mano en la misma pantalla, nunca se devuelve un desglose vacío'
    ],
    nota: 'Lo que los documentos revelan y define el diseño. El calendario de entregables y el acta comparten una tabla fija de entregables por mes con una casilla por mes programado; esa tabla se lee bien con visión sobre la página, pero una extracción de texto pierde las casillas y sólo conserva el nombre de la fila y el total, así que el lector trabaja sobre la página renderizada. Y el acta puede mover las fechas respecto a la propuesta (ALTUM: «arranque en septiembre; la propuesta original iniciaba en octubre»), nombra al responsable operativo y a quien la elabora. Por eso las tareas salen del acta o del calendario cuando existen, y el dinero sale de la propuesta.'
  },
  {
    icon: '✅',
    highlight: true,
    tag: 'Núcleo',
    title: 'Tareas con subtareas, detalle editable y «fecha por confirmar»',
    porque: 'Hoy una tarea es un título, una fecha y una persona; no se puede editar después de crearla y no tiene cómo guardar sus partes.',
    items: [
      'Entregable grande con subtareas: cada entregable individual es una subtarea con su propio responsable; una persona hace la nota web, otra el video',
      'Entregable extra escrito a mano, en texto libre, no de una lista',
      'Página de detalle de cada tarea: fecha, hora, lugar, responsable, subtareas, descripción y cliente, todo editable',
      'Al cambiar la fecha o la hora, aviso automático a los responsables',
      '«Mes asignado, día por confirmar» como estado propio: al crearse desde la cotización la tarea trae el mes y no el día; en el calendario cae en una fecha fija del mes con una etiqueta y un color que dicen que falta confirmarla',
      'Marcar completada pide confirmación y se puede deshacer; borrar sigue siendo definitivo y también pide confirmación',
      'Se quita el campo de departamento; la tarea se asigna a una persona'
    ]
  },
  {
    icon: '🗂️',
    highlight: true,
    tag: 'Núcleo',
    title: 'Tablero de tareas por cliente y por mes, y una sola cosa con el calendario',
    porque: 'Van a ser cientos de tareas en cuanto se carguen los contratos ya firmados; una lista plana ordenada por fecha no sirve.',
    items: [
      'Agrupado por cliente y, dentro, por mes: «Core Medical Institute — 18 tareas», «Septiembre: 3, día y hora sin confirmar»',
      'Filtros: por mes, cumplidas, pendientes de asignar, pendientes de fecha, por persona y por cliente',
      'Tareas y calendario dejan de ser dos cosas: el calendario es la vista por días de las mismas tareas, con la misma capacidad de edición en los dos lados',
      'Lo que ya está en vivo se conserva: las tareas con fecha se dibujan en el calendario, se arrastran para cambiarles el día, y una semana vacía dice dónde está el trabajo siguiente',
      'El panel de Tareas de la ficha del cliente se vuelve visible: es desde donde una tarea nace ligada a un cliente'
    ],
    nota: 'Hoy el calendario de producción (actividades) y las tareas son dos motores distintos. Unirlos es la decisión técnica más grande de este alcance y conviene tomarla antes de escribir código; la recomendación es que la tarea sea la única entidad y el calendario su vista, que es exactamente «la misma cosa con la misma interfaz».'
  },
  {
    icon: '💰',
    highlight: true,
    tag: 'Administración',
    title: 'Compromisos de pago y tablero de cobranza',
    porque: 'Una portada de $300,000 en 12 pagos no son $300,000 en el mes: es lo vendido contra lo cobrado, y hoy nadie lo ve.',
    items: [
      'Al aprobar una cotización se crean sus pagos mensuales comprometidos (monto y mes), sin generar ninguna factura ni cobrar a nadie',
      'Administración marca cada pago como cobrado (efectivo, transferencia o tarjeta) o pendiente',
      'Tablero de cobranza: cuánto ingresó este mes, cuánto está comprometido para el siguiente, qué está vencido, y el corte por cliente',
      'Vendido contra cobrado: el valor colocado por las cotizaciones aprobadas frente a lo que realmente ha entrado',
      'Visible sólo para las personas que Campestre Media designe (Ricardo y Alexandra Nevarez)'
    ],
    nota: 'Hay una decisión de datos aquí: la cotización dice «$20,000 + IVA mensuales». Hay que fijar si el compromiso se registra con o sin IVA, porque es lo que Administración va a marcar como cobrado.'
  },
  {
    icon: '🏆',
    highlight: false,
    tag: 'Dirección',
    title: 'Ranking de ventas por asesor',
    porque: 'Quién vendió qué este mes, con montos, a partir de las cotizaciones aprobadas.',
    items: [
      'Ventas del mes: cuántas cotizaciones se aprobaron y la suma de sus montos',
      'Por asesor: cuánto colocó cada quien y con qué clientes, en orden',
      'Entrar al detalle de un asesor: sus clientes, sus cotizaciones aprobadas y sus montos',
      'Se construye sobre el reporte por vendedor que ya existe, apuntándolo a la cotización aprobada en lugar del contrato'
    ]
  },
  {
    icon: '🧹',
    highlight: false,
    tag: 'Arranque',
    title: 'Limpieza, lenguaje y menú',
    porque: 'La cuenta tiene que verse limpia y hablar el idioma del equipo desde el primer día.',
    items: [
      'Borrar los datos de prueba que Campestre Media indique: contratos, tareas y los contactos que no sean reales',
      'Menú y pantallas en español y en el vocabulario acordado: Prospectos, Clientes, Tareas, Calendario, Cobranza',
      'Retirar del menú y de la ficha todo lo listado en la sección 2',
      'Las personas que pueden borrar: hoy el borrado de contactos y tareas es del dueño del registro y de dirección; se confirma con Ricardo si debe ampliarse'
    ]
  }
]

const yaHecho = [
  { name: 'El Expediente del cliente', detail: 'Subir archivos a la ficha, con título, fecha y nota, en disco privado (un archivo no se abre por URL adivinada). Ya hay cinco cotizaciones reales subidas por cuatro personas del equipo. Es la base del flujo nuevo.' },
  { name: 'Contactos: sectores, puesto, asesores y una persona una ficha', detail: 'Lista de sectores administrada por la cuenta, cargo y empresa como campos separados, cada asesor con su cartera, duplicados bloqueados por nombre. Se queda tal cual.' },
  { name: 'Bitácora de seguimiento', detail: 'Llamadas, WhatsApp y visitas registradas a mano desde la ficha y desde el negocio, con hora real, resultado y siguiente paso. El equipo lleva 33 gestiones.' },
  { name: 'Correo desde el CRM con adjuntos y remitente propio', detail: 'Sale a nombre de Campestre Media desde su propio dominio, con PDFs adjuntos. Probado en vivo.' },
  { name: 'El calendario de producción y las tareas en él', detail: 'Cuadrícula por semana y por mes, arrastre para cambiar de día, y desde el 10 de octubre las tareas con fecha se dibujan ahí y una semana vacía dice dónde está el trabajo siguiente.' },
  { name: 'Recibos de asignación y avisos al equipo', detail: 'Cuando se asigna trabajo, la persona recibe el aviso (campanita y correo) y confirma que lo vio. Se reutiliza tal cual para avisar a la coordinación.' },
  { name: 'Permisos por departamento y quién ve el dinero', detail: 'Producción no alcanza contactos ni cifras; cada asesor ve lo suyo; dirección ve todo. El tablero de cobranza se cuelga de esta misma regla.' },
  { name: 'Tablero de administración (por cobrar, vencido, ingreso del mes)', detail: 'Ya existe para los contratos. Se reapunta a los compromisos de la cotización aprobada y se le agrega el contraste vendido contra cobrado.' }
]

const entregas = [
  {
    highlight: true,
    label: 'Lunes 12',
    title: 'El flujo completo, operando',
    items: [
      'Cuenta limpia de datos de prueba (con la lista de Campestre Media)',
      'Menú podado y en español; la ficha sin Deals, Historial comercial ni Automatización; «Sube tu cotización aquí» y el panel de Tareas visible',
      'Cotizaciones con versiones fechadas y el botón «Esta fue la que aprobó el cliente», con el proceso guiado y el aviso a la coordinación',
      'El asistente de la cotización aprobada: se captura o pega el desglose mes a mes y los montos, y al confirmar se crean las tareas con subtareas y los compromisos de pago',
      'Subtareas con responsable, «mes asignado, día por confirmar», detalle de tarea editable (fecha, hora, lugar, responsable), confirmación al completar con deshacer, sin departamento',
      'Compromisos de pago creados y el tablero de cobranza acotado a quien Ricardo indique; los cobros automáticos por Stripe apagados',
      'Ranking de ventas por asesor reapuntado a las cotizaciones aprobadas'
    ]
  },
  {
    highlight: false,
    label: 'Semana siguiente',
    title: 'Lo que necesita los documentos de Campestre o una decisión',
    items: [
      'La lectura automática del documento (calendario, acta o propuesta), probada contra los documentos reales de ALTUM y Core Medical: pre-llena el mismo asistente que ya se usa a mano',
      'El tablero agrupado por cliente y mes con sus filtros',
      'La unificación completa de tareas y calendario, una vez tomada la decisión de la sección 6'
    ]
  },
  {
    highlight: false,
    label: 'Después',
    title: 'Fase posterior, acordada en la llamada',
    items: [
      'La vista del cliente: su calendario de entregables en una página propia, con la evidencia de cada entrega (captura, enlace o video) al tocar el bloque, y el reporte mensual de evidencias consultable ahí'
    ]
  }
]

const decisiones = [
  { pregunta: '¿Tareas y calendario se unen como una sola entidad?', detalle: 'Hoy son dos motores: el calendario de producción (actividades, con hora, lugar, varias personas y entregables) y las tareas (título, día, una persona). La recomendación es que la tarea sea la única entidad y el calendario su vista. Es la decisión más grande del alcance y define cuánto cuesta el tablero.' },
  { pregunta: 'Una tarea de la que sólo se sabe el mes, ¿en qué día cae en el calendario?', detalle: 'En la llamada se dijo el día 1. Al capturar a mano se usó el 15, que es el cierre de edición de la revista. Hay que fijar uno porque es lo que verá todo el equipo.' },
  { pregunta: '¿«Mes 1» de la cotización es el mes en que se aprueba, o el siguiente?', detalle: 'De eso salen tanto las fechas de las tareas como los meses de los compromisos de pago.' },
  { pregunta: '¿El compromiso de pago se registra con o sin IVA?', detalle: 'La cotización de Core Medical dice «$20,000 + IVA mensuales»: Administración va a marcar cobrados $20,000 o $23,200.' },
  { pregunta: '¿Quién ve exactamente el tablero de cobranza?', detalle: 'Ricardo dijo él y Alexandra. Con la regla actual de «quién ve el dinero» lo verían también David Figueroa (Dirección) y Jocsan Díaz (Administración). Hay que decir si quedan dentro o fuera.' },
  { pregunta: '¿Quién puede marcar una cotización como aprobada?', detalle: 'En la llamada, el asesor que la vendió. Aprobar crea tareas y compromisos de pago, así que un error crea 18 tareas. Alternativa: la aprueba el asesor y la valida la coordinación o dirección.' },
  { pregunta: '¿Qué pasa si se aprueba una segunda versión cuando ya se crearon las tareas de la primera?', detalle: 'Recomendación: el sistema se niega y pide deshacer la aprobación anterior primero, porque borrar tareas ya asignadas destruye trabajo en curso.' },
  { pregunta: 'Sin departamento en las tareas, ¿el tablero lo ve todo el equipo?', detalle: 'Hoy un jefe de departamento ve las tareas de su gente por el departamento. Al quitarlo, o el tablero es de todos (coherente con el calendario maestro) o se calcula por el departamento de la persona asignada.' },
  { pregunta: '¿Se queda el tablero de oportunidades, renombrado «Prospectos»?', detalle: 'Tiene 17 negocios vivos y es donde vive el paso prospecto → cliente. La llamada pidió quitar «Deals» de la ficha, no el tablero. La recomendación es conservarlo con el nombre nuevo.' },
  { pregunta: '¿Se queda la página de Programas (los siete podcasts)?', detalle: 'No está en la lista de bajas, pero pertenece al catálogo que se retira. Son datos reales (Replay, Lujo y Sabor, Visionarios…) y los entregables los nombran.' },
  { pregunta: '¿De qué documento nacen las tareas cuando hay más de uno?', detalle: 'ALTUM tiene propuesta, acta de constitución y calendario de entregables, y el acta mueve el arranque de octubre a septiembre. Recomendación: las tareas salen del acta o del calendario cuando existen (son los documentos operativos) y los compromisos de pago salen siempre de la propuesta; cuando sólo hay propuesta, como Core Medical, todo sale de ella.' },
  { pregunta: '¿La aprobación es «el cliente aprobó la propuesta» o «se elaboró el acta de constitución»?', detalle: 'El acta ya es el paso formal de entrega a operaciones: la elabora Administración (Jocsan Díaz) y la recibe la coordinación (Mych Toral). Si el CRM marca aprobada la cotización cuando se sube el acta, el que aprueba ya no es el asesor y la decisión anterior se resuelve sola.' },
  { pregunta: 'Confirmar que la coordinación que asigna es Mych Toral.', detalle: 'El acta de ALTUM la nombra «responsable operativo», y es a quien están asignadas las tres tareas actuales de Core Medical. En la llamada se le nombró «Mitch».' }
]

const necesitamos = [
  'Ya llegaron el calendario de entregables y el acta de constitución de ALTUM Aguacaliente y la propuesta de Core Medical. Falta la PROPUESTA de ALTUM (para ver cómo difiere del acta en fechas y montos) y, si existe, el acta o calendario de Core Medical: con los dos juegos completos el lector se prueba contra el caso real de los dos lados.',
  'La lista de contactos, contratos y tareas de prueba que se borran. «Los que no sean del equipo» abarca 172 contactos con cartera real repartida entre 13 asesores; no se borra cartera por inferencia.',
  'Las respuestas a la sección 6, en especial el día del mes, el IVA y quién ve cobranza: son datos que se escriben en la base desde el primer cliente.'
]

const datos = [
  { name: '172 contactos', hoy: 'Cartera real: sectores, asesores, 33 gestiones de bitácora, 7 documentos.', que: 'Se conservan intactos. Sólo se borran los que Campestre Media señale como de prueba.' },
  { name: '5 cotizaciones en PDF', hoy: 'Ya subidas al Expediente por cuatro personas del equipo.', que: 'Se conservan y se reclasifican como cotizaciones. Son el primer contenido real del flujo nuevo.' },
  { name: 'Documentos de ALTUM y Core Medical', hoy: 'Calendario de entregables, acta de constitución y propuesta, entregados por Ricardo el 10 de octubre.', que: 'Son el corpus contra el que se construye y se prueba el lector. ALTUM (12 meses) es el primer cliente que se carga con el flujo nuevo.' },
  { name: '3 tareas de Core Medical', hoy: 'Capturadas a mano por Ricardo (15 oct, 15 nov, 10 dic), asignadas a la coordinación.', que: 'Se recrean desde la cotización aprobada con el flujo nuevo: es la demostración de que funciona.' },
  { name: '11 actividades de agosto', hoy: 'Producción real (Mujeres al Frente, INFINITI, L.A. CETTO) con 31 entregables.', que: 'Se conservan; cómo se muestran depende de la decisión tareas-calendario.' },
  { name: '3 contratos en borrador', hoy: 'Nunca firmados; dos tienen su cotización en el Expediente.', que: 'Se borran. Lo que importa de ellos ya está en el Expediente.' },
  { name: '20 pagos programados', hoy: 'De contratos de prueba; cero cobrados, cero facturas emitidas.', que: 'Se borran. No hay historia financiera que proteger.' },
  { name: '8 paquetes, 40 partidas', hoy: 'El catálogo real cargado en agosto.', que: 'Se desactivan, no se borran.' },
  { name: '8 ediciones', hoy: 'El ciclo 15 → 14 de la revista, agosto 2026 a marzo 2027.', que: 'Se conservan como referencia; sólo se quita la página.' }
]

const fuera = [
  'Integración de WhatsApp al CRM — el registro de conversaciones se sigue haciendo a mano en la bitácora, como hoy',
  'La vista del cliente con evidencias y el reporte mensual: fase posterior, se cotiza cuando toque',
  'Generar la cotización desde el CRM — se descartó en la llamada; se sigue haciendo fuera',
  'Sitios web del grupo y el editor de sitios, que tienen su propio alcance de trabajo',
  'Soporte técnico e infraestructura, que se cubre por separado como servicio mensual',
  'Cualquier módulo no listado en este documento'
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
