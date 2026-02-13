<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const {
  public: { siteUrl },
} = useRuntimeConfig()

const canonicalUrl = computed(() => {
  const path = route.path === '/' ? '' : route.path.replace(/\/$/, '')
  return `${siteUrl}${path}`
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
}))

useSchemaOrg([
  {
    '@type': 'Organization',
    name: 'PascalCSS',
    url: siteUrl,
  },
  {
    '@type': 'WebSite',
    name: 'PascalCSS',
    url: siteUrl,
    inLanguage: 'en',
    description: 'Zero-Build Utility CSS with PascalCase Readability. Easy to learn, fast to use.',
    publisher: {
      '@type': 'Organization',
      name: 'PascalCSS',
      url: siteUrl,
    },
  },
  {
    '@type': 'WebApplication',
    name: 'PascalCSS',
    url: siteUrl,
    description:
      'Zero-Build Utility CSS Framework with PascalCase Naming. Easy to learn, fast to use.',
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
      url: siteUrl,
    },
  },
])

useSeoMeta({
  ogImage: `${siteUrl}/favicon/og-image.png`,
  ogSiteName: 'PascalCSS',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/favicon/og-image.png`,
})
</script>
