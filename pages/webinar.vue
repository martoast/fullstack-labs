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
    <section class="relative mx-auto max-w-4xl px-6 pb-24 pt-10 text-center lg:px-8 lg:pt-20">
      <div class="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        Gratis · En vivo · Cada miércoles
      </div>

      <h1 class="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
        Te enseño a usar la IA<br />
        <span class="text-blue-300">en tu negocio.</span>
      </h1>

      <p class="mx-auto mt-7 max-w-xl text-xl text-gray-300">
        En vivo y gratis, cada miércoles. No necesitas saber nada de tecnología.
      </p>

      <!-- Next session + countdown -->
      <div class="mx-auto mt-10 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p class="text-2xl font-bold first-letter:uppercase">{{ session.dateLabel }}</p>
        <p class="mt-1 text-gray-400">{{ session.timeLabel }} · hora de Tijuana</p>
        <p v-if="localTimeLabel" class="mt-1 text-sm text-gray-500">{{ localTimeLabel }} en tu zona</p>

        <div v-if="countdown" class="mt-5 flex gap-2">
          <div v-for="unit in countdown" :key="unit.label" class="flex-1 rounded-lg bg-black/30 px-2 py-3">
            <div class="text-2xl font-bold tabular-nums">{{ unit.value }}</div>
            <div class="text-[11px] uppercase tracking-wider text-gray-500">{{ unit.label }}</div>
          </div>
        </div>
        <p v-else-if="isLive" class="mt-5 rounded-lg bg-accent/15 px-4 py-3 font-semibold text-accent">
          En curso — entra ahora
        </p>
      </div>

      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href="#registro"
          class="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-background shadow-xl transition-transform duration-300 hover:scale-[1.03]"
        >
          Apartar mi lugar
        </a>
        <button
          type="button"
          @click="openCalendarMenu = !openCalendarMenu"
          class="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold transition-colors duration-200 hover:bg-white/10"
        >
          Agregar al calendario
        </button>
      </div>

      <div v-if="openCalendarMenu" class="mt-4 flex flex-wrap justify-center gap-3">
        <a
          :href="googleUrl"
          target="_blank"
          rel="noopener"
          class="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
        >
          Google Calendar
        </a>
        <a
          href="/api/webinar/invite"
          class="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
        >
          Apple / Outlook
        </a>
      </div>
    </section>

    <!-- ================= PARA QUIÉN ES ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 class="text-3xl font-bold sm:text-4xl">Para quién es</h2>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="who in audience"
            :key="who.title"
            class="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <component :is="who.icon" class="h-7 w-7 text-accent" />
            <h3 class="mt-4 font-semibold text-white">{{ who.title }}</h3>
            <p class="mt-1 text-sm text-gray-400">{{ who.note }}</p>
          </div>
        </div>
        <p class="mt-8 text-gray-400">
          Si sabes usar WhatsApp, puedes seguir la sesión completa.
        </p>
      </div>
    </section>

    <!-- ================= INSTRUCTOR ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-300">Quién lo imparte</p>

        <div class="mt-8 flex flex-col gap-8 sm:flex-row sm:gap-10">
          <img
            src="/img/alex-1.webp"
            alt="Alejandro Martos"
            class="h-40 w-40 flex-none self-start rounded-2xl object-cover object-top ring-1 ring-white/15"
          />

          <div>
            <p class="text-3xl font-bold">Alejandro Martos</p>
            <p class="mt-1 text-gray-400">Fundador de Fullstack Labs</p>

            <p class="mt-5 text-gray-300">
              He diseñado e implementado herramientas para bienes raíces, finanzas, criptomonedas,
              marketing y logística — sistemas empresariales, automatizaciones, agentes de IA e
              infraestructura hecha a la medida de cada negocio.
            </p>

            <!-- Industries taken from the Campestre Media profile — verifiable,
                 not invented. -->
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="industry in industries"
                :key="industry"
                class="rounded-md bg-white/5 px-2.5 py-1 text-sm text-gray-300 ring-1 ring-inset ring-white/10"
              >{{ industry }}</span>
            </div>

            <blockquote class="mt-6 border-l-2 border-blue-300/50 pl-5 text-lg italic text-gray-200">
              La tecnología debe estar al servicio de las empresas y adaptarse a sus objetivos.
            </blockquote>

            <!-- Presented as the article it is, with its real headline —
                 reads as a feature rather than a bare link. -->
            <a
              href="https://campestre.media/alex-martos-tecnologia-e-inteligencia-artificial-para-transformar-la-manera-de-hacer-negocios/"
              target="_blank"
              rel="noopener"
              class="group mt-7 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors duration-200 hover:border-white/25 hover:bg-white/10"
            >
              <div>
                <p class="text-xs font-semibold uppercase tracking-widest text-blue-300">Artículo</p>
                <p class="mt-1.5 font-medium leading-snug text-white">
                  Tecnología e inteligencia artificial para transformar la manera de hacer negocios
                </p>
                <p class="mt-1.5 text-sm text-gray-500">campestre.media</p>
              </div>
              <ArrowUpRightIcon class="ml-auto h-5 w-5 flex-none text-gray-500 transition-colors duration-200 group-hover:text-white" />
            </a>

            <a href="https://fullstacklabs.org/me" class="mt-6 inline-flex items-center gap-1.5 font-medium text-blue-300 hover:text-white">
              Ver mi trabajo
              <ArrowUpRightIcon class="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PRUEBA: GITHUB ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-300">La prueba</p>
        <h2 class="mt-4 text-3xl font-bold sm:text-5xl">
          Esto no es teoría.<br class="hidden sm:block" />
          <span class="text-gray-400">Son mis resultados reales.</span>
        </h2>
        <p class="mt-5 max-w-xl text-lg text-gray-400">
          Cada cuadro es un día de trabajo real en GitHub. Mismo desarrollador, antes y después de la IA.
        </p>

        <div class="mt-12 space-y-5">
          <div
            v-for="row in contributionYears"
            :key="row.year"
            class="rounded-2xl border p-5 sm:p-7"
            :class="row.highlight ? 'border-accent/30 bg-accent/5' : 'border-white/10 bg-white/5'"
          >
            <div class="mb-5 flex items-baseline justify-between gap-4">
              <div>
                <span class="text-2xl font-bold" :class="row.highlight ? 'text-accent' : 'text-white'">
                  {{ row.year }}
                </span>
                <span class="ml-2 text-sm text-gray-500">{{ row.note }}</span>
              </div>
              <div class="text-right">
                <span class="text-2xl font-bold tabular-nums sm:text-3xl" :class="row.highlight ? 'text-accent' : 'text-white'">
                  {{ row.total.toLocaleString('en-US') }}
                </span>
                <span class="ml-1 text-sm text-gray-500">contribuciones</span>
              </div>
            </div>

            <!-- One cell per real day, shaded by GitHub's own quartile level.
                 Both years are laid out on a full 53-week track (set explicitly —
                 implicit columns collapse the track and render the year as a
                 stub), so the cells stay the same size in both panels and the
                 current year visibly stops where today is. -->
            <div class="gh-grid" :class="{ in: gridsVisible }">
              <div
                v-for="(level, i) in row.cells"
                :key="i"
                class="gh-cell"
                :style="{ background: GH_COLORS[level], transitionDelay: Math.floor(i / 7) * 9 + 'ms' }"
              ></div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-6xl font-bold leading-none text-blue-300 sm:text-8xl">{{ perDayMultiplier }}×</p>
          <p class="mx-auto mt-4 max-w-md text-lg text-gray-300">
            más código por día que antes de usar IA.
          </p>
          <p class="mx-auto mt-2 max-w-md text-sm text-gray-500">
            Verificable en
            <a href="https://github.com/martoast" target="_blank" rel="noopener" class="text-gray-400 underline underline-offset-4 hover:text-white">
              github.com/martoast
            </a>
          </p>
        </div>
      </div>
    </section>

    <!-- ================= CASO: NEGOCIO PROPIO (sin nombrar la marca) ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-accent">Caso destacado</p>
        <h2 class="mt-4 text-3xl font-bold sm:text-5xl">
          Un negocio operado con IA<br class="hidden sm:block" />
          <span class="text-gray-400">desde el primer día.</span>
        </h2>
        <p class="mt-5 max-w-xl text-lg text-gray-400">
          Un año de operación — estos son los números.
        </p>

        <!-- Separate bordered cards rather than a gap-px grid: with a count
             that doesn't fill the last row, the gap trick leaves a lit empty
             cell. This degrades cleanly at any number of stats. -->
        <dl class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <div
            v-for="stat in businessStats"
            :key="stat.label"
            class="rounded-2xl border border-white/10 bg-white/5 px-4 py-7 text-center"
          >
            <dt class="text-3xl font-bold tabular-nums text-white">{{ stat.value }}</dt>
            <dd class="mt-2 text-sm text-gray-400">{{ stat.label }}</dd>
          </div>
        </dl>

        <p class="mt-6 text-sm text-gray-500">Primer año de operación</p>
      </div>
    </section>

    <!-- ================= FULLSTACK SUITE ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div class="rounded-3xl border border-accent/25 bg-accent/5 p-8 sm:p-12">
          <p class="text-sm font-semibold uppercase tracking-widest text-accent">Incluido al asistir</p>
          <h2 class="mt-4 text-3xl font-bold sm:text-5xl">
            No solo aprendes.<br class="hidden sm:block" />
            <span class="text-accent">Sales con qué aplicarlo.</span>
          </h2>
          <p class="mt-5 max-w-2xl text-lg text-gray-300">
            Te llevas lo que viste listo para usar, más acceso a
            <strong class="text-white">Fullstack Suite</strong>: la oficina virtual donde contratas
            agentes de IA que trabajan por ti.
          </p>

          <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="agent in suiteAgents"
              :key="agent.role"
              class="flex items-start gap-3 rounded-xl border border-white/10 bg-background/60 p-4"
            >
              <CheckCircleIcon class="mt-0.5 h-5 w-5 flex-none text-accent" />
              <div>
                <p class="font-semibold text-white">{{ agent.role }}</p>
                <p class="mt-0.5 text-sm text-gray-400">{{ agent.does }}</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <a
              href="https://suite.fullstacklabs.org/"
              target="_blank"
              rel="noopener"
              class="inline-block rounded-xl bg-white px-7 py-4 font-semibold text-background transition-transform duration-200 hover:scale-105"
            >
              Conocer Fullstack Suite
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= REGISTRO ================= -->
    <section id="registro" class="relative scroll-mt-8 border-t border-white/10 py-20">
      <div class="mx-auto max-w-2xl px-6 lg:px-8">
        <!-- Success -->
        <div v-if="registered" ref="successCard" class="success-card rounded-3xl border border-accent/30 bg-accent/10 p-8 text-center sm:p-12">
          <!-- Checkmark draws itself rather than popping in -->
          <svg viewBox="0 0 52 52" class="mx-auto h-20 w-20 text-accent" aria-hidden="true">
            <circle class="check-circle" cx="26" cy="26" r="24" fill="none" stroke="currentColor" stroke-width="2" />
            <path
              class="check-mark"
              fill="none"
              stroke="currentColor"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 27l8 8 16-16"
            />
          </svg>

          <h2 class="reveal reveal-1 mt-6 text-3xl font-bold">¡Listo! Tu lugar está apartado.</h2>
          <p class="reveal reveal-2 mt-3 text-gray-300">Te mandamos la confirmación a {{ form.email }}.</p>

          <p class="reveal reveal-3 mt-8 font-semibold text-accent">Agrégalo a tu calendario</p>
          <p class="reveal reveal-3 mt-1 text-sm text-gray-400">Es la diferencia entre registrarse y asistir.</p>

          <div class="reveal reveal-4 mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              :href="googleUrl"
              target="_blank"
              rel="noopener"
              class="rounded-xl bg-white px-7 py-4 font-semibold text-background transition-transform duration-200 hover:scale-105"
            >
              Google Calendar
            </a>
            <a
              href="/api/webinar/invite"
              class="rounded-xl border border-white/25 px-7 py-4 font-semibold transition-colors duration-200 hover:bg-white/10"
            >
              Apple / Outlook
            </a>
          </div>

          <a
            :href="meetUrl"
            target="_blank"
            rel="noopener"
            class="reveal reveal-5 mt-8 inline-block break-all border-t border-white/15 pt-6 font-mono text-sm text-blue-300 hover:text-white"
          >
            {{ meetUrl }}
          </a>

          <!-- Optional details, asked only AFTER the signup is banked, so they
               cannot cost a registration. Failure here is swallowed on the
               server — someone who is already registered must never be shown
               an error. -->
          <div class="reveal reveal-6 mt-10 border-t border-white/15 pt-8 text-left">
            <p v-if="profileSaved" class="text-center text-accent">
              ¡Gracias! Con eso preparo ejemplos que te sirvan.
            </p>
            <form v-else class="space-y-3" @submit.prevent="submitProfile">
              <p class="text-center font-medium text-white">Una última cosa (opcional)</p>
              <p class="pb-1 text-center text-sm text-gray-400">
                Cuéntame quién eres y preparo ejemplos para tu caso.
              </p>
              <div class="flex flex-col gap-3 sm:flex-row">
                <input
                  v-model="profile.name"
                  type="text"
                  autocomplete="name"
                  placeholder="Tu nombre"
                  aria-label="Tu nombre"
                  class="w-full rounded-xl border-white/15 bg-black/20 px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:ring-accent"
                />
                <input
                  v-model="profile.business"
                  type="text"
                  autocomplete="organization"
                  placeholder="Tu negocio"
                  aria-label="Tu negocio"
                  class="w-full rounded-xl border-white/15 bg-black/20 px-4 py-3 text-white placeholder-gray-500 focus:border-accent focus:ring-accent"
                />
              </div>
              <div class="absolute -left-[9999px]" aria-hidden="true">
                <label for="pwebsite">No llenar</label>
                <input id="pwebsite" v-model="profile.website" type="text" tabindex="-1" autocomplete="off" />
              </div>
              <button
                type="submit"
                :disabled="profileLoading || (!profile.name && !profile.business)"
                class="w-full rounded-xl border border-white/25 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {{ profileLoading ? 'Enviando...' : 'Enviar' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Form -->
        <div v-else>
          <h2 class="text-center text-3xl font-bold sm:text-4xl">Aparta tu lugar</h2>
          <p class="mt-3 text-center text-lg text-gray-400">Gratis. Solo tu correo.</p>

          <!-- One field on purpose: every extra input costs signups, and the
               email is the only thing actually needed to send the invite. -->
          <form class="mt-10 space-y-4" @submit.prevent="submit">
            <input
              v-model="form.email"
              type="email"
              required
              autocomplete="email"
              inputmode="email"
              placeholder="tu@correo.com"
              aria-label="Tu correo"
              class="w-full rounded-xl border-white/15 bg-white/5 px-5 py-5 text-center text-lg text-white placeholder-gray-500 focus:border-blue-300 focus:ring-blue-300"
            />

            <!-- Honeypot: hidden from people, irresistible to bots -->
            <div class="absolute -left-[9999px]" aria-hidden="true">
              <label for="website">No llenar</label>
              <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
            </div>

            <p v-if="error" class="rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-200">{{ error }}</p>

            <button
              type="submit"
              :disabled="loading"
              class="w-full rounded-xl bg-white px-8 py-4 text-lg font-semibold text-background shadow-xl transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {{ loading ? 'Registrando...' : 'Apartar mi lugar' }}
            </button>
            <p class="text-center text-sm text-gray-500">Sin costo, sin tarjeta.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- ================= FAQ ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-2xl px-6 lg:px-8">
        <h2 class="text-3xl font-bold sm:text-4xl">Preguntas</h2>
        <dl class="mt-10 space-y-7">
          <div v-for="item in faq" :key="item.q">
            <dt class="font-semibold text-white">{{ item.q }}</dt>
            <dd class="mt-1 text-gray-400">{{ item.a }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ================= CIERRE ================= -->
    <section class="relative border-t border-white/10 py-20">
      <div class="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 class="text-3xl font-bold sm:text-5xl">Nos vemos el miércoles.</h2>
        <a
          href="#registro"
          class="mt-9 inline-block rounded-xl bg-white px-10 py-4 text-lg font-semibold text-background shadow-xl transition-transform duration-300 hover:scale-105"
        >
          Apartar mi lugar
        </a>
        <p class="mt-5 text-sm text-gray-500">
          <span class="inline-block first-letter:uppercase">{{ session.dateLabel }}</span> · {{ session.timeLabel }}
        </p>
      </div>

      <footer class="mx-auto mt-20 max-w-5xl border-t border-white/10 px-6 pt-10 text-center lg:px-8">
        <p class="text-xs text-gray-500">&copy; {{ year }} Fullstack Labs</p>
      </footer>
    </section>

    <!-- Confetti overlay. Only mounted after a successful registration, and
         never interactive. -->
    <canvas
      v-if="registered"
      ref="confettiCanvas"
      class="pointer-events-none fixed inset-0 z-50 h-full w-full"
      aria-hidden="true"
    ></canvas>

    <!-- Sticky mobile CTA -->
    <div
      v-if="!registered"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 p-3 backdrop-blur sm:hidden"
    >
      <a href="#registro" class="block rounded-xl bg-white px-6 py-3.5 text-center font-semibold text-background">
        Apartar mi lugar — gratis
      </a>
    </div>
    <div v-if="!registered" class="h-20 sm:hidden" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue'
import {
  CheckCircleIcon,
  ArrowUpRightIcon,
  BuildingStorefrontIcon,
  MegaphoneIcon,
  UserGroupIcon,
  SparklesIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'
import contributions from '~/assets/data/contributions.json'

const config = useRuntimeConfig()
const meetUrl = config.public.webinarMeetUrl
const googleUrl = config.public.webinarGoogleUrl
const year = new Date().getFullYear()

// Computed on the server and serialised into the payload, so the client never
// renders a different date than the server did (hydration mismatch) — and so
// a visitor in another timezone is not shown the wrong day.
const { data: session } = await useFetch('/api/webinar/next', { key: 'webinar-next' })

const openCalendarMenu = ref(false)
const registered = ref(false)
const loading = ref(false)
const error = ref('')

// `website` is the honeypot, not a real field.
const form = reactive({ email: '', website: '' })

/* ---------- Registration celebration ----------
   Hand-rolled rather than pulling in a confetti dependency: it is ~40 lines,
   it stops on its own, and it can respect prefers-reduced-motion. The canvas
   only exists after a successful signup and is never interactive. */
const confettiCanvas = ref(null)
const successCard = ref(null)
let confettiFrame = null

const celebrate = () => {
  // Honour the OS setting — the card and checkmark still animate via CSS,
  // which is also disabled under the same query in the stylesheet.
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

  const canvas = confettiCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  // Burst from the checkmark, so the effect reads as coming from the message.
  const rect = successCard.value?.getBoundingClientRect()
  const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
  const originY = rect ? rect.top + 90 : window.innerHeight / 3

  const COLORS = ['#82B098', '#9BCB9F', '#75c8ff', '#46bcff', '#ffffff']
  const pieces = Array.from({ length: 150 }, () => {
    const angle = Math.random() * Math.PI * 2
    const speed = 6 + Math.random() * 11
    return {
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5, // bias upward so it arcs
      w: 6 + Math.random() * 7,
      h: 4 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      life: 0
    }
  })

  const DURATION = 150 // frames, ~2.5s
  const step = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    let alive = false
    for (const p of pieces) {
      p.life++
      p.vy += 0.32 // gravity
      p.vx *= 0.99 // drag
      p.vy *= 0.99
      p.x += p.vx
      p.y += p.vy
      p.rot += p.vr
      const alpha = Math.max(0, 1 - p.life / DURATION)
      if (alpha <= 0 || p.y > window.innerHeight + 40) continue
      alive = true
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
    }
    if (alive) {
      confettiFrame = requestAnimationFrame(step)
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      confettiFrame = null
    }
  }
  confettiFrame = requestAnimationFrame(step)
}

onUnmounted(() => {
  if (confettiFrame) cancelAnimationFrame(confettiFrame)
})


// Asked on the success screen only — see the note in the template.
const profile = reactive({ name: '', business: '', website: '' })
const profileLoading = ref(false)
const profileSaved = ref(false)

const submitProfile = async () => {
  profileLoading.value = true
  try {
    await $fetch('/api/webinar/profile', {
      method: 'POST',
      body: { email: form.email, ...profile }
    })
  } catch {
    // Intentionally ignored: the registration already succeeded, and this is
    // a bonus. Showing an error here would only make people doubt their signup.
  } finally {
    profileLoading.value = false
    profileSaved.value = true
  }
}

const submit = async () => {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/webinar/register', { method: 'POST', body: { ...form } })
    registered.value = true
    if (import.meta.client) {
      window.scrollTo({ top: document.getElementById('registro').offsetTop - 40, behavior: 'smooth' })
      // Wait for the success card to exist before measuring it for the burst.
      await nextTick()
      celebrate()
    }
  } catch (e) {
    error.value =
      e?.data?.statusMessage ||
      e?.statusMessage ||
      'No pudimos completar el registro. Intenta de nuevo o escríbenos a alexmartos96@gmail.com.'
  } finally {
    loading.value = false
  }
}

/* ---------- GitHub contribution proof ----------
   Real data from assets/data/contributions.json, refreshed by
   assets/data/fetch-contributions.sh. Every cell is one real day; the shading
   is GitHub's own quartile level. Nothing here is generated or estimated. */
const GH_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']

const contributionYears = computed(() => {
  const years = Object.keys(contributions).sort()
  const [base, current] = [years[0], years[years.length - 1]]
  return [
    {
      year: base,
      note: 'año completo',
      total: contributions[base].total,
      cells: contributions[base].levels.split('').map(Number),
      highlight: false
    },
    {
      year: current,
      note: 'a la fecha',
      total: contributions[current].total,
      cells: contributions[current].levels.split('').map(Number),
      highlight: true
    }
  ]
})

// Per-day rate, not raw totals: the current year is partial, so comparing
// totals directly would understate it. This is the honest multiplier.
const perDayMultiplier = computed(() => {
  const years = Object.keys(contributions).sort()
  const a = contributions[years[0]]
  const b = contributions[years[years.length - 1]]
  return (b.total / b.ndays / (a.total / a.ndays)).toFixed(1)
})

const gridsVisible = ref(false)
onMounted(() => {
  // Cheap reveal — no observer needed, the section is short and the animation
  // is per-column anyway.
  setTimeout(() => (gridsVisible.value = true), 150)
})

/* ---------- Countdown: client-only, to avoid a hydration mismatch ---------- */
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
  return [
    { label: 'días', value: Math.floor(diff / 86400000) },
    { label: 'horas', value: Math.floor((diff % 86400000) / 3600000) },
    { label: 'min', value: Math.floor((diff % 3600000) / 60000) },
    { label: 'seg', value: Math.floor((diff % 60000) / 1000) }
  ]
})

// Hidden for visitors already in the webinar's timezone — telling someone in
// Tijuana "10:00 in your zone" is noise.
const localTimeLabel = ref('')
onMounted(() => {
  if (!session.value) return
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  if (tz === 'America/Tijuana' || tz === 'America/Los_Angeles') return
  localTimeLabel.value = new Intl.DateTimeFormat('es-MX', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  }).format(new Date(session.value.startIso))
})

/* ---------- Content ---------- */

// Kept deliberately broad: nothing here should read as "this is only for
// small/simple businesses" or narrow a role down to one channel.
const audience = [
  { icon: BuildingStorefrontIcon, title: 'Dueños de negocio', note: 'De cualquier industria' },
  { icon: MegaphoneIcon, title: 'Ventas y marketing', note: 'Que quieren vender y responder mejor' },
  { icon: UserGroupIcon, title: 'Equipos de cualquier tamaño', note: 'De una persona a una operación completa' },
  { icon: CodeBracketIcon, title: 'Desarrolladores', note: 'Que quieren construir lo que antes no era posible' },
  { icon: SparklesIcon, title: 'Curiosos', note: 'Que probaron ChatGPT y ahí se quedaron' }
]

/**
 * First year of one of Alex's own businesses. The brand is deliberately NOT
 * named on this page (his call) — the numbers carry it, and naming it invites
 * scrutiny of a co-owned business he does not want attached here.
 *
 * Growth metrics only: revenue, expenses, net profit, margin and the partner
 * distribution stay unpublished. Figures cross-check (ROAS = revenue/ad spend,
 * CAC = ad spend/customers, conversion = orders/leads). Currency is MXN.
 */
const businessStats = [
  { value: '12,627', label: 'Leads generados' },
  { value: '1,081', label: 'Clientes' },
  { value: '19.49×', label: 'ROAS' },
  { value: '8.0%', label: 'De lead a compra' },
  { value: '$127', label: 'Costo por cliente (MXN)' }
]

/**
 * The agent roles offered in Fullstack Suite (suite.fullstacklabs.org).
 * Kept in sync with the specialists actually listed there — do not invent
 * roles the product does not ship.
 */
const suiteAgents = [
  { role: 'Respuesta a prospectos', does: 'Contesta cada lead en segundos' },
  { role: 'Cierre de ventas', does: 'Trabaja tu pipeline y agenda la llamada' },
  { role: 'WhatsApp', does: 'Atiende de día, de noche y en fin de semana' },
  { role: 'Anuncios', does: 'Lanza y vigila tus campañas de Meta' },
  { role: 'Sitios y landings', does: 'Los arma y publica desde un chat' },
  { role: 'Seguimiento automático', does: 'Corre solo, según tu calendario' }
]

// Industries from the published Campestre Media profile.
const industries = ['Bienes raíces', 'Finanzas', 'Criptomonedas', 'Marketing', 'Logística']

const faq = [
  { q: '¿De verdad es gratis?', a: 'Sí. Sin tarjeta y sin versión de pago al final.' },
  { q: '¿Necesito saber de tecnología?', a: 'No. Si usas WhatsApp, puedes seguir la sesión.' },
  { q: '¿Es lo mismo cada semana?', a: 'No. Cada sesión es distinta — otros casos, otras herramientas y otras preguntas. Puedes venir todas las semanas.' },
  { q: '¿Es una junta de ventas?', a: 'No. Son 45 minutos de contenido. No hay presentación de precios.' }
]

/* ---------- SEO / share ---------- */
const shareTitle = 'Te enseño a usar la IA en tu negocio | Webinar gratis'
// Kept short and front-loaded: WhatsApp shows roughly two lines and truncates
// the rest, so the offer and the time have to come first.
const shareDescription =
  'Gratis, en vivo, cada miércoles a las 10:00 AM. No necesitas saber nada de tecnología.'
// -3 is redrawn for the thumbnail size chat apps actually render (see
// assets/og/webinar.html). Each bump needs a NEW filename: /img/** is
// immutable for a year and WhatsApp caches a URL's preview indefinitely.
const shareImage = 'https://fullstacklabs.org/img/og-webinar-3.jpg'

useHead({
  htmlAttrs: { lang: 'es' },
  link: [{ rel: 'canonical', href: 'https://fullstacklabs.org/webinar' }],
  // Event structured data — lets Google show this as a dated event rather than
  // a plain blue link. Dates come from the same server-computed session as the
  // page, so they can never disagree.
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
        location: { '@type': 'VirtualLocation', url: 'https://fullstacklabs.org/webinar' },
        organizer: { '@type': 'Organization', name: 'Fullstack Labs', url: 'https://fullstacklabs.org' },
        performer: { '@type': 'Person', name: 'Alejandro Martos' },
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
  ogImageAlt: 'Webinar gratis: te enseño a usar la IA en tu negocio, miércoles 10:00 AM',
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

<style scoped>
/* ---------- Registration celebration ---------- */
.success-card {
  animation: card-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* Circumference of r=24 is ~150.8 — the dash length must match or the stroke
   will not fully hide before it draws. */
.check-circle {
  stroke-dasharray: 151;
  stroke-dashoffset: 151;
  animation: draw 0.55s ease-out 0.15s forwards;
}
.check-mark {
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  animation: draw 0.35s ease-out 0.6s forwards;
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.reveal {
  opacity: 0;
  animation: reveal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.reveal-1 { animation-delay: 0.75s; }
.reveal-2 { animation-delay: 0.85s; }
.reveal-3 { animation-delay: 0.98s; }
.reveal-4 { animation-delay: 1.08s; }
.reveal-5 { animation-delay: 1.2s; }
.reveal-6 { animation-delay: 1.32s; }
@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* Anyone who asked the OS for less motion gets the content, instantly. */
@media (prefers-reduced-motion: reduce) {
  .success-card,
  .reveal,
  .check-circle,
  .check-mark {
    animation: none;
    opacity: 1;
    stroke-dashoffset: 0;
    transform: none;
  }
}

/* GitHub-style contribution grid: 7 rows (days), one column per week. */
.gh-grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, auto);
  grid-template-columns: repeat(var(--weeks, 53), minmax(0, 1fr));
  gap: 2px;
  width: 100%;
}
.gh-cell {
  aspect-ratio: 1;
  border-radius: 2px;
  opacity: 0;
  transform: scale(0.25);
  transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.gh-grid.in .gh-cell {
  opacity: 1;
  transform: none;
}
</style>
