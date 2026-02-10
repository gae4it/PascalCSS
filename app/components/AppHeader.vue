<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <div class="text-2xl font-bold bg-gradient-to-r from-pascal-600 to-pascal-400 bg-clip-text text-transparent">
          PascalCSS
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink 
          to="/docs" 
          class="text-gray-700 dark:text-gray-300 hover:text-pascal-600 dark:hover:text-pascal-400 font-medium transition-colors"
        >
          Documentation
        </NuxtLink>
        <NuxtLink 
          to="/playground" 
          class="text-gray-700 dark:text-gray-300 hover:text-pascal-600 dark:hover:text-pascal-400 font-medium transition-colors"
        >
          Playground
        </NuxtLink>
        <a 
          href="https://github.com/gae4it/pascal-css" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-700 dark:text-gray-300 hover:text-pascal-600 dark:hover:text-pascal-400 font-medium transition-colors"
        >
          GitHub
        </a>
        <DarkModeToggle />
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center space-x-4">
        <DarkModeToggle />
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-gray-700 dark:text-gray-300"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <NuxtLink 
          to="/docs" 
          @click="mobileMenuOpen = false"
          class="text-gray-700 dark:text-gray-300 hover:text-pascal-600 dark:hover:text-pascal-400 font-medium transition-colors"
        >
          Documentation
        </NuxtLink>
        <NuxtLink 
          to="/playground"
          @click="mobileMenuOpen = false" 
          class="text-gray-700 dark:text-gray-300 hover:text-pascal-600 dark:hover:text-pascal-400 font-medium transition-colors"
        >
          Playground
        </NuxtLink>
        <a 
          href="https://github.com/gae4it/pascal-css" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-700 dark:text-gray-300 hover:text-pascal-600 dark:hover:text-pascal-400 font-medium transition-colors"
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
