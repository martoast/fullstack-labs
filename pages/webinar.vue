<template>
  <div class="bg-background min-h-screen text-white antialiased">
    <!-- Ambient glow -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute top-1/2 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl"></div>
    </div>

    <!-- Top bar -->
    <div class="relative z-40 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="https://fullstacklabs.org/" class="inline-block">
        <img src="/logo.svg" alt="Fullstack Labs" class="h-8 w-auto transition-opacity duration-200 hover:opacity-80" />
      </a>
      <a
        href="#registro"
        class="hidden rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-background transition-transform duration-200 hover:scale-105 sm:inline-block"
      >
        Apartar mi lugar
      </a>
    </div>

    <!-- ================= HERO ================= -->
    <section class="relative mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-8 lg:pt-16">
      <div class="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            En vivo · Gratis · Todos los miércoles
          </div>

          <h1 class="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Usa la IA en tu negocio.<br />
            <span class="text-blue-300">Sin tecnicismos.</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Cada miércoles, en vivo, te muestro cómo aplicar inteligencia artificial
            a trabajo real de tu negocio — atención a clientes, ventas, cotizaciones,
            contenido y las tareas repetitivas que hoy te quitan horas.
          </p>

          <p class="mt-4 text-lg text-gray-400">
            No importa tu industria ni tu nivel técnico. Si sabes usar WhatsApp, puedes seguir esta sesión.
          </p>

          <!-- Next session -->
          <div class="mt-9 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p class="text-xs font-semibold uppercase tracking-widest text-blue-300">Próxima sesión</p>
            <!-- first-letter, not `capitalize`: Spanish dates are lowercase after
                 the weekday ("miércoles, 12 de agosto"), and `capitalize` would
                 render "12 De Agosto". -->
            <p class="mt-2 text-2xl font-bold text-white first-letter:uppercase">{{ session.dateLabel }}</p>
            <p class="mt-1 text-lg text-gray-300">
              {{ session.timeLabel }} <span class="text-gray-400">— hora de Tijuana / San Diego</span>
            </p>
            <p v-if="localTimeLabel" class="mt-1 text-sm text-gray-400">
              En tu zona horaria: <span class="text-gray-200">{{ localTimeLabel }}</span>
            </p>

            <div v-if="countdown" class="mt-5 flex gap-3">
              <div v-for="unit in countdown" :key="unit.label" class="flex-1 rounded-lg bg-black/30 px-2 py-3 text-center">
                <div class="text-2xl font-bold tabular-nums text-white">{{ unit.value }}</div>
                <div class="text-[11px] uppercase tracking-wider text-gray-400">{{ unit.label }}</div>
              </div>
            </div>
            <p v-else-if="isLive" class="mt-5 rounded-lg bg-accent/15 px-4 py-3 text-center font-semibold text-accent">
              La sesión está en curso — entra ahora
            </p>
          </div>

          <!-- CTAs -->
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#registro"
              class="rounded-xl bg-white px-8 py-4 text-center text-lg font-semibold text-background shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-white/20"
            >
              Apartar mi lugar — gratis
            </a>
            <button
              type="button"
              @click="openCalendarMenu = !openCalendarMenu"
              class="rounded-xl border border-white/20 px-8 py-4 text-center text-lg font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Agregar a mi calendario
            </button>
          </div>

          <!-- Calendar options -->
          <div v-if="openCalendarMenu" class="mt-4 flex flex-wrap gap-3">
            <a
              :href="googleUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              Google Calendar
            </a>
            <a
              href="/api/webinar/invite"
              class="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              Apple / Outlook (.ics)
            </a>
          </div>

          <p class="mt-5 text-sm text-gray-400">
            Sin costo · 45 minutos + preguntas en vivo · Se repite cada semana
          </p>
        </div>

        <!-- Hero side card -->
        <div class="relative">
          <div class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p class="text-sm font-semibold uppercase tracking-widest text-blue-300">En esta sesión</p>
            <ul class="mt-6 space-y-4">
              <li v-for="point in heroPoints" :key="point" class="flex gap-3 text-gray-200">
                <CheckCircleIcon class="mt-0.5 h-6 w-6 flex-none text-accent" />
                <span>{{ point }}</span>
              </li>
            </ul>
            <div class="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <img src="/img/alex-1.webp" alt="Alejandro Martos" class="h-14 w-14 flex-none rounded-full object-cover object-top" />
              <div>
                <p class="font-semibold text-white">Alejandro Martos</p>
                <p class="text-sm text-gray-400">Desarrollador full-stack · Fullstack Labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= QUÉ VAS A APRENDER ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">Qué vas a aprender</h2>
        <p class="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
          Sales sabiendo qué automatizar el lunes por la mañana.
        </p>

        <div class="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in learnings" :key="item.title">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <component :is="item.icon" class="h-6 w-6" />
            </div>
            <h3 class="mt-5 text-lg font-semibold text-white">{{ item.title }}</h3>
            <p class="mt-2 leading-relaxed text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CASOS REALES ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">Casos reales</h2>
        <p class="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
          Negocios que ya están operando con IA y automatización.
        </p>
        <p class="mt-4 max-w-2xl text-lg text-gray-300">
          No son ejemplos de internet. Son sistemas que construí, que están en producción hoy,
          y de los que vas a ver capturas reales durante la sesión.
        </p>

        <div class="mt-14 space-y-8">
          <article
            v-for="study in caseStudies"
            :key="study.client"
            class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors duration-200 hover:border-white/20"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 class="text-2xl font-bold text-white">{{ study.client }}</h3>
              <span class="text-sm text-gray-400">{{ study.industry }}</span>
            </div>

            <div class="mt-6 grid gap-8 lg:grid-cols-3">
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-gray-500">El problema</p>
                <p class="mt-2 text-gray-300">{{ study.problem }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-gray-500">Lo que construimos</p>
                <p class="mt-2 text-gray-300">{{ study.solution }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-gray-500">El resultado</p>
                <p class="mt-2 text-gray-300">{{ study.result }}</p>
              </div>
            </div>

            <!-- Renders only when a real quote exists. Never ship a placeholder
                 testimonial attributed to a real company. -->
            <blockquote v-if="study.quote" class="mt-8 border-l-2 border-accent/60 pl-6">
              <p class="text-lg italic leading-relaxed text-gray-200">"{{ study.quote }}"</p>
              <footer class="mt-3 text-sm text-gray-400">
                — {{ study.quoteAuthor }}<span v-if="study.quoteRole">, {{ study.quoteRole }}</span>
              </footer>
            </blockquote>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= PARA QUIÉN ES ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-widest text-accent">Es para ti si...</h2>
            <ul class="mt-8 space-y-4">
              <li v-for="item in forYou" :key="item" class="flex gap-3 text-gray-200">
                <CheckCircleIcon class="mt-0.5 h-6 w-6 flex-none text-accent" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-widest text-gray-500">No es para ti si...</h2>
            <ul class="mt-8 space-y-4">
              <li v-for="item in notForYou" :key="item" class="flex gap-3 text-gray-400">
                <XMarkIcon class="mt-0.5 h-6 w-6 flex-none text-gray-600" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= AGENDA ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">Cómo es la sesión</h2>
        <p class="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">45 minutos, sin relleno.</p>

        <div class="mt-12 space-y-px overflow-hidden rounded-2xl border border-white/10">
          <div
            v-for="block in agenda"
            :key="block.label"
            class="flex flex-col gap-2 bg-white/5 p-6 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span class="w-24 flex-none font-mono text-sm text-blue-300">{{ block.time }}</span>
            <div>
              <p class="font-semibold text-white">{{ block.label }}</p>
              <p class="mt-1 text-gray-300">{{ block.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= REGISTRO ================= -->
    <section id="registro" class="relative border-t border-white/10 py-20 scroll-mt-8">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <!-- Success state -->
        <div v-if="registered" class="rounded-3xl border border-accent/30 bg-accent/10 p-8 text-center sm:p-12">
          <CheckCircleIcon class="mx-auto h-16 w-16 text-accent" />
          <h2 class="mt-6 text-3xl font-bold text-white">¡Listo! Tu lugar está apartado.</h2>
          <p class="mt-4 text-lg text-gray-200">
            Te enviamos la confirmación a <strong class="text-white">{{ form.email }}</strong>.
          </p>
          <p class="mt-2 text-gray-300">
            <span class="inline-block first-letter:uppercase">{{ session.dateLabel }}</span>, {{ session.timeLabel }} — hora de Tijuana.
          </p>

          <p class="mt-8 text-sm font-semibold uppercase tracking-wider text-accent">
            Un último paso — agrégalo a tu calendario
          </p>
          <p class="mt-2 text-gray-300">Es lo que hace la diferencia entre registrarse y asistir.</p>

          <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              :href="googleUrl"
              target="_blank"
              rel="noopener"
              class="rounded-xl bg-white px-7 py-4 font-semibold text-background transition-transform duration-200 hover:scale-105"
            >
              Agregar a Google Calendar
            </a>
            <a
              href="/api/webinar/invite"
              class="rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Apple / Outlook (.ics)
            </a>
          </div>

          <div class="mt-10 border-t border-white/15 pt-8">
            <p class="text-gray-300">El día del webinar, entra por aquí:</p>
            <a
              :href="meetUrl"
              target="_blank"
              rel="noopener"
              class="mt-3 inline-block break-all font-mono text-blue-300 underline-offset-4 hover:text-white hover:underline"
            >
              {{ meetUrl }}
            </a>
          </div>
        </div>

        <!-- Form -->
        <div v-else>
          <h2 class="text-center text-3xl font-bold sm:text-4xl">Aparta tu lugar</h2>
          <p class="mx-auto mt-4 max-w-xl text-center text-lg text-gray-300">
            Es gratis y toma 15 segundos. Te mandamos el enlace y el recordatorio para que no se te pase.
          </p>

          <form class="mt-10 space-y-5" @submit.prevent="submit">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300">Nombre *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                autocomplete="name"
                placeholder="Tu nombre"
                class="mt-2 w-full rounded-xl border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 focus:border-blue-300 focus:ring-blue-300"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Correo *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                inputmode="email"
                placeholder="tu@correo.com"
                class="mt-2 w-full rounded-xl border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 focus:border-blue-300 focus:ring-blue-300"
              />
              <p class="mt-2 text-xs text-gray-500">Aquí te llega el enlace para entrar. Nada de spam.</p>
            </div>

            <div>
              <label for="business" class="block text-sm font-medium text-gray-300">
                Tu negocio <span class="text-gray-500">(opcional)</span>
              </label>
              <input
                id="business"
                v-model="form.business"
                type="text"
                autocomplete="organization"
                placeholder="A qué se dedica"
                class="mt-2 w-full rounded-xl border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 focus:border-blue-300 focus:ring-blue-300"
              />
              <p class="mt-2 text-xs text-gray-500">Me ayuda a preparar ejemplos que te sirvan.</p>
            </div>

            <!-- Honeypot: hidden from people, irresistible to bots -->
            <div class="absolute -left-[9999px]" aria-hidden="true">
              <label for="website">No llenar</label>
              <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
            </div>

            <p v-if="error" class="rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-200">{{ error }}</p>

            <button
              type="submit"
              :disabled="loading"
              class="w-full rounded-xl bg-white px-8 py-4 text-lg font-semibold text-background shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {{ loading ? 'Registrando...' : 'Apartar mi lugar — gratis' }}
            </button>

            <p class="text-center text-sm text-gray-500">
              Gratis, sin tarjeta. Usamos tu correo solo para el webinar.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- ================= INSTRUCTOR ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div class="mx-auto w-56 lg:mx-0 lg:w-full">
            <img
              src="/img/alex-1.webp"
              alt="Alejandro Martos"
              class="w-full rounded-2xl object-cover ring-1 ring-white/15"
            />
          </div>
          <div class="lg:col-span-2">
            <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">Quién lo imparte</h2>
            <p class="mt-4 text-3xl font-bold">Alejandro Martos</p>
            <p class="mt-4 text-lg leading-relaxed text-gray-300">
              Desarrollador full-stack. Diseño, construyo y opero plataformas para negocios en
              Tijuana, San Diego y Ciudad de México — desde sitios y CRMs a la medida hasta
              agentes de IA que atienden clientes por WhatsApp.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-gray-300">
              No vengo a hablar de teoría: todo lo que muestro son sistemas que corren en
              producción y que mantengo yo mismo.
            </p>
            <a href="https://fullstacklabs.org/me" class="mt-6 inline-flex items-center gap-2 font-medium text-blue-300 transition-colors hover:text-white">
              Ver mi trabajo
              <ArrowUpRightIcon class="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FAQ ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-blue-300">Preguntas frecuentes</h2>
        <dl class="mt-10 space-y-8">
          <div v-for="item in faq" :key="item.q">
            <dt class="text-lg font-semibold text-white">{{ item.q }}</dt>
            <dd class="mt-2 leading-relaxed text-gray-300">{{ item.a }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ================= CIERRE ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 class="text-3xl font-bold sm:text-4xl">La IA no va a esperar a que tengas tiempo.</h2>
        <p class="mt-5 text-lg text-gray-300">
          Son 45 minutos a la semana. Gratis. Y sales con algo que puedes aplicar el mismo día.
        </p>
        <a
          href="#registro"
          class="mt-9 inline-block rounded-xl bg-white px-10 py-4 text-lg font-semibold text-background shadow-xl transition-transform duration-300 hover:scale-105"
        >
          Apartar mi lugar — gratis
        </a>
        <p class="mt-5 text-sm text-gray-400">
          <span class="inline-block first-letter:uppercase">{{ session.dateLabel }}</span> · {{ session.timeLabel }} hora de Tijuana
        </p>
      </div>

      <footer class="mx-auto mt-20 max-w-6xl border-t border-white/10 px-6 pt-10 text-center lg:px-8">
        <p class="text-xs text-gray-500">&copy; {{ year }} Fullstack Labs · fullstacklabs.org</p>
      </footer>
    </section>

    <!-- Sticky mobile CTA -->
    <div
      v-if="!registered"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 p-3 backdrop-blur sm:hidden"
    >
      <a
        href="#registro"
        class="block rounded-xl bg-white px-6 py-3.5 text-center font-semibold text-background"
      >
        Apartar mi lugar — gratis
      </a>
    </div>
    <div v-if="!registered" class="h-20 sm:hidden" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import {
  CheckCircleIcon,
  XMarkIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  DocumentTextIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

const config = useRuntimeConfig()
const meetUrl = config.public.webinarMeetUrl
const googleUrl = config.public.webinarGoogleUrl
const year = new Date().getFullYear()

// Computed on the server and serialised into the payload, so the client never
// renders a different date than the server did (hydration mismatch) — and so
// a page left open overnight still shows the right session after a refresh.
const { data: session } = await useFetch('/api/webinar/next', { key: 'webinar-next' })

const openCalendarMenu = ref(false)
const registered = ref(false)
const loading = ref(false)
const error = ref('')

const form = reactive({ name: '', email: '', business: '', website: '' })

const submit = async () => {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/webinar/register', { method: 'POST', body: { ...form } })
    registered.value = true
    if (import.meta.client) window.scrollTo({ top: document.getElementById('registro').offsetTop - 40, behavior: 'smooth' })
  } catch (e) {
    error.value =
      e?.data?.statusMessage ||
      e?.statusMessage ||
      'No pudimos completar el registro. Intenta de nuevo o escríbenos a alexmartos96@gmail.com.'
  } finally {
    loading.value = false
  }
}

/* ---- Countdown + local time: client-only, to avoid a hydration mismatch ---- */
const now = ref(null)
let timer
onMounted(() => {
  now.value = Date.now()
  timer = setInterval(() => (now.value = Date.now()), 1000)
})
onUnmounted(() => clearInterval(timer))

const isLive = computed(() => {
  if (!now.value || !session.value) return false
  const start = new Date(session.value.startIso).getTime()
  const end = new Date(session.value.endIso).getTime()
  return now.value >= start && now.value < end
})

const countdown = computed(() => {
  if (!now.value || !session.value) return null
  const diff = new Date(session.value.startIso).getTime() - now.value
  if (diff <= 0) return null
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return [
    { label: 'días', value: days },
    { label: 'horas', value: hours },
    { label: 'min', value: minutes },
    { label: 'seg', value: seconds }
  ]
})

// Only shown when the visitor is NOT already in the webinar's timezone —
// telling a Tijuana local "in your timezone: 10:00 AM" is noise.
const localTimeLabel = ref('')
onMounted(() => {
  if (!session.value) return
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  if (tz === 'America/Tijuana' || tz === 'America/Los_Angeles') return
  localTimeLabel.value = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  }).format(new Date(session.value.startIso))
})

/* ---- Content ---- */

const heroPoints = [
  'Casos reales de negocios que ya usan IA — con capturas, no diapositivas',
  'Qué herramienta usar para qué, y cuáles no valen tu dinero',
  'Una tarea de tu negocio automatizada, paso a paso',
  'Preguntas en vivo: trae tu caso y lo vemos'
]

const learnings = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Atender clientes sin estar pegado al teléfono',
    description:
      'Cómo un agente de IA responde preguntas, cotiza y agenda por WhatsApp a cualquier hora — y en qué momento conviene que entre una persona.'
  },
  {
    icon: BoltIcon,
    title: 'Automatizar lo repetitivo',
    description:
      'Cotizaciones, seguimientos, reportes, cobranza. Las tareas que se hacen igual cada semana son las primeras que deberías quitarte de encima.'
  },
  {
    icon: DocumentTextIcon,
    title: 'Contenido y propuestas en minutos',
    description:
      'Cómo producir publicaciones, correos y propuestas que suenen a tu negocio y no a robot. El truco está en cómo le das contexto.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Qué herramientas realmente sirven',
    description:
      'Un mapa claro de lo que hay hoy, qué hace cada una, cuáles son gratis y en cuáles vale la pena pagar. Sin patrocinios.'
  },
  {
    icon: UserGroupIcon,
    title: 'Cómo empezar sin equipo técnico',
    description:
      'Por dónde arranca un negocio de 3 personas, qué se puede hacer sin programar y cuándo sí necesitas ayuda de un desarrollador.'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Los errores que cuestan caro',
    description:
      'Dónde la IA se equivoca con seguridad, qué información nunca debes darle, y cómo revisar su trabajo antes de que llegue a un cliente.'
  }
]

/**
 * Real engagements. Descriptions are factual — no invented metrics.
 * `quote` is intentionally empty until the client provides one in writing;
 * the template hides the blockquote entirely while it is blank.
 */
const caseStudies = [
  {
    client: 'Bolt Media',
    industry: 'Agencia de marketing · Tijuana, CDMX y San Diego',
    problem:
      'Los prospectos llegaban por el sitio y por redes a un correo compartido. Sin un lugar único donde vivieran, el seguimiento dependía de que alguien se acordara.',
    solution:
      'Sitio bilingüe nuevo y un CRM a la medida. Los formularios entran directo como prospectos, y el CRM se puede consultar y actualizar desde un asistente de IA, sin abrir la plataforma.',
    result:
      'Cada prospecto queda registrado y asignado automáticamente. El equipo consulta el estado de una cuenta preguntando, en lugar de buscar en hojas de cálculo.',
    quote: '',
    quoteAuthor: '',
    quoteRole: ''
  },
  {
    client: 'Campestre Media',
    industry: 'Medios y publicidad',
    problem:
      'La venta de espacios publicitarios se llevaba en hojas de cálculo: contratos por edición, entregables por cliente y cobranza manual cada quincena.',
    solution:
      'Catálogo de paquetes, contratos con ciclos de edición automáticos y cobranza conectada a Stripe. El sistema genera cada edición, factura sola y muestra los entregables pendientes en un tablero.',
    result:
      'La facturación quincenal dejó de ser trabajo manual y el estado de cada contrato está siempre al día, sin que nadie lo actualice a mano.',
    quote: '',
    quoteAuthor: '',
    quoteRole: ''
  },
  {
    client: 'WhatsApp Suite',
    industry: 'Producto propio · SaaS',
    problem:
      'Los negocios pierden prospectos por no contestar a tiempo — de noche, en fin de semana, o cuando llegan diez mensajes a la vez.',
    solution:
      'Una plataforma donde el negocio conecta su número, entrena a la IA con su propia información y deja que responda 24/7 — bilingüe y con notas de voz.',
    result:
      'Los prospectos reciben respuesta al instante a cualquier hora, y la conversación queda lista para que una persona la retome donde la dejó la IA.',
    quote: '',
    quoteAuthor: '',
    quoteRole: ''
  }
]

const forYou = [
  'Tienes un negocio y sientes que la IA ya te está dejando atrás',
  'Tu equipo pierde horas en tareas repetitivas cada semana',
  'Probaste ChatGPT un par de veces y no supiste qué más hacer con él',
  'Vendes o atiendes clientes por WhatsApp',
  'No eres técnico y no piensas serlo'
]

const notForYou = [
  'Buscas un curso de programación o de machine learning',
  'Quieres teoría académica sobre cómo funcionan los modelos',
  'Esperas una fórmula para ganar dinero sin trabajar'
]

const agenda = [
  { time: '00:00', label: 'El panorama en 5 minutos', description: 'Qué cambió, qué es ruido y qué sí importa para un negocio como el tuyo.' },
  { time: '05:00', label: 'Casos reales, en pantalla', description: 'Sistemas en producción: qué hacen, cómo se ven por dentro y qué costó construirlos.' },
  { time: '20:00', label: 'Manos a la obra', description: 'Automatizamos una tarea en vivo, de principio a fin, para que la repliques igual.' },
  { time: '35:00', label: 'Preguntas en vivo', description: 'Traes tu caso, lo vemos juntos. Esta parte se alarga si hay preguntas.' }
]

const faq = [
  {
    q: '¿De verdad es gratis?',
    a: 'Sí. No se pide tarjeta ni hay una versión de pago al final. Doy el webinar porque parte de la gente que asiste termina buscándome para construir algo — pero eso pasa solo si la sesión te sirvió.'
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'No. Todo se explica en términos de negocio. Si sabes usar WhatsApp y un navegador, puedes seguir la sesión completa.'
  },
  {
    q: '¿Es lo mismo cada semana?',
    a: 'La base se repite para quien llega por primera vez, pero cada sesión trae casos y herramientas distintas — y las preguntas nunca son las mismas. Puedes venir todas las semanas.'
  },
  {
    q: '¿Se graba?',
    a: 'La sesión es en vivo y no se publica la grabación. La parte de preguntas es abierta y prefiero que la gente hable con confianza de su negocio.'
  },
  {
    q: '¿Es una junta de ventas disfrazada?',
    a: 'No. Son 45 minutos de contenido y preguntas. Si al final quieres platicar de un proyecto, me escribes — pero no hay ninguna presentación de precios en la sesión.'
  },
  {
    q: '¿Puedo invitar a mi equipo?',
    a: 'Por favor. Comparte el enlace de esta página; entre más gente de tu equipo lo vea, más fácil es que algo cambie el lunes.'
  }
]

/* ---- SEO / share ---- */
const shareTitle = 'Webinar gratis: IA para tu Negocio | Todos los miércoles'
const shareDescription =
  'Aprende a usar inteligencia artificial en tu negocio, sin importar tu industria ni tu nivel técnico. En vivo, gratis, todos los miércoles. 45 min + preguntas.'
const shareImage = 'https://fullstacklabs.org/img/og-webinar-1.jpg'

useHead({
  htmlAttrs: { lang: 'es' },
  link: [{ rel: 'canonical', href: 'https://fullstacklabs.org/webinar' }],
  // Event structured data — lets Google show this as an event with its date
  // rather than a plain blue link. Dates come from the same server-computed
  // session as the page, so they can never disagree.
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'IA para tu Negocio — Webinar Gratuito Semanal',
        description: shareDescription,
        startDate: session.value?.startIso,
        endDate: session.value?.endIso,
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        inLanguage: 'es-MX',
        image: [shareImage],
        location: {
          '@type': 'VirtualLocation',
          url: 'https://fullstacklabs.org/webinar'
        },
        organizer: {
          '@type': 'Organization',
          name: 'Fullstack Labs',
          url: 'https://fullstacklabs.org'
        },
        performer: {
          '@type': 'Person',
          name: 'Alejandro Martos'
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'MXN',
          availability: 'https://schema.org/InStock',
          url: 'https://fullstacklabs.org/webinar'
        }
      })
    }
  ]
})

useSeoMeta({
  title: shareTitle,
  author: 'Alejandro Martos',
  charset: 'utf-8',
  description: shareDescription,
  robots: 'index, follow',
  ogTitle: shareTitle,
  ogDescription: shareDescription,
  ogImage: shareImage,
  ogImageSecureUrl: shareImage,
  ogImageType: 'image/jpeg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Webinar gratuito: IA para tu Negocio, todos los miércoles',
  ogUrl: 'https://fullstacklabs.org/webinar',
  ogType: 'website',
  ogSiteName: 'Fullstack Labs',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image',
  twitterTitle: shareTitle,
  twitterDescription: shareDescription,
  twitterImage: shareImage
})
</script>
