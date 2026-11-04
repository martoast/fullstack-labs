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
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">COTIZACIÓN</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">4 de noviembre, 2026</p>
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
          <p class="text-gray-600">Proyecto: Sitios web Campestre Media Guatemala y CITY Inmobiliaria</p>
        </div>
      </div>

      <!-- Title -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          Dos sitios web a la medida — Campestre Media Guatemala y CITY Inmobiliaria
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed">
          Respuesta a la solicitud de cotización. Dos sitios independientes, diseñados desde cero a partir de
          las referencias indicadas (CULTURED Magazine para Guatemala; Tim Van Damm, Bespoke y Christie's para
          CITY), adaptados a la identidad y el contenido de cada marca. Ninguno parte de una plantilla, y cada
          uno se administra desde su propio panel sin tocar código.
        </p>
      </div>

      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          Lo que se construye
        </h3>
        <div class="sm:ml-11">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="s in sitios" :key="s.key" class="border border-gray-200 rounded-lg p-4 avoid-break">
              <p class="text-xs font-bold text-sky-700 tracking-wider">{{ s.key }}</p>
              <p class="font-semibold text-gray-900 mt-1">{{ s.name }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ s.goal }}</p>
              <p class="text-xs font-semibold text-gray-700 mt-3">Páginas y secciones</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ s.pages }}</p>
              <p class="text-xs font-semibold text-gray-700 mt-3">Lo que su equipo administra</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ s.cms }}</p>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-3 leading-relaxed">
            En ambos: diseño responsive para desktop, tablet y mobile; optimización de fotografía y video;
            velocidad; SEO técnico básico (títulos, descripciones, sitemap, URLs limpias); tarjetas para
            compartir en redes y WhatsApp; formularios funcionales; pruebas en navegadores actuales y
            corrección de errores antes de publicar.
          </p>
        </div>
      </section>

      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Diseño, animaciones y motion
        </h3>
        <div class="sm:ml-11">
          <div class="space-y-2">
            <div v-for="(m, i) in motion" :key="i" class="border border-gray-200 rounded-lg p-3 sm:p-4 flex items-start gap-3 avoid-break">
              <span class="text-lg shrink-0">{{ m.icon }}</span>
              <div class="min-w-0">
                <p class="font-semibold text-gray-900 text-sm">{{ m.name }}</p>
                <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ m.detail }}</p>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-3 leading-relaxed">
            Todo el movimiento respeta la opción del sistema «reducir movimiento» y se recorta en teléfonos
            cuando afecta la velocidad. Lo que no incluye: animación 3D, ilustración animada a la medida y
            producción o edición de video.
          </p>
        </div>
      </section>

      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Tecnología, administración y hosting
        </h3>
        <div class="sm:ml-11">
          <div class="space-y-2">
            <div v-for="(t, i) in tecnologia" :key="i" class="rounded-lg bg-gray-50 border border-gray-200 p-3 sm:p-4 avoid-break">
              <p class="text-sm font-semibold text-gray-900">{{ t.name }}</p>
              <p class="text-xs text-gray-500 mt-1 leading-relaxed">{{ t.detail }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Proceso, rondas de ajustes y tiempos
        </h3>
        <div class="sm:ml-11">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div v-for="(p, i) in proceso" :key="i" class="rounded-lg border border-sky-200 bg-sky-50 p-3 avoid-break">
              <p class="text-sky-700 text-xs font-bold tracking-wider">{{ i + 1 }}</p>
              <p class="text-sky-900 text-sm font-semibold mt-1 leading-snug">{{ p.title }}</p>
              <p class="text-sky-700 text-xs mt-1 leading-relaxed">{{ p.detail }}</p>
            </div>
          </div>
          <div class="mt-3 overflow-hidden rounded-lg border border-gray-200 text-sm">
            <div class="grid grid-cols-2 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"><span>Sitio</span><span class="text-right">Tiempo estimado</span></div>
            <div class="grid grid-cols-2 px-4 py-2 border-t border-gray-100"><span>Campestre Media Guatemala</span><span class="text-right">4 semanas</span></div>
            <div class="grid grid-cols-2 px-4 py-2 border-t border-gray-100"><span>CITY Inmobiliaria</span><span class="text-right">5 semanas</span></div>
            <div class="grid grid-cols-2 px-4 py-2 border-t border-gray-100 font-semibold"><span>Ambos en paralelo</span><span class="text-right">6 semanas</span></div>
          </div>
          <p class="text-xs text-gray-500 mt-3 leading-relaxed">
            Dos rondas de ajustes de diseño y una ronda de ajustes sobre el sitio ya construido, por sitio. Los
            tiempos corren desde que recibimos logotipos, textos y fotografías; si el material llega por partes,
            el calendario se recorre con él.
          </p>
        </div>
      </section>

      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Inversión
        </h3>
        <div class="sm:ml-11">
          <div class="space-y-2">
            <div class="rounded-lg border border-gray-200 p-4 flex items-center justify-between gap-3 avoid-break">
              <div>
                <p class="font-semibold text-gray-900 text-sm">A. Campestre Media Guatemala</p>
                <p class="text-xs text-gray-500 mt-0.5">Contratado de forma independiente</p>
              </div>
              <p class="text-xl font-bold text-gray-700 whitespace-nowrap">$520 <span class="text-xs font-semibold text-gray-500">USD</span></p>
            </div>
            <div class="rounded-lg border border-gray-200 p-4 flex items-center justify-between gap-3 avoid-break">
              <div>
                <p class="font-semibold text-gray-900 text-sm">B. CITY Inmobiliaria</p>
                <p class="text-xs text-gray-500 mt-0.5">Contratado de forma independiente</p>
              </div>
              <p class="text-xl font-bold text-gray-700 whitespace-nowrap">$560 <span class="text-xs font-semibold text-gray-500">USD</span></p>
            </div>
            <div class="rounded-lg border-2 border-sky-600 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 avoid-break">
              <div>
                <p class="font-semibold text-gray-900">C. Ambos proyectos</p>
                <p class="text-xs text-gray-500 mt-1 leading-relaxed">Contratados juntos: $120 USD menos que por separado.</p>
              </div>
              <p class="text-3xl sm:text-4xl font-bold text-sky-700 whitespace-nowrap">$960 <span class="text-base font-semibold text-gray-500">USD</span></p>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-3 leading-relaxed">
            Forma de pago: 50% al aprobar la cotización para iniciar y 50% al publicar cada sitio. Precios sin IVA.
          </p>
        </div>
      </section>

      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">6</span>
          Después del lanzamiento
        </h3>
        <div class="sm:ml-11">
          <div class="space-y-2">
            <div v-for="(d, i) in despues" :key="i" class="border border-gray-200 rounded-lg p-3 sm:p-4 avoid-break">
              <p class="font-semibold text-gray-900 text-sm">{{ d.name }}</p>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">{{ d.detail }}</p>
            </div>
          </div>
        </div>
      </section>
<!-- Notas -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>El contenido, fotografías, videos, logotipos y materiales de marca los proporciona su equipo, como indica la solicitud. La redacción de artículos, la sesión fotográfica y la producción de video no están incluidas.</li>
          <li>Las referencias se usan como dirección creativa: composición, proporciones, ritmo y comportamiento. No se copian textos, imágenes, logotipos ni código de esos sitios.</li>
          <li>Migrar artículos existentes de otro sitio no está incluido; si quieren traer el archivo editorial actual, lo cotizamos según el volumen.</li>
          <li>Costos de terceros: el dominio de cada marca (lo renuevan ustedes). No se requieren licencias de pago para el panel ni para la tecnología propuesta.</li>
          <li>Vigencia de esta cotización: 30 días.</li>
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
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/campestre-sitios' },
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
  title: 'Cotización — Sitios web Campestre Media Guatemala y CITY Inmobiliaria | Fullstack Labs',
  description: 'Dos sitios web a la medida con panel de administración. Ambos: $960 USD.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Cotización — Sitios web Campestre Media Guatemala y CITY Inmobiliaria | Fullstack Labs',
  ogDescription: 'Dos sitios web a la medida con panel de administración: revista digital y sitio inmobiliario premium.',
  ogUrl: 'https://fullstacklabs.org/proposals/campestre-sitios',
  ogImage: 'https://fullstacklabs.org/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Cotización — Sitios web Campestre Media Guatemala y CITY Inmobiliaria | Fullstack Labs',
  twitterDescription: 'Dos sitios web a la medida con panel de administración: revista digital y sitio inmobiliario premium.',
  twitterImage: 'https://fullstacklabs.org/og.png',
  twitterImageAlt: 'Fullstack Labs'
})


const sitios = [
  {
    key: 'A',
    name: 'Campestre Media Guatemala',
    goal: 'Revista digital premium: la fotografía y los titulares al frente, artículos distribuidos con ritmo editorial y tipografía con espacio.',
    pages: 'Home editorial, menú general, categorías y página de categoría, artículo individual, artículos destacados, buscador, sección de ediciones/revista, Nosotros, Contacto, suscripción al newsletter, footer y redes sociales.',
    cms: 'Publicar y editar artículos, cargar fotografías y la imagen destacada, asignar categorías, administrar autores, marcar destacados y armar las ediciones de la revista.'
  },
  {
    key: 'B',
    name: 'CITY Inmobiliaria',
    goal: 'Sitio inmobiliario de lujo con enfoque en arquitectura y estilo de vida: hero de alto impacto, fotografía y video a pantalla amplia y presentación editorial de cada desarrollo y propiedad.',
    pages: 'Home, Propiedades y Desarrollos (listado + página individual de cada uno), Nosotros, Equipo/asesores, Servicios, Contacto, formularios de leads, botón directo a WhatsApp, footer y redes.',
    cms: 'Crear, editar y retirar propiedades y desarrollos con galería, video, precio, ubicación con mapa, descripción, recámaras, baños, superficie, características, amenidades y su asesor asignado; administrar al equipo de asesores.'
  }
]

const motion = [
  { icon: '🎬', name: 'Entrada y hero', detail: 'Carga con transición de entrada; en CITY, hero a pantalla completa con video o fotografía y texto que aparece por capas.' },
  { icon: '↕️', name: 'Al hacer scroll', detail: 'Imágenes y titulares que entran con desplazamiento suave, efecto de profundidad (parallax ligero) en fotografías amplias y secciones que se revelan en secuencia.' },
  { icon: '🔀', name: 'Transiciones entre páginas', detail: 'Cambio de página sin pantallazo en blanco: la imagen del artículo o la propiedad se continúa hacia su página.' },
  { icon: '🖱️', name: 'Microinteracciones y hover', detail: 'Tarjetas de artículos y propiedades con zoom sutil de la imagen, subrayados animados, menú que se abre con transición y galerías que se deslizan con el dedo en teléfono.' }
]

const tecnologia = [
  { name: 'Sitio a la medida', detail: 'Desarrollado en Laravel con el diseño y las animaciones escritos a mano para cada marca; no es un tema de WordPress ni un constructor de plantillas.' },
  { name: 'Panel de administración (CMS)', detail: 'Cada sitio trae su propio panel con usuario y contraseña por persona. Formularios sencillos para artículos, autores, categorías, ediciones, propiedades, desarrollos y asesores; las fotos se optimizan solas al subirlas.' },
  { name: 'Formularios y leads', detail: 'Los formularios de CITY llegan por correo y directo a su CRM (Bolt), con la propiedad de la que pregunta el prospecto. El newsletter de Guatemala guarda los suscriptores en el panel, exportables a la herramienta de envío que usen.' },
  { name: 'Hosting', detail: 'Lo alojamos en la infraestructura de Fullstack Labs, con certificado de seguridad y red de entrega de Cloudflare. Si prefieren su propio servidor, el sitio corre en cualquier servidor estándar con PHP y MySQL (desde unos $10–20 USD al mes).' }
]

const proceso = [
  { title: 'Arranque', detail: 'Reunión para revisar referencias, contenido y material de marca de cada sitio.' },
  { title: 'Diseño', detail: 'Home y páginas clave en diseño navegable. Aprueban o piden ajustes (2 rondas).' },
  { title: 'Construcción', detail: 'Sitio completo en una dirección privada de prueba donde lo revisan con su contenido real (1 ronda de ajustes).' },
  { title: 'Publicación', detail: 'Aprobación final por escrito, conexión del dominio y capacitación del panel.' }
]

const despues = [
  { name: 'Garantía', detail: '30 días después de publicar cada sitio: cualquier error de funcionamiento se corrige sin costo.' },
  { name: 'Soporte posterior', detail: 'Hosting, mantenimiento, respaldos y cambios después de la garantía entran en el soporte técnico mensual que ya tienen cotizado aparte. Sin ese soporte, los cambios se cotizan por evento.' },
  { name: 'Entregables', detail: 'Dos sitios publicados en sus dominios, un panel de administración por sitio con sus usuarios, una capacitación en video para su equipo y el código fuente completo.' },
  { name: 'Propiedad del código', detail: 'El código fuente y los archivos del proyecto son de Campestre Media / CITY Inmobiliaria al liquidar el pago, y se entregan en un repositorio a su nombre.' }
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
