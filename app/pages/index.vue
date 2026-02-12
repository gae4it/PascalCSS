<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-pascal-50 to-white py-20 dark:from-gray-900 dark:to-gray-950 md:py-32"
    >
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h1
            class="mb-6 bg-gradient-to-r from-pascal-600 to-pascal-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
          >
            Zero-Build Utility CSS
          </h1>
          <p class="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300 md:text-2xl">
            The simplest CSS library in the world!
          </p>
          <p class="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            PascalCSS is a static utility-first CSS framework with
            <strong>PascalCase naming</strong>.<br />
            No build step. No JavaScript runtime. Just pure, readable CSS.
          </p>

          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <NuxtLink
              to="/docs"
              class="rounded-lg bg-pascal-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-pascal-700 hover:shadow-xl"
            >
              Get Started
            </NuxtLink>
            <NuxtLink
              to="/playground"
              class="rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              Try Playground
            </NuxtLink>
          </div>

          <!-- Quick Code Example -->
          <div
            class="mx-auto mt-16 max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-gray-900"
          >
            <div class="text-left">
              <div class="mb-4 flex items-center justify-between">
                <span
                  class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400"
                  >HTML</span
                >
                <span class="text-xs text-pascal-600 dark:text-pascal-400">Easy to read ✨</span>
              </div>
              <pre
                class="overflow-x-auto text-sm md:text-base"
              ><code class="font-mono text-gray-800 dark:text-gray-200">&lt;div class="<span class="text-pascal-600">DisplayFlex JustifyContentCenter Padding20</span>"&gt;
  &lt;h1 class="<span class="text-pascal-600">Fs20 ColorBlue700</span>"&gt;
    Hello PascalCSS!
  &lt;/h1&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Background decoration -->
      <div
        class="absolute right-0 top-0 -mr-40 -mt-40 size-80 rounded-full bg-pascal-200 opacity-20 blur-3xl dark:bg-pascal-900"
      ></div>
      <div
        class="absolute bottom-0 left-0 -mb-40 -ml-40 size-80 rounded-full bg-pascal-300 opacity-20 blur-3xl dark:bg-pascal-800"
      ></div>
    </section>

    <!-- Features Section -->
    <section class="bg-white py-20 dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2
          class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl"
        >
          Why PascalCSS?
        </h2>
        <p class="mx-auto mb-16 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          The fastest CSS framework for 2026. No-Deploy, No-Build advantage.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Feature 1 -->
          <div class="card p-6">
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-lg bg-pascal-100 dark:bg-pascal-900"
            >
              <svg
                class="size-6 text-pascal-600 dark:text-pascal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Zero Build</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Drop in a
              <code class="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800"
                >&lt;link&gt;</code
              >
              tag and you're done. No webpack, no vite, no build step.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="card p-6">
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-lg bg-pascal-100 dark:bg-pascal-900"
            >
              <svg
                class="size-6 text-pascal-600 dark:text-pascal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              PascalCase Readable
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              <code class="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800"
                >DisplayFlex</code
              >
              instead of
              <code class="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">d-flex</code>.
              Your classes match your component names.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="card p-6">
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-lg bg-pascal-100 dark:bg-pascal-900"
            >
              <svg
                class="size-6 text-pascal-600 dark:text-pascal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              No JS Runtime
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Pure static CSS. Zero JavaScript overhead. Perfect for performance-critical
              applications.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="card p-6">
            <div
              class="mb-4 flex size-12 items-center justify-center rounded-lg bg-pascal-100 dark:bg-pascal-900"
            >
              <svg
                class="size-6 text-pascal-600 dark:text-pascal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Responsive First
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Mobile-first responsive utilities with intuitive
              <code class="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">Md:</code>
              <code class="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">Lg:</code>
              prefixes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="bg-gray-50 py-20 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2
          class="mb-16 text-center text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl"
        >
          Traditional vs PascalCSS
        </h2>

        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Traditional -->
          <div
            class="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
          >
            <div class="mb-4 flex items-center">
              <span class="mr-2 text-red-500">❌</span>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Traditional</h3>
            </div>
            <pre
              class="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-900"
            ><code class="font-mono text-gray-800 dark:text-gray-200">&lt;div class="d-flex justify-center p-4"&gt;
  &lt;h1 class="text-2xl text-blue-700"&gt;
    Content
  &lt;/h1&gt;
&lt;/div&gt;</code></pre>
            <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Cryptic abbreviations, inconsistent naming
            </p>
          </div>

          <!-- PascalCSS -->
          <div
            class="rounded-xl border-2 border-pascal-400 bg-gradient-to-br from-pascal-50 to-white p-6 shadow-lg dark:border-pascal-600 dark:from-gray-950 dark:to-gray-900"
          >
            <div class="mb-4 flex items-center">
              <span class="mr-2 text-green-500">✅</span>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">PascalCSS</h3>
            </div>
            <pre
              class="overflow-x-auto rounded-lg border border-pascal-200 bg-white p-4 text-sm dark:border-pascal-800 dark:bg-gray-950"
            ><code class="font-mono text-gray-800 dark:text-gray-200">&lt;div class="<span class="text-pascal-600">DisplayFlex JustifyContentCenter Padding20</span>"&gt;
  &lt;h1 class="<span class="text-pascal-600">Fs20 ColorBlue700</span>"&gt;
    Content
  &lt;/h1&gt;
&lt;/div&gt;</code></pre>
            <p class="mt-4 text-sm font-medium text-pascal-700 dark:text-pascal-400">
              Self-documenting, component-style naming
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section class="bg-white py-20 dark:bg-gray-950">
      <div class="container mx-auto max-w-5xl px-4">
        <h2
          class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl"
        >
          Get Started in 30 Seconds
        </h2>
        <p class="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          No installation, no build tools required. Just add a single line to your HTML.
        </p>

        <div
          class="rounded-xl border-2 border-pascal-200 bg-gray-50 p-8 dark:border-pascal-800 dark:bg-gray-900"
        >
          <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Option 1: CDN (Fastest)
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            Add this single line to your HTML
            <code class="rounded bg-white px-2 py-1 font-mono text-sm dark:bg-gray-950"
              >&lt;head&gt;</code
            >:
          </p>
          <div
            class="mb-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
          >
            <code class="font-mono text-sm text-gray-800 dark:text-gray-200"
              >&lt;link rel="stylesheet"
              href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.2.0/dist/pascal-css.min.css"&gt;</code
            >
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            💡 <strong>Hosted on jsDelivr CDN</strong> – Global distribution, instant updates, zero
            installation
          </p>
        </div>

        <div
          class="mt-6 rounded-xl border-2 border-pascal-200 bg-gray-50 p-8 dark:border-pascal-800 dark:bg-gray-900"
        >
          <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Option 2: Local File
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            Download
            <code class="rounded bg-white px-2 py-1 font-mono text-sm dark:bg-gray-950"
              >pascal-css.min.css</code
            >
            and save to your project:
          </p>
          <div
            class="mb-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
          >
            <code class="font-mono text-sm text-gray-800 dark:text-gray-200"
              >&lt;link rel="stylesheet" href="./css/pascal-css.min.css"&gt;</code
            >
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            📦 For production builds where you prefer self-hosting
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="text-center">
            <div class="mb-2 text-4xl font-bold text-pascal-600 dark:text-pascal-400">0</div>
            <p class="text-gray-600 dark:text-gray-400">Build Tools Needed</p>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-bold text-pascal-600 dark:text-pascal-400">1</div>
            <p class="text-gray-600 dark:text-gray-400">Line of Code</p>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-bold text-pascal-600 dark:text-pascal-400">100%</div>
            <p class="text-gray-600 dark:text-gray-400">Static CSS</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-pascal-600 to-pascal-400 py-20 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold md:text-4xl">Ready to Try PascalCSS?</h2>
        <p class="mx-auto mb-10 max-w-2xl text-xl opacity-90">
          Get started in seconds. No installation required.
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/docs"
            class="rounded-lg bg-white px-8 py-4 font-semibold text-pascal-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            View Documentation
          </NuxtLink>
          <NuxtLink
            to="/playground"
            class="rounded-lg bg-pascal-700 px-8 py-4 font-semibold text-white shadow-xl transition-all hover:bg-pascal-800"
          >
            Open Playground
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'PascalCSS - Zero-Build Utility CSS Framework',
  description:
    'Static CSS library with PascalCase naming. No build step, no JavaScript runtime. Utility-first CSS framework for modern web development.',
  ogTitle: 'PascalCSS - Zero-Build Utility CSS',
  ogDescription:
    'Because your CSS classes should look like your Components. No-Deploy, No-Build advantage.',
  keywords:
    'PascalCSS, Static CSS library, Utility-first CSS, PascalCase CSS, Fastest CSS framework 2026, No build CSS, Zero-Build CSS',
})
</script>
