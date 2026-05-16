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
            <p class="text-xl sm:text-2xl font-semibold tracking-wide">CUESTIONARIO DE INICIO</p>
            <p class="text-sky-200 text-xs sm:text-sm mt-1">Fase 1 — Migración de dominios y hosting</p>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="px-5 sm:px-10 py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-b border-gray-200 text-sm">
        <div>
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">De</p>
          <p class="font-semibold text-gray-900">Alejandro Martos Ayala</p>
          <p class="text-gray-600">Fullstack Labs</p>
          <p class="text-gray-600">alexmartos96@gmail.com</p>
          <p class="text-gray-600">Tel: (619) 888-5248</p>
        </div>
        <div>
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Para</p>
          <p class="font-semibold text-gray-900">Ricardo Ochoa</p>
          <p class="text-gray-600">Bolt Media</p>
          <p class="text-gray-600">Tel: +52 1 612 103 1166</p>
        </div>
      </div>

      <!-- Intro -->
      <div class="px-5 sm:px-10 pt-6 sm:pt-8 pb-3 sm:pb-4">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
          ¡Arrancamos! Información que necesitamos para iniciar la migración
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
          Ricardo, gracias por aprobar la propuesta. Para empezar con la migración de dominios desde GoDaddy a Cloudflare y mover el hosting a Netlify, necesitamos que nos compartas los siguientes datos y accesos. Mientras más completo lo recibamos, más rápido podemos arrancar y menos interrupciones tendrá tu operación.
        </p>
      </div>

      <!-- Section 1: Dominios y GoDaddy -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">1</span>
          Dominios y acceso a GoDaddy
        </h3>
        <p class="text-sm text-gray-500 sm:ml-11 mb-4 leading-relaxed">
          Para transferir los dominios y apuntar los DNS a Cloudflare necesitamos entrar a la cuenta de GoDaddy donde están registrados actualmente.
        </p>
        <div class="space-y-3 sm:ml-11">
          <QItem v-for="(q, i) in section1" :key="i" :q="q" />
        </div>
      </section>

      <!-- Section 2: Correo y DNS -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">2</span>
          Correo y registros DNS críticos
        </h3>
        <p class="text-sm text-gray-500 sm:ml-11 mb-4 leading-relaxed">
          Antes de tocar los DNS necesitamos mapear todo lo que actualmente depende de ellos (correo, verificaciones, subdominios) para que nada se caiga durante la migración.
        </p>
        <div class="space-y-3 sm:ml-11">
          <QItem v-for="(q, i) in section2" :key="i" :q="q" />
        </div>
      </section>

      <!-- Section 3: Google Workspace / Search Console -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">3</span>
          Google Workspace, Search Console y Analytics
        </h3>
        <p class="text-sm text-gray-500 sm:ml-11 mb-4 leading-relaxed">
          Necesitamos validar los servicios de Google que estén ligados a sus dominios para garantizar que sigan funcionando después del cambio.
        </p>
        <div class="space-y-3 sm:ml-11">
          <QItem v-for="(q, i) in section3" :key="i" :q="q" />
        </div>
      </section>

      <!-- Section 4: Hosting actual -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">4</span>
          Hosting actual del sitio
        </h3>
        <p class="text-sm text-gray-500 sm:ml-11 mb-4 leading-relaxed">
          Para mover el sitio a Netlify necesitamos acceso a donde está hospedado hoy para descargar los archivos, configuración y certificados.
        </p>
        <div class="space-y-3 sm:ml-11">
          <QItem v-for="(q, i) in section4" :key="i" :q="q" />
        </div>
      </section>

      <!-- Section 5: Cuentas de destino -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">5</span>
          Cuentas de destino — Cloudflare y Netlify
        </h3>
        <p class="text-sm text-gray-500 sm:ml-11 mb-4 leading-relaxed">
          Las cuentas finales donde vivirán los dominios y el hosting. Si ya tienes una, perfecto; si no, las creamos nosotros a tu nombre.
        </p>
        <div class="space-y-3 sm:ml-11">
          <QItem v-for="(q, i) in section5" :key="i" :q="q" />
        </div>
      </section>

      <!-- Section 6: Otros accesos -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">6</span>
          Otros servicios e integraciones
        </h3>
        <p class="text-sm text-gray-500 sm:ml-11 mb-4 leading-relaxed">
          Cualquier herramienta de terceros que dependa de los dominios actuales y debamos preservar.
        </p>
        <div class="space-y-3 sm:ml-11">
          <QItem v-for="(q, i) in section6" :key="i" :q="q" />
        </div>
      </section>

      <!-- Cómo compartir credenciales -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span class="w-7 h-7 sm:w-8 sm:h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 shrink-0">🔒</span>
          Cómo compartir las credenciales de forma segura
        </h3>
        <div class="sm:ml-11 border border-sky-200 bg-sky-50 rounded-lg p-4 sm:p-5">
          <p class="text-sm text-sky-900 leading-relaxed">
            <strong>Por favor no envíes contraseñas por WhatsApp, SMS ni correo en texto plano.</strong>
            Usa cualquiera de estas opciones:
          </p>
          <ul class="text-sm text-sky-700 mt-3 space-y-1.5 list-disc list-outside pl-5">
            <li><strong>Recomendado:</strong> compartir mediante un gestor de contraseñas como 1Password, Bitwarden o LastPass.</li>
            <li><strong>Alternativa rápida y segura:</strong> generar un enlace de un solo uso en <a href="https://onetimesecret.com" target="_blank" rel="noopener" class="underline hover:text-sky-900">onetimesecret.com</a> y enviarme el enlace por WhatsApp.</li>
            <li><strong>Invitación como miembro:</strong> donde sea posible (GoDaddy, Cloudflare, Netlify, Google Workspace, hosting), agregarme como usuario/colaborador con permisos de administrador en lugar de compartir tu contraseña personal.</li>
          </ul>
          <p class="text-sm text-sky-900 mt-3 leading-relaxed">
            Si tienes 2FA activado en alguna cuenta, házmelo saber para coordinar — no necesitamos tus códigos de respaldo.
          </p>
        </div>
      </section>

      <!-- Próximos pasos -->
      <section class="px-5 sm:px-10 py-5 sm:py-6 border-t border-gray-200 mt-2 sm:mt-4">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">Próximos pasos</h3>
        <ol class="text-sm text-gray-600 space-y-2 list-decimal list-outside pl-5">
          <li>Recibimos tus respuestas y validamos accesos.</li>
          <li>Hacemos un inventario completo de dominios, DNS, correos y servicios.</li>
          <li>Te enviamos un plan de migración con ventana de mantenimiento (típicamente fuera de horario para minimizar impacto).</li>
          <li>Ejecutamos la migración, monitoreamos propagación de DNS y validamos que todo siga operando.</li>
          <li>Te entregamos accesos finales, documentación y panel de control en Cloudflare y Netlify.</li>
        </ol>
      </section>

      <!-- Notas -->
      <section class="px-5 sm:px-10 py-5 sm:py-6">
        <h3 class="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Notas</h3>
        <ul class="text-sm text-gray-500 space-y-1.5 list-disc list-outside pl-5">
          <li>Toda credencial compartida será guardada únicamente en nuestro gestor de contraseñas cifrado y eliminada al cierre del proyecto si así lo prefieres.</li>
          <li>Si no tienes claro algún punto, déjalo en blanco — lo resolvemos juntos en una llamada corta.</li>
          <li>Las respuestas pueden enviarse en este mismo formato (texto, capturas o documento), por WhatsApp o correo a alexmartos96@gmail.com.</li>
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
import { defineComponent, h } from 'vue'

definePageMeta({ layout: false })

useHead({
  htmlAttrs: { lang: 'es' },
  bodyAttrs: { class: 'bg-primary' },
  link: [
    { rel: 'canonical', href: 'https://fullstacklabs.org/proposals/bolt-media-kickoff' },
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
  title: 'Cuestionario de inicio — Bolt Media | Fullstack Labs',
  description: 'Información y accesos que necesitamos de Bolt Media para arrancar la migración de dominios desde GoDaddy a Cloudflare y el hosting a Netlify.',
  author: 'Alejandro Martos — Fullstack Labs',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogTitle: 'Cuestionario de inicio — Bolt Media | Fullstack Labs',
  ogDescription: 'Información y accesos que necesitamos para arrancar la migración de dominios, correo y hosting de Bolt Media.',
  ogUrl: 'https://fullstacklabs.org/proposals/bolt-media-kickoff',
  ogImage: 'https://fullstacklabs.org/logo.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Cuestionario de inicio — Bolt Media | Fullstack Labs',
  twitterDescription: 'Información y accesos que necesitamos para arrancar la migración de dominios, correo y hosting de Bolt Media.',
  twitterImage: 'https://fullstacklabs.org/logo.png',
  twitterImageAlt: 'Fullstack Labs'
})

const section1 = [
  {
    label: 'Lista completa de dominios registrados en GoDaddy',
    hint: 'Todos los dominios y subdominios (boltmedia.com.mx y cualquier otro que tengan), incluso los que no estén en uso.',
    required: true
  },
  {
    label: '¿Quién es el dueño / titular de la cuenta de GoDaddy?',
    hint: 'Nombre y correo asociado a la cuenta principal.',
    required: true
  },
  {
    label: 'Acceso a la cuenta de GoDaddy',
    hint: 'Idealmente agrégame como Delegate Access con permisos completos. Si no es posible, comparte usuario y contraseña por un canal seguro (ver sección de seguridad abajo).',
    required: true
  },
  {
    label: '¿La cuenta tiene autenticación de dos factores (2FA) activada?',
    hint: 'Si sí, coordinaremos los códigos durante la ventana de migración. No nos envíes códigos de respaldo por adelantado.',
    required: true
  },
  {
    label: '¿Algún dominio fue registrado hace menos de 60 días o transferido recientemente?',
    hint: 'ICANN bloquea transferencias de dominios durante 60 días después de un registro o transferencia. Es importante saberlo.',
    required: false
  }
]

const section2 = [
  {
    label: '¿Dónde reciben el correo electrónico corporativo actualmente?',
    hint: 'Por ejemplo: Google Workspace, Microsoft 365, Zoho, correo del hosting, otro proveedor.',
    required: true
  },
  {
    label: 'Lista de cuentas de correo activas en cada dominio',
    hint: 'Por ejemplo: ricardo@boltmedia.com.mx, contacto@boltmedia.com.mx, ventas@…, etc.',
    required: true
  },
  {
    label: '¿Usan algún servicio que requiera un registro TXT, SPF, DKIM o DMARC?',
    hint: 'Por ejemplo: Mailchimp, SendGrid, ActiveCampaign, HubSpot, Google Workspace, Microsoft 365, verificaciones de Facebook/Meta, etc.',
    required: true
  },
  {
    label: 'Subdominios activos que debamos preservar',
    hint: 'Por ejemplo: mail.boltmedia.com.mx, crm.boltmedia.com.mx, blog.boltmedia.com.mx, etc.',
    required: false
  }
]

const section3 = [
  {
    label: '¿Tienen Google Workspace activo en alguno de los dominios?',
    hint: 'Si sí, indica qué dominios y qué plan tienen contratado.',
    required: true
  },
  {
    label: 'Acceso de Super Admin a Google Workspace',
    hint: 'Lo ideal es que me agreguen como Super Admin temporal (admin.google.com → Usuarios → asignar rol). Al cierre del proyecto se revoca.',
    required: true
  },
  {
    label: '¿Tienen propiedades verificadas en Google Search Console?',
    hint: 'Si sí, agreguen alexmartos96@gmail.com como propietario o usuario con permisos de administración (search.google.com/search-console → Configuración → Usuarios).',
    required: false
  },
  {
    label: '¿Usan Google Analytics o Google Tag Manager en el sitio?',
    hint: 'Si sí, agreguen alexmartos96@gmail.com con permisos de Editor para no perder histórico durante la migración.',
    required: false
  }
]

const section4 = [
  {
    label: '¿Dónde está hospedado actualmente boltmedia.com.mx (y cualquier otro sitio)?',
    hint: 'Por ejemplo: Hostinger, Bluehost, GoDaddy Hosting, SiteGround, AWS, DigitalOcean, un VPS propio, etc.',
    required: true
  },
  {
    label: 'Acceso al panel de control del hosting',
    hint: 'cPanel, Plesk, dashboard del proveedor, SSH/SFTP — lo que aplique. Igualmente: agregarme como usuario es preferible a compartir contraseña.',
    required: true
  },
  {
    label: '¿En qué tecnología está construido el sitio actual?',
    hint: 'WordPress, HTML estático, React/Next, Webflow, Wix, otro CMS, etc. Si es WordPress, también necesitamos acceso de administrador.',
    required: true
  },
  {
    label: '¿El sitio tiene base de datos, formularios con almacenamiento, o integraciones del lado del servidor?',
    hint: 'Para asegurar que migremos todo lo que importa, no solo los archivos visibles.',
    required: false
  },
  {
    label: '¿Hay redirects, reglas .htaccess o configuraciones especiales que debamos preservar?',
    hint: 'Si las desconocen, no hay problema — las detectamos durante la auditoría.',
    required: false
  }
]

const section5 = [
  {
    label: '¿Ya tienen cuenta en Cloudflare?',
    hint: 'Si sí, agreguen alexmartos96@gmail.com como Admin del workspace. Si no, la creamos nosotros a nombre de Bolt Media y se las entregamos.',
    required: true
  },
  {
    label: '¿Ya tienen cuenta en Netlify?',
    hint: 'Mismo caso: si existe, agréguenme como miembro con rol Owner/Admin del team. Si no, la creamos.',
    required: true
  },
  {
    label: 'Correo de facturación / titular para las cuentas nuevas',
    hint: 'Solo si necesitamos crear cuentas a nombre de Bolt Media.',
    required: false
  }
]

const section6 = [
  {
    label: '¿Hay alguna herramienta o servicio adicional conectado al dominio?',
    hint: 'Por ejemplo: Mailchimp, ActiveCampaign, HubSpot, Calendly, Typeform, integraciones con Meta/Facebook Business, Zapier, etc.',
    required: false
  },
  {
    label: '¿Existe algún certificado SSL personalizado o adquirido por separado que debamos preservar?',
    hint: 'Por defecto generaremos certificados gratuitos vía Cloudflare/Let\'s Encrypt, pero si compraron uno conviene saberlo.',
    required: false
  },
  {
    label: '¿Existe alguna ventana de tiempo en la que NO podamos hacer la migración?',
    hint: 'Por ejemplo: lanzamientos, campañas activas, eventos. Coordinamos la migración fuera de esa ventana.',
    required: false
  }
]

function printPage() {
  if (typeof window !== 'undefined') window.print()
}

const QItem = defineComponent({
  props: { q: { type: Object, required: true } },
  setup(props) {
    return () => h('div', { class: 'border border-gray-200 rounded-lg p-4 scope-card flex items-start gap-3' }, [
      h('span', {
        class: [
          'mt-0.5 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0',
          props.q.required ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-500'
        ]
      }, props.q.required ? 'Requerido' : 'Opcional'),
      h('div', { class: 'min-w-0 flex-1' }, [
        h('p', { class: 'font-semibold text-gray-900 text-sm leading-snug' }, props.q.label),
        props.q.hint ? h('p', { class: 'text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed' }, props.q.hint) : null
      ])
    ])
  }
})
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
