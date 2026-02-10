<template>
  <div class="min-h-screen bg-gray-50 py-12 dark:bg-gray-950">
    <div class="container mx-auto px-4 text-center">
      <svg
        class="mx-auto mb-6 size-24 text-gray-400"
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

      <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">Page Not Found</h1>
      <p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <NuxtLink
        to="/"
        class="inline-block rounded-lg bg-pascal-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-pascal-700"
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
