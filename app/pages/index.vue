<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-pascal-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pascal-600 to-pascal-400 bg-clip-text text-transparent">
            Zero-Build Utility CSS
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            The simplest CSS library in the world!
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            PascalCSS is a static utility-first CSS framework with <strong>PascalCase naming</strong>.</br> 
            No build step. No JavaScript runtime. Just pure, readable CSS.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/docs" class="px-6 py-3 bg-pascal-600 hover:bg-pascal-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </NuxtLink>
            <NuxtLink to="/playground" class="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-lg transition-colors">
              Try Playground
            </NuxtLink>
          </div>

          <!-- Quick Code Example -->
          <div class="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-800">
            <div class="text-left">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">HTML</span>
                <span class="text-xs text-pascal-600 dark:text-pascal-400">Easy to read ✨</span>
              </div>
              <pre class="text-sm md:text-base overflow-x-auto"><code class="text-gray-800 dark:text-gray-200 font-mono">&lt;div class="<span class="text-pascal-600">DisplayFlex JustifyContentCenter Padding20</span>"&gt;
  &lt;h1 class="<span class="text-pascal-600">FontSize32 ColorBlue700</span>"&gt;
    Hello PascalCSS!
  &lt;/h1&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Background decoration -->
      <div class="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-pascal-200 dark:bg-pascal-900 rounded-full opacity-20 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-pascal-300 dark:bg-pascal-800 rounded-full opacity-20 blur-3xl"></div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Why PascalCSS?
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          The fastest CSS framework for 2026. No-Deploy, No-Build advantage.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Feature 1 -->
          <div class="card p-6">
            <div class="w-12 h-12 bg-pascal-100 dark:bg-pascal-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-pascal-600 dark:text-pascal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Zero Build</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Drop in a <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&lt;link&gt;</code> tag and you're done. No webpack, no vite, no build step.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="card p-6">
            <div class="w-12 h-12 bg-pascal-100 dark:bg-pascal-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-pascal-600 dark:text-pascal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">PascalCase Readable</h3>
            <p class="text-gray-600 dark:text-gray-400">
              <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">DisplayFlex</code> instead of <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">d-flex</code>. Your classes match your component names.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="card p-6">
            <div class="w-12 h-12 bg-pascal-100 dark:bg-pascal-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-pascal-600 dark:text-pascal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">No JS Runtime</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Pure static CSS. Zero JavaScript overhead. Perfect for performance-critical applications.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="card p-6">
            <div class="w-12 h-12 bg-pascal-100 dark:bg-pascal-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-pascal-600 dark:text-pascal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Responsive First</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Mobile-first responsive utilities with intuitive <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Md:</code> <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Lg:</code> prefixes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
          Traditional vs PascalCSS
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Traditional -->
          <div class="bg-white dark:bg-gray-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div class="flex items-center mb-4">
              <span class="text-red-500 mr-2">❌</span>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Traditional</h3>
            </div>
            <pre class="text-sm overflow-x-auto bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"><code class="text-gray-800 dark:text-gray-200 font-mono">&lt;div class="d-flex justify-center p-4"&gt;
  &lt;h1 class="text-2xl text-blue-700"&gt;
    Content
  &lt;/h1&gt;
&lt;/div&gt;</code></pre>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Cryptic abbreviations, inconsistent naming
            </p>
          </div>

          <!-- PascalCSS -->
          <div class="bg-gradient-to-br from-pascal-50 to-white dark:from-gray-950 dark:to-gray-900 rounded-xl p-6 border-2 border-pascal-400 dark:border-pascal-600 shadow-lg">
            <div class="flex items-center mb-4">
              <span class="text-green-500 mr-2">✅</span>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">PascalCSS</h3>
            </div>
            <pre class="text-sm overflow-x-auto bg-white dark:bg-gray-950 p-4 rounded-lg border border-pascal-200 dark:border-pascal-800"><code class="text-gray-800 dark:text-gray-200 font-mono">&lt;div class="<span class="text-pascal-600">DisplayFlex JustifyContentCenter Padding20</span>"&gt;
  &lt;h1 class="<span class="text-pascal-600">FontSize32 ColorBlue700</span>"&gt;
    Content
  &lt;/h1&gt;
&lt;/div&gt;</code></pre>
            <p class="text-sm text-pascal-700 dark:text-pascal-400 mt-4 font-medium">
              Self-documenting, component-style naming
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Get Started in 30 Seconds
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          No installation, no build tools required. Just add a single line to your HTML.
        </p>

        <div class="bg-gray-50 dark:bg-gray-900 rounded-xl border-2 border-pascal-200 dark:border-pascal-800 p-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Option 1: CDN (Fastest)</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Add this single line to your HTML <code class="bg-white dark:bg-gray-950 px-2 py-1 rounded text-sm font-mono">&lt;head&gt;</code>:
          </p>
          <div class="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
            <code class="text-sm font-mono text-gray-800 dark:text-gray-200">&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.0/dist/pascal-css.min.css"&gt;</code>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            💡 <strong>Hosted on jsDelivr CDN</strong> – Global distribution, instant updates, zero installation
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-900 rounded-xl border-2 border-pascal-200 dark:border-pascal-800 p-8 mt-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Option 2: Local File</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Download <code class="bg-white dark:bg-gray-950 px-2 py-1 rounded text-sm font-mono">pascal-css.min.css</code> and save to your project:
          </p>
          <div class="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
            <code class="text-sm font-mono text-gray-800 dark:text-gray-200">&lt;link rel="stylesheet" href="./css/pascal-css.min.css"&gt;</code>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            📦 For production builds where you prefer self-hosting
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-pascal-600 dark:text-pascal-400 mb-2">0</div>
            <p class="text-gray-600 dark:text-gray-400">Build Tools Needed</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-pascal-600 dark:text-pascal-400 mb-2">1</div>
            <p class="text-gray-600 dark:text-gray-400">Line of Code</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-pascal-600 dark:text-pascal-400 mb-2">100%</div>
            <p class="text-gray-600 dark:text-gray-400">Static CSS</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-pascal-600 to-pascal-400 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Try PascalCSS?
        </h2>
        <p class="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Get started in seconds. No installation required.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink 
            to="/docs" 
            class="px-8 py-4 bg-white text-pascal-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            View Documentation
          </NuxtLink>
          <NuxtLink 
            to="/playground" 
            class="px-8 py-4 bg-pascal-700 hover:bg-pascal-800 text-white font-semibold rounded-lg shadow-xl transition-all"
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
  description: 'Static CSS library with PascalCase naming. No build step, no JavaScript runtime. Utility-first CSS framework for modern web development.',
  ogTitle: 'PascalCSS - Zero-Build Utility CSS',
  ogDescription: 'Because your CSS classes should look like your Components. No-Deploy, No-Build advantage.',
  keywords: 'PascalCSS, Static CSS library, Utility-first CSS, PascalCase CSS, Fastest CSS framework 2026, No build CSS, Zero-Build CSS',
})
</script>
