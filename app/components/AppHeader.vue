<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
  >
    <nav class="container mx-auto flex items-center justify-between p-4">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <div
          class="bg-gradient-to-r from-pascal-600 to-pascal-400 bg-clip-text text-2xl font-bold text-transparent"
        >
          PascalCSS
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden items-center space-x-6 md:flex">
        <NuxtLink
          to="/docs"
          class="font-medium text-gray-700 transition-colors hover:text-pascal-600 dark:text-gray-300 dark:hover:text-pascal-400"
        >
          Documentation
        </NuxtLink>
        <NuxtLink
          to="/playground"
          class="font-medium text-gray-700 transition-colors hover:text-pascal-600 dark:text-gray-300 dark:hover:text-pascal-400"
        >
          Playground
        </NuxtLink>
        <a
          href="https://github.com/gae4it/pascal-css"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-gray-700 transition-colors hover:text-pascal-600 dark:text-gray-300 dark:hover:text-pascal-400"
        >
          GitHub
        </a>
        <DarkModeToggle />
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center space-x-4 md:hidden">
        <DarkModeToggle />
        <button
          class="text-gray-700 dark:text-gray-300"
          aria-label="Toggle menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden"
    >
      <div class="container mx-auto flex flex-col space-y-4 p-4">
        <NuxtLink
          to="/docs"
          class="font-medium text-gray-700 transition-colors hover:text-pascal-600 dark:text-gray-300 dark:hover:text-pascal-400"
          @click="mobileMenuOpen = false"
        >
          Documentation
        </NuxtLink>
        <NuxtLink
          to="/playground"
          class="font-medium text-gray-700 transition-colors hover:text-pascal-600 dark:text-gray-300 dark:hover:text-pascal-400"
          @click="mobileMenuOpen = false"
        >
          Playground
        </NuxtLink>
        <a
          href="https://github.com/gae4it/pascal-css"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-gray-700 transition-colors hover:text-pascal-600 dark:text-gray-300 dark:hover:text-pascal-400"
        >
          GitHub
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
