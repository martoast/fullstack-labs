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
            <p class="text-sky-200 text-xs sm:text-sm mt-1">24 de septiembre, 2026</p>
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
          Siguiente etapa del CRM — Campestre Media
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Este documento recoge, punto por punto, lo que se revisó en la sesión del 24 de septiembre
          con Ricardo Ochoa navegando el sistema en vivo. Cada punto quedó verificado contra la
          plataforma real antes de escribirse aquí: lo que ya está hecho, lo que está a medias y lo
          que hay que construir.
        </p>
        <div class="mt-4 rounded-lg bg-sky-50 border border-sky-200 p-4">
          <p class="text-sm text-sky-900 font-semibold">Este documento no incluye precios.</p>
          <p class="text-xs text-sky-700 mt-1 leading-relaxed">
            El propósito es acordar primero <strong>qué</strong> se va a hacer. Una vez que Campestre
            Media valide el alcance —y descarte lo que no quiera— se cotiza sobre lo aprobado.
          </p>
        </div>
      </div>

      <!-- 1. Punto de partida -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          Punto de partida
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed">
            La observación central de la sesión fue correcta, y al revisarla en la base de datos resultó
            ser más grande de lo que se veía en pantalla:
          </p>
          <div class="mt-3 rounded-lg border border-gray-200 p-4 sm:p-5">
            <div class="grid grid-cols-3 gap-3 text-center">
              <div>
                <p class="text-2xl font-bold text-gray-900">8</p>
                <p class="text-xs text-gray-500 mt-0.5 leading-snug">negocios marcados como cerrados</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900">$208,000</p>
                <p class="text-xs text-gray-500 mt-0.5 leading-snug">valor de esos cierres</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-sky-700">0</p>
                <p class="text-xs text-gray-500 mt-0.5 leading-snug">contratos ligados a ellos</p>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed mt-3">
            El tablero comercial y el módulo de contratos funcionan hoy como dos sistemas separados:
            marcar un negocio como cerrado no produce contrato, ni calendario de pagos, ni entregables,
            ni cobranza. Por eso el asesor tiene razón cuando dice que cerró, la dirección tiene razón
            cuando dice que no aparece, y el sistema no está mintiendo — simplemente nadie le pidió
            todavía que uniera las dos mitades. <strong class="text-gray-800">Cerrar esa costura es el
            primer punto de este alcance</strong>, y de ella cuelga casi todo lo demás.
          </p>
        </div>
      </section>

      <!-- 2. Lo que ya está hecho -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Lo que ya está hecho y no hay que volver a pedir
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed mb-3">
            Varias de las solicitudes de la sesión ya están construidas y en uso. Se listan aquí para
            que no entren a la cotización y para que el equipo sepa dónde encontrarlas.
          </p>
          <div class="space-y-2">
            <div v-for="(y, i) in yaHecho" :key="i" class="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-start gap-3">
              <span class="text-green-600 mt-0.5 shrink-0">✓</span>
              <div class="min-w-0">
                <p class="font-semibold text-gray-900 text-sm">{{ y.name }}</p>
                <p class="text-gray-400 text-xs mt-1 leading-relaxed">{{ y.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Ajustes -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Ajustes al sistema actual
        </h3>
        <div class="sm:ml-11">
          <p class="text-sm text-gray-600 leading-relaxed mb-3">
            Cosas que ya existen pero se quedaron a medias. Son de bajo esfuerzo y alto efecto: varias
            de ellas son la razón por la que la plataforma se siente incompleta al usarla.
          </p>
          <div class="space-y-2">
            <div v-for="(a, i) in ajustes" :key="i" class="border border-gray-200 rounded-lg p-3 sm:p-4">
              <p class="font-semibold text-gray-900 text-sm">{{ a.name }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed"><span class="font-medium text-gray-600">Hoy:</span> {{ a.hoy }}</p>
              <p class="text-gray-500 text-xs mt-0.5 leading-relaxed"><span class="font-medium text-sky-700">Queda:</span> {{ a.queda }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Modulos nuevos -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Módulos nuevos
        </h3>
        <div class="sm:ml-11 space-y-4">
          <div
            v-for="(m, i) in modulos"
            :key="i"
            :class="['rounded-lg p-4 sm:p-5 scope-card avoid-break', m.highlight ? 'bg-sky-50 border border-sky-200' : 'border border-gray-200']"
          >
            <div class="flex items-start gap-3">
              <span class="text-lg sm:text-xl shrink-0">{{ m.icon }}</span>
              <div class="min-w-0">
                <h4 :class="['font-semibold', m.highlight ? 'text-sky-900' : 'text-gray-900']">{{ m.title }}</h4>
                <p class="text-xs text-gray-500 mt-1 leading-relaxed italic">{{ m.porque }}</p>
                <ul class="mt-2 space-y-1.5">
                  <li v-for="(item, j) in m.items" :key="j" class="flex items-start text-sm text-gray-600">
                    <span :class="['mr-2 mt-0.5 shrink-0', m.highlight ? 'text-sky-500' : 'text-gray-300']">▸</span>
                    <span class="leading-relaxed">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Decisiones -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Decisiones que hay que tomar antes de empezar
        </h3>
        <div class="sm:ml-11 space-y-3">
          <div v-for="(d, i) in decisiones" :key="i" class="rounded-lg border border-gray-200 p-4 avoid-break">
            <p class="font-semibold text-gray-900 text-sm">{{ d.pregunta }}</p>
            <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ d.detalle }}</p>
          </div>
        </div>
      </section>

      <!-- 6. Lo que necesitamos de Campestre -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">6</span>
          Lo que necesitamos de Campestre Media
        </h3>
        <div class="sm:ml-11">
          <ul class="space-y-2">
            <li v-for="(n, i) in necesitamos" :key="i" class="flex items-start text-sm text-gray-600">
              <span class="text-sky-500 mr-2 mt-0.5 shrink-0">▸</span>
              <span class="leading-relaxed">{{ n }}</span>
            </li>
          </ul>
          <p class="text-gray-500 text-xs mt-3 leading-relaxed">
            Sin estos tres insumos el trabajo se detiene a media construcción, que es exactamente lo que
            ha pasado hasta ahora: se avanza por lo que se alcanza a definir en cada sesión en lugar de
            trabajar contra un alcance completo.
          </p>
        </div>
      </section>

      <!-- 7. Orden -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">7</span>
          Orden sugerido
        </h3>
        <div class="sm:ml-11 space-y-2">
          <div v-for="(o, i) in orden" :key="i" class="rounded-lg border border-gray-200 p-3 sm:p-4 flex items-start gap-3 avoid-break">
            <span class="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold shrink-0">{{ i + 1 }}</span>
            <div class="min-w-0">
              <p class="font-semibold text-gray-900 text-sm">{{ o.title }}</p>
              <p class="text-gray-400 text-xs mt-0.5 leading-relaxed">{{ o.detail }}</p>
            </div>
          </div>
          <p class="text-gray-500 text-xs mt-2 leading-relaxed">
            Es una propuesta de prioridad, no un calendario. Las fechas se fijan al cotizar, sobre el
            alcance que Campestre Media haya aprobado.
          </p>
        </div>
      </section>

      <!-- 8. Fuera de alcance -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">8</span>
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
          <li>Este documento es un alcance, no una cotización. No contiene precios ni fechas: el propósito es acordar primero qué se construye.</li>
          <li>Cada punto fue verificado contra la plataforma en producción antes de escribirse. Lo que aparece en la sección 2 ya está hecho y no forma parte de lo que haya que cotizar.</li>
          <li>Campestre Media puede descartar cualquier punto de las secciones 3 y 4; lo que quede aprobado es lo que se cotiza.</li>
          <li>Durante la sesión del 24 de septiembre quedaron registros de prueba en la base de datos — un contacto, tres contratos en borrador y uno activo. Se eliminan en cuanto Campestre Media lo indique, para que no afecten sus cifras.</li>
          <li>La secuencia de la sección 7 es una recomendación de prioridad basada en las dependencias técnicas entre módulos, no un compromiso de calendario.</li>
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
  title: 'Alcance de trabajo — Siguiente etapa del CRM, Campestre Media | Fullstack Labs',
  description: 'Alcance de la siguiente etapa del CRM de Campestre Media, levantado de la sesión del 24 de septiembre: unir el pipeline con los contratos, tablero por asesor, lectura de cotizaciones en PDF y calendario de entregables.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Alcance de trabajo — Siguiente etapa del CRM, Campestre Media | Fullstack Labs',
  ogDescription: 'Lo que ya está hecho, lo que está a medias y lo que falta construir. Sin precios: primero se acuerda el alcance.',
  ogUrl: 'https://fullstacklabs.org/proposals/campestre-crm',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Alcance de trabajo — Siguiente etapa del CRM, Campestre Media | Fullstack Labs',
  twitterDescription: 'Lo que ya está hecho, lo que está a medias y lo que falta construir. Sin precios: primero se acuerda el alcance.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})

const yaHecho = [
  { name: 'Sector del cliente, administrable por la cuenta', detail: 'Se captura desde la ficha del contacto y la lista la administra Campestre. Hoy son 19 sectores y 64 de 109 contactos ya están clasificados.' },
  { name: 'El selector de responsable sólo ofrece asesores comerciales', detail: 'Ya está filtrado a los 13 del equipo comercial. En la sesión se vio con cuenta de administrador, que por diseño ve a todos.' },
  { name: 'Registro manual de llamadas y WhatsApp', detail: 'Desde la ficha del cliente y desde el negocio, con la hora real de la llamada, el resultado y el siguiente paso. El equipo ya lleva 18 gestiones registradas.' },
  { name: 'Marcar un pago como realmente cobrado', detail: 'Administración puede registrar el pago de cada mensualidad — efectivo, transferencia o tarjeta — y queda reflejado en la cobranza.' },
  { name: 'Envío de la propuesta al cliente por correo', detail: 'Sale a nombre de Campestre Media desde su propio dominio. Se probó en vivo durante la sesión y llegó correctamente.' },
  { name: 'Permisos por departamento', detail: 'Producción, diseño y multimedia no alcanzan contactos, negocios, contratos ni cifras; cada asesor ve su propia cartera; gerencia y dirección ven todo.' },
  { name: 'Cada asesor con su cartera', detail: 'Verificado sobre los datos reales: cada asesor ve exactamente los contactos que tiene asignados, y dirección los 109.' }
]

const ajustes = [
  {
    name: 'Enviar la propuesta debe cambiar el estatus del contrato',
    hoy: 'Al enviarla se registra la fecha de envío, pero el contrato sigue diciendo "borrador".',
    queda: 'Que el estatus avance solo al enviar, y poder corregirlo a mano cuando haga falta.'
  },
  {
    name: 'Las cortesías y notas del contrato no salen en la propuesta',
    hoy: 'Lo que se escribe en Notas — por ejemplo una pantalla digital de cortesía por cuatro meses — no aparece en el documento que ve el cliente.',
    queda: 'Que las cortesías y bonificaciones se impriman como parte de lo que se está ofreciendo.'
  },
  {
    name: 'El descuento no se aplica',
    hoy: 'Escribir "10% de descuento" es sólo un texto; no modifica ningún monto.',
    queda: 'Descuento como cifra real, aplicado al total y visible en la propuesta y en el calendario de pagos.'
  },
  {
    name: 'La duración no se hereda del paquete',
    hoy: 'Al elegir "Portada 6 meses" hay que teclear 6 aparte. El dato ya viaja a la pantalla y no se usa.',
    queda: 'Que el paquete fije la duración, y que quede claro si una partida es una por mes o una sola vez.'
  },
  {
    name: 'El "vertical" del contrato es otra lista, distinta a los sectores',
    hoy: 'Son cinco opciones fijas que no coinciden con los 19 sectores del CRM, y hay que volver a elegirla aunque el contacto ya tenga la suya.',
    queda: 'Unificar: un solo catálogo de sectores, heredado del cliente, con la opción de cambiarlo si el contrato es para otra de sus empresas.'
  },
  {
    name: 'Un asesor no puede crear contratos',
    hoy: 'Crear contratos está reservado a dirección y gerencia, que es lo que se vio con la cuenta de Arturo.',
    queda: 'Abrirlo a los asesores comerciales, y que el vendedor se ponga solo con la persona que lo está creando en lugar de elegirse de una lista.'
  },
  {
    name: 'Partidas del catálogo que no corresponden',
    hoy: '"1 de 3 lugares en la Página Compartida de su rubro" aparece en Paquete Interiores, y existe una equivalente en Paquete Portada.',
    queda: 'Depurarlas en el catálogo, no sólo en una propuesta suelta, para que no vuelvan a aparecer.'
  },
  {
    name: 'No se puede corregir un contrato ya creado',
    hoy: 'Sólo se pueden cambiar las notas y el vertical; cualquier otro cambio obliga a crear uno nuevo.',
    queda: 'Poder corregir los términos mientras el contrato siga en borrador.'
  }
]

const modulos = [
  {
    icon: '🔗',
    highlight: true,
    title: 'Unir el tablero comercial con los contratos',
    porque: 'Es el punto que detonó la revisión: hoy hay ocho cierres marcados y ningún contrato detrás.',
    items: [
      'Cerrar un negocio lleva a generar su contrato, en lugar de quedarse como una marca suelta en el tablero',
      'El contrato queda ligado al negocio que lo originó, y el negocio refleja el estado real del contrato',
      'La cifra de ventas del mes deja de depender de que alguien marque una casilla y pasa a salir de contratos reales',
      'Revisión de los ocho cierres que hoy existen sin contrato, para dejarlos consistentes'
    ]
  },
  {
    icon: '📊',
    highlight: true,
    title: 'Tablero directivo con desglose por asesor',
    porque: 'Hoy el tablero muestra dinero agregado, pero no dice quién vendió qué. Ese corte no existe en ninguna pantalla.',
    items: [
      'Total colocado en el mes, sumando los contratos cerrados — no el dinero cobrado, sino lo vendido',
      'Desglose por asesor: cuánto colocó cada uno y con qué clientes',
      'Ranking del mes con los montos de cada quien',
      'Entrar al detalle de un asesor: contactos que agregó, negocios que cerró y cuáles fueron',
      'Separación explícita entre lo VENDIDO y lo COBRADO, que en contratos diferidos a meses no son lo mismo',
      'Base total de contactos de la cuenta, alimentada por todos los asesores'
    ]
  },
  {
    icon: '📄',
    highlight: true,
    title: 'Lectura de cotizaciones en PDF',
    porque: 'Las cotizaciones se elaboran fuera de la plataforma y hoy no hay forma de que el sistema sepa qué se prometió.',
    items: [
      'Subir la cotización al CRM y que el sistema extraiga cliente, empresa, entregables y montos',
      'Que identifique EN QUÉ MES va cada entregable, que es lo que alimenta el calendario de producción',
      'Que el contrato y sus entregables queden creados a partir de ese documento, sin recapturar nada',
      'Revisión humana antes de guardar: el sistema propone lo que leyó y una persona lo confirma',
      'Consideración técnica: conviene subir el documento original en PDF o Word. Un documento escaneado es una imagen y requiere un reconocimiento de texto adicional, más lento y menos confiable'
    ]
  },
  {
    icon: '📅',
    title: 'Fechas por confirmar como tarea pendiente',
    porque: 'Una cobertura de evento o un programa vendido "para octubre" no traen día, y hoy el entregable queda sin fecha y fuera del calendario.',
    items: [
      'Cuando la cotización no especifica el día, el entregable queda como pendiente de agendar en lugar de perderse',
      'El administrador recibe la tarea de asignar fecha compromiso para ese cliente',
      'Vista por mes: qué hay que entregar a cada cliente aunque todavía no tenga día exacto',
      'Al firmar un contrato, avisar cuántos entregables quedaron sin fecha y sin responsable'
    ]
  },
  {
    icon: '✍️',
    title: 'Aprobación de la propuesta por el cliente',
    porque: 'Hoy el cliente responde por fuera y alguien del equipo tiene que marcar el cierre a mano.',
    items: [
      'El cliente abre su propuesta y la aprueba desde ahí',
      'La aprobación queda registrada con fecha y deja el contrato activo sin captura manual',
      'Aviso al asesor y a dirección en el momento en que el cliente aprueba'
    ]
  },
  {
    icon: '📦',
    title: 'Catálogo de paquetes por duración',
    porque: 'Hoy son ocho paquetes con duraciones mezcladas. La idea es que el asesor elija uno y no modifique nada.',
    items: [
      'Cada paquete definido en sus duraciones de 3, 6 y 12 meses, con su precio y sus entregables por mes',
      'El asesor elige un paquete y el sistema arma el resto',
      'Lo que se salga del catálogo se maneja aparte, sin ensuciar los paquetes estándar',
      'Requiere que Campestre Media entregue la definición final de los paquetes'
    ]
  }
]

const decisiones = [
  {
    pregunta: '¿Las cotizaciones se elaboran dentro del CRM o se siguen haciendo fuera y se suben?',
    detalle: 'En la sesión la preferencia fue seguir elaborándolas fuera, donde ya hay un historial de más de sesenta cotizaciones que da muy buenos resultados, y subirlas al CRM. Esa decisión hace que el trabajo se concentre en la lectura del documento y deja de tener sentido construir un cotizador propio. Son caminos alternativos: no conviene hacer los dos.'
  },
  {
    pregunta: '¿Qué es una "oportunidad" y qué es un "contrato" en el lenguaje de Campestre?',
    detalle: 'Para Campestre Media una oportunidad es la cotización presentada y un contrato es la cotización cerrada. El sistema usa hoy los mismos conceptos con otros matices. Vale la pena fijar los nombres antes de construir encima, porque de eso dependen los estados, los tableros y los reportes.'
  },
  {
    pregunta: '¿Qué puede hacer exactamente cada rol?',
    detalle: 'Quedó pendiente la definición por departamento: quién crea contratos, quién administra el catálogo y los programas, quién ve las cifras completas y quién sólo lo suyo. Es dato de Campestre Media y condiciona varias de las pantallas de este alcance.'
  }
]

const necesitamos = [
  'La definición final de los paquetes: cuáles son, qué incluye cada uno y en qué duraciones se venden (3, 6 y 12 meses).',
  'Los permisos por departamento: qué puede hacer cada rol dentro del sistema.',
  'Un juego de cotizaciones reales en su formato definitivo, para construir la lectura de documentos contra ejemplos verdaderos y no contra supuestos.'
]

const orden = [
  { title: 'Unir el tablero comercial con los contratos', detail: 'Es la base: sin esto, cualquier cifra que muestre el sistema seguirá sin cuadrar con la realidad comercial.' },
  { title: 'Ajustes al sistema actual', detail: 'Los ocho puntos de la sección 3. Son rápidos y quitan casi toda la sensación de que la plataforma está incompleta.' },
  { title: 'Lectura de cotizaciones en PDF', detail: 'Una vez definido el formato de los paquetes y con ejemplos reales en mano.' },
  { title: 'Calendario: fechas por confirmar', detail: 'Se apoya en lo anterior, porque los entregables salen de la cotización leída.' },
  { title: 'Tablero directivo por asesor', detail: 'Cobra sentido cuando los contratos ya reflejan la realidad comercial; antes mostraría cifras incompletas.' },
  { title: 'Aprobación de la propuesta por el cliente', detail: 'Cierra el ciclo de punta a punta, del envío al contrato activo.' }
]

const fuera = [
  'Integración de WhatsApp al CRM — el registro de conversaciones se sigue haciendo a mano, como está hoy',
  'Sitios web del grupo y el editor de sitios, que tienen su propio alcance de trabajo',
  'Soporte técnico e infraestructura, que se cubre por separado como servicio mensual',
  'Cualquier módulo no listado en este documento'
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
