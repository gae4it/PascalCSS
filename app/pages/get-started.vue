<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">
    <section
      class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.16),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_56%)] py-20 dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.16),_transparent_30%),linear-gradient(180deg,_#030712_0%,_#111827_56%)] md:py-28"
    >
      <div class="container mx-auto px-4">
        <div class="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span
              class="inline-flex rounded-full border border-pascal-200 bg-white/80 px-4 py-1 text-sm font-semibold text-pascal-700 shadow-sm backdrop-blur dark:border-pascal-900 dark:bg-gray-900/80 dark:text-pascal-300"
            >
              Easy onboarding in just 5 minutes!
            </span>
            <h1
              class="mt-6 max-w-4xl text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl"
            >
              Get started with PascalCSS without a build step.
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300 md:text-xl">
              PascalCSS is a modern, lightweight, utility-first CSS library with readable PascalCase
              naming. You add one stylesheet, write classes that look like real words, and ship.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                to="/docs"
                class="rounded-xl bg-gray-950 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-gray-950/10 dark:bg-white dark:text-gray-950"
              >
                Browse Class Reference
              </NuxtLink>
              <NuxtLink
                to="/playground"
                class="rounded-xl border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-900 transition-colors hover:border-pascal-400 hover:text-pascal-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-pascal-600 dark:hover:text-pascal-300"
              >
                Open Playground
              </NuxtLink>
            </div>

            <div class="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/90"
              >
                <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</div>
                <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <div class="relative min-w-0">
            <div
              class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-pascal-200 via-white to-pink-100 blur-2xl dark:from-pascal-950 dark:via-gray-900 dark:to-pink-950"
            ></div>
            <div
              class="relative rounded-[2rem] border border-gray-200 bg-gray-950 p-6 text-sm shadow-2xl dark:border-gray-800"
            >
              <div class="mb-4 flex items-center gap-2">
                <span class="size-3 rounded-full bg-red-400"></span>
                <span class="size-3 rounded-full bg-amber-400"></span>
                <span class="size-3 rounded-full bg-green-400"></span>
                <span class="ml-3 text-xs uppercase tracking-[0.24em] text-gray-400"
                  >index.html</span
                >
              </div>
              <pre
                class="max-w-full overflow-x-auto text-sm leading-7 text-gray-100"
              ><code>&lt;link rel="stylesheet"
href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@4.0.0/pascal-css.css"&gt;

&lt;div class="DisplayFlex JustifyContentCenter AlignItemsCenter Padding20 BgBlue500 FcWhite"&gt;
  &lt;h1 class="Fs30 Fw700"&gt;Hello PascalCSS&lt;/h1&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20 dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.28em] text-pascal-600 dark:text-pascal-400"
          >
            Why teams pick it
          </p>
          <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Utility-first, but easier to read and easier to adopt.
          </h2>
          <p class="mt-5 text-lg text-gray-600 dark:text-gray-400">
            The main advantage is not just file size. It is lower cognitive load: class names are
            explicit, the setup is immediate, and responsive utilities are already there.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-transform hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
          >
            <div
              class="inline-flex rounded-2xl border border-pascal-200 bg-white px-3 py-2 text-2xl dark:border-pascal-900 dark:bg-gray-950"
            >
              {{ feature.icon }}
            </div>
            <h3 class="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-20 dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="grid gap-10 xl:grid-cols-2">
          <div
            class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.28em] text-pascal-600 dark:text-pascal-400"
            >
              Naming conventions
            </p>
            <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Readable classes, predictable rules.
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              PascalCSS self-descriptive classes let you write correct markup right after reading
              the documentation.
            </p>

            <div class="mt-8 grid gap-4">
              <div
                class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <p
                  class="mb-2 text-xs font-bold uppercase tracking-widest text-pascal-600 dark:text-pascal-400"
                >
                  Content Wrapper
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Wrap your content in a dedicated wrapper. The final number indicates the max-width
                  in px.
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <code
                    v-for="w in [640, 768, 960, 1000, 1024, 1140, 1260, 1366, 1450, 1600, 1920]"
                    :key="w"
                    class="rounded-md bg-white px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    ContentWrapper{{ w }}
                  </code>
                </div>
              </div>

              <div class="grid gap-4 lg:grid-cols-2">
                <div
                  class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <p
                    class="mb-2 text-xs font-bold uppercase tracking-widest text-pascal-600 dark:text-pascal-400"
                  >
                    Font Size and Weight
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    From Fs07 (0.7rem) to Fs100 (10rem). For weight, use Fw with a direct value,
                    e.g. Fw500.
                  </p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <code
                      v-for="c in ['Fs07', 'Fs14', 'Fs30', 'Fs100', 'Fw400', 'Fw500', 'Fw700']"
                      :key="c"
                      class="rounded-md bg-white px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                    >
                      {{ c }}
                    </code>
                  </div>
                </div>

                <div
                  class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <p
                    class="mb-2 text-xs font-bold uppercase tracking-widest text-pascal-600 dark:text-pascal-400"
                  >
                    Colors
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    The palette follows the 50, 100, 300, 500, 700, 900 scale for text, backgrounds,
                    and borders.
                  </p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <code
                      v-for="c in ['FcOrange50', 'FcRed700', 'BgBlue500', 'BcGray300']"
                      :key="c"
                      class="rounded-md bg-white px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                    >
                      {{ c }}
                    </code>
                  </div>
                </div>
              </div>

              <div
                class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <p
                  class="mb-2 text-xs font-bold uppercase tracking-widest text-pascal-600 dark:text-pascal-400"
                >
                  Spacing and lengths
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Intuitive scales: 05 = 0.5rem, 10 = 1rem, 35 = 3.5rem. Directions use T, R, B, L.
                  For width, the number represents the percentage (Width30 = 30%).
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <code
                    v-for="c in ['PaddingB25', 'MarginT15', 'Gap25', 'Width30', 'BorderRadiusTR20']"
                    :key="c"
                    class="rounded-md bg-white px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    {{ c }}
                  </code>
                </div>
              </div>

              <div
                class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <p
                  class="mb-2 text-xs font-bold uppercase tracking-widest text-pascal-600 dark:text-pascal-400"
                >
                  Direct mapping to CSS
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Utilities explicitly declare the applied CSS property.
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <code
                    v-for="c in [
                      'DisplayFlex',
                      'FlexDirectionColumn',
                      'AlignSelfCenter',
                      'VisibilityHidden',
                      'TextWrapBalance',
                      'BackgroundSizeCover',
                    ]"
                    :key="c"
                    class="rounded-md bg-white px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    {{ c }}
                  </code>
                </div>
              </div>

              <div class="grid gap-4 lg:grid-cols-2">
                <div
                  class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <p
                    class="mb-2 text-xs font-bold uppercase tracking-widest text-pascal-600 dark:text-pascal-400"
                  >
                    Responsive prefixes
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Mobile-first by default. Add prefixes from Sm: to Xxl: to override styles at
                    each breakpoint and up.
                  </p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <code
                      v-for="c in [
                        'DisplayFlex Md:FlexDirectionRow',
                        'Width100 Lg:Width50',
                        'Gap10 Xl:Gap25',
                        'Sm:DisplayBlock',
                      ]"
                      :key="c"
                      class="rounded-md bg-white px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                    >
                      {{ c }}
                    </code>
                  </div>
                </div>

                <div
                  class="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <p
                    class="mb-2 text-xs font-bold uppercase tracking-widest text-pascal-600 dark:text-pascal-400"
                  >
                    Display and visibility
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Show, hide, and adapt UI parts across breakpoints without custom CSS.
                  </p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <code
                      v-for="c in [
                        'DisplayNone Md:DisplayBlock',
                        'HiddenSm',
                        'VisibleLg',
                        'OverflowHidden',
                        'PositionRelative',
                      ]"
                      :key="c"
                      class="rounded-md bg-white px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                    >
                      {{ c }}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="min-w-0 rounded-[2rem] border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.28em] text-pascal-600 dark:text-pascal-400"
            >
              Responsive engine
            </p>
            <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Mobile-first without extra tooling.
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              v4.0.0 ships responsive prefixes across the utility surface, so layout changes stay
              inside the class list instead of jumping into custom CSS files.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <div
                v-for="breakpoint in breakpoints"
                :key="breakpoint.prefix"
                class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-950"
              >
                <div class="flex items-center justify-between gap-4">
                  <span class="text-lg font-bold text-gray-900 dark:text-white">{{
                    breakpoint.prefix
                  }}</span>
                  <span
                    class="rounded-full bg-pascal-100 px-3 py-1 text-sm font-medium text-pascal-700 dark:bg-pascal-950 dark:text-pascal-300"
                  >
                    {{ breakpoint.minWidth }}
                  </span>
                </div>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ breakpoint.target }}</p>
              </div>
            </div>

            <div class="mt-8 rounded-2xl bg-gray-950 p-5 text-sm text-gray-100">
              <pre
                class="max-w-full overflow-x-auto leading-7"
              ><code>&lt;div class="DisplayFlex FlexDirectionColumn Md:FlexDirectionRow Gap20 Padding20"&gt;
  &lt;div class="Width100 Md:Width50 BgGray100 Padding15 BorderRadius10"&gt;Card 1&lt;/div&gt;
  &lt;div class="Width100 Md:Width50 BgGray100 Padding15 BorderRadius10"&gt;Card 2&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>

            <div
              class="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800"
            >
              <img
                src="public/image/responsive-engine.png"
                alt="Responsive Engine"
                style="max-width: 100%; height: auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.28em] text-pascal-600 dark:text-pascal-400"
          >
            Fit and positioning
          </p>
          <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Best fit for teams that want speed without framework ceremony.
          </h2>
        </div>

        <div class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div
            class="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Who PascalCSS is for
            </h3>
            <ul class="mt-5 space-y-3 text-gray-600 dark:text-gray-400">
              <li v-for="item in audiences" :key="item" class="flex gap-3">
                <span class="mt-1 text-pascal-600 dark:text-pascal-400">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div
            class="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Why it stands out</h3>
            <div class="mt-5 space-y-4">
              <div
                v-for="comparison in comparisons"
                :key="comparison.name"
                class="rounded-2xl bg-gray-50 p-5 dark:bg-gray-900"
              >
                <div class="font-semibold text-gray-900 dark:text-white">
                  vs. {{ comparison.name }}
                </div>
                <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {{ comparison.summary }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20 dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div
          class="rounded-[2rem] border border-pascal-200 bg-gradient-to-br from-pascal-50 via-white to-sky-50 p-8 shadow-sm dark:border-pascal-900 dark:from-gray-950 dark:via-gray-900 dark:to-sky-950"
        >
          <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.28em] text-pascal-600 dark:text-pascal-400"
              >
                Next step
              </p>
              <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Start with one link tag, then learn by trying.
              </h2>
              <p class="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                The recommended flow is simple: install the stylesheet, scan the class reference,
                then test ideas in the playground. Get started in just 5 minutes.
              </p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <NuxtLink
                to="/docs"
                class="rounded-xl bg-pascal-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-pascal-700"
              >
                Open Docs
              </NuxtLink>
              <NuxtLink
                to="/playground"
                class="rounded-xl border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-900 transition-colors hover:border-pascal-400 hover:text-pascal-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:hover:border-pascal-600 dark:hover:text-pascal-300"
              >
                Try Live Example
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const {
  public: { siteUrl },
} = useRuntimeConfig()

useSeoMeta({
  title: 'Get Started - PascalCSS Onboarding',
  description:
    'Learn how to start with PascalCSS in minutes. Install via CDN, understand the benefits, and move from first link tag to responsive layouts quickly.',
  ogTitle: 'Get Started with PascalCSS',
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    name: 'Get Started - PascalCSS Onboarding',
    description:
      'Learn how to start with PascalCSS in minutes. Install via CDN, understand the benefits, and move from first link tag to responsive layouts quickly.',
    url: `${siteUrl}/get-started`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PascalCSS',
      url: siteUrl,
    },
  },
])

const stats = [
  { value: 'Zero build', label: 'Instant setup from a single stylesheet' },
  { value: '5700+', label: 'Responsive classes in v4.0.0' },
  { value: '~46KB', label: 'Approximate gzipped delivery size' },
]

const features = [
  {
    icon: '🎯',
    title: 'Readable PascalCase naming',
    description:
      'Utilities such as DisplayFlex and JustifyContentCenter are easier to scan in HTML than terse abbreviations.',
  },
  {
    icon: '📦',
    title: 'Zero build required',
    description:
      'PascalCSS is pure CSS. You can use it from a CDN or local file without PostCSS, config files, or framework integration.',
  },
  {
    icon: '🎨',
    title: 'Modern CSS under the hood',
    description:
      'It uses OKLCH colors, custom media, and responsive typography while keeping the public API simple.',
  },
  {
    icon: '📱',
    title: 'Mobile-first responsive prefixes',
    description:
      'Sm:, Md:, Lg:, Xl:, and Xxl: let you express layout changes directly in the markup with predictable breakpoints.',
  },
  {
    icon: '⚡',
    title: 'Single-file distribution',
    description:
      'The release artifact is ready to ship as one CSS file, which keeps adoption and deployment straightforward.',
  },
  {
    icon: '🌐',
    title: 'Modern browser target',
    description:
      'It is a good fit for products targeting current Chrome, Safari, and Firefox versions where modern CSS is acceptable.',
  },
]

const breakpoints = [
  { prefix: 'Base', minWidth: '0px', target: 'Mobile-first default styles' },
  { prefix: 'Sm:', minWidth: '640px', target: 'Large phones and small tablets' },
  { prefix: 'Md:', minWidth: '768px', target: 'Tablets and small laptops' },
  { prefix: 'Lg:', minWidth: '1024px', target: 'Laptops and desktops' },
  { prefix: 'Xl:', minWidth: '1280px', target: 'Large desktop layouts' },
  { prefix: 'Xxl:', minWidth: '1536px', target: 'Ultra-wide screens' },
]

const audiences = [
  'Rapid prototyping, MVPs, and landing pages where setup time matters.',
  'Teams that like utility-first CSS but want class names to read closer to real API names.',
  'Developers coming from Java, C#, Swift, or similar ecosystems where PascalCase already feels natural.',
  'Projects that target modern browsers and want to avoid build-chain complexity for styling.',
]

const comparisons = [
  {
    name: 'Tailwind CSS',
    summary:
      'PascalCSS trades Tailwind’s terse shorthand and build-centric workflow for explicit naming and single-file delivery.',
  },
  {
    name: 'Bootstrap',
    summary:
      'PascalCSS stays utility-first and CSS-only, which makes it lighter when you do not need a component or JavaScript layer.',
  },
]
</script>
