<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSchemaOrg([
  {
    '@type': 'WebApplication',
    name: 'PascalCSS',
    description: 'Zero-Build Utility CSS Framework with PascalCase Naming',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: 'PascalCSS',
    },
  },
])

useSeoMeta({
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
