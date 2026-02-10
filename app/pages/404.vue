<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
    <div class="container mx-auto px-4 text-center">
      <svg
        class="w-24 h-24 mx-auto mb-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      
      <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Page Not Found
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      
      <NuxtLink
        to="/"
        class="inline-block px-6 py-3 bg-pascal-600 hover:bg-pascal-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '404 - Page Not Found',
  robots: 'noindex, nofollow',
})
</script>
