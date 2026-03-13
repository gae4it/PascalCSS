<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <div class="container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">Class Reference</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Searchable documentation for all PascalCSS utility classes
        </p>
        <div
          class="mt-4 rounded-lg border border-pascal-200 bg-white p-4 dark:border-pascal-800 dark:bg-gray-900"
        >
          <p class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            PascalCSS v4.0.0 release integrated
          </p>
          <code
            class="block overflow-x-auto rounded bg-gray-50 p-3 font-mono text-xs text-gray-800 dark:bg-gray-950 dark:text-gray-200"
            >&lt;link rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@4.0.0/pascal-css.css"&gt;</code
          >
        </div>

        <div
          class="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950"
        >
          <p class="mb-2 text-sm font-semibold text-blue-800 dark:text-blue-200">
            🖥️ Responsive Layout Engine
          </p>
          <p class="mb-3 text-sm text-blue-700 dark:text-blue-300">
            Every utility class supports responsive variants via breakpoint prefixes. Apply any
            class conditionally at a specific viewport width:
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="bp in [
                { prefix: 'Sm:', label: '≥ 640px' },
                { prefix: 'Md:', label: '≥ 768px' },
                { prefix: 'Lg:', label: '≥ 1024px' },
                { prefix: 'Xl:', label: '≥ 1280px' },
                { prefix: 'Xxl:', label: '≥ 1536px' },
              ]"
              :key="bp.prefix"
              class="rounded bg-blue-100 px-2 py-1 font-mono text-xs font-bold text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {{ bp.prefix }}
              <span class="ml-1 font-normal text-blue-600 dark:text-blue-400">{{ bp.label }}</span>
            </span>
          </div>
          <p class="mt-3 text-xs text-blue-600 dark:text-blue-400">
            Example:
            <code class="rounded bg-blue-100 px-1 py-0.5 dark:bg-blue-900">FlexDirectionRow</code>
            →
            <code class="rounded bg-blue-100 px-1 py-0.5 dark:bg-blue-900"
              >Sm:FlexDirectionColumn</code
            >
            →
            <code class="rounded bg-blue-100 px-1 py-0.5 dark:bg-blue-900"
              >Lg:FlexDirectionRow</code
            >
          </p>
        </div>
      </div>

      <SearchBar v-model="searchQuery" />

      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <DocsSidebar v-model="activeCategory" :categories="categories" />
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-3">
          <div v-if="filteredClasses.length === 0" class="py-16 text-center">
            <svg
              class="mx-auto mb-4 size-16 text-gray-400"
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
            <p class="text-gray-600 dark:text-gray-400">
              No classes found matching "{{ searchQuery }}"
            </p>
          </div>

          <div v-else class="space-y-8">
            <div v-for="category in displayCategories" :key="category.category">
              <h2
                :id="category.category.toLowerCase()"
                class="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 dark:text-gray-100"
              >
                {{ category.category }}
              </h2>
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ClassCard
                  v-for="utility in category.utilities"
                  :key="utility.name"
                  :class-name="utility.name"
                  :property="utility.property"
                  :responsive="utility.responsive"
                  :preview="utility.preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CategoryData } from '~/types/classes'
import Fuse from 'fuse.js'

const {
  public: { siteUrl },
} = useRuntimeConfig()

type ClassWithCategory = {
  name: string
  property: string
  value?: string
  responsive?: string[]
  category: string
}

useSeoMeta({
  title: 'Documentation - PascalCSS Class Reference',
  description:
    'Complete searchable reference for all PascalCSS utility classes. Find the perfect class for your needs.',
  ogTitle: 'PascalCSS Documentation',
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    name: 'Documentation - PascalCSS Class Reference',
    description:
      'Complete searchable reference for all PascalCSS utility classes. Find the perfect class for your needs.',
    url: `${siteUrl}/docs`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PascalCSS',
      url: siteUrl,
    },
  },
])

const searchQuery = ref('')
const activeCategory = ref<string | null>(null)
const classesData = ref<CategoryData[]>([])

// Load classes data only on client
const { data: fetchedData } = await useFetch<CategoryData[]>('/data/classes.json', {
  server: false, // Don't fetch on server, only on client
})

watch(
  fetchedData,
  (newData) => {
    if (newData) {
      classesData.value = newData
    }
  },
  { immediate: true }
)

const categories = computed(() => classesData.value || [])

// Setup Fuse.js for fuzzy search
const fuse = computed(() => {
  if (!categories.value.length) return null

  const allClasses = categories.value.flatMap((cat: CategoryData) =>
    cat.utilities.map((util) => ({
      ...util,
      category: cat.category,
    }))
  )

  return new Fuse(allClasses, {
    keys: ['name', 'property', 'category'],
    threshold: 0.3,
    includeScore: true,
  })
})

// Filter classes based on search and category
const filteredClasses = computed(() => {
  if (!categories.value.length) return []

  let results = categories.value

  // Filter by active category
  if (activeCategory.value) {
    results = results.filter((cat: CategoryData) => cat.category === activeCategory.value)
  }

  // Apply fuzzy search
  if (searchQuery.value && fuse.value) {
    const searchResults = fuse.value.search(searchQuery.value)
    const matchedClasses = searchResults.map((result) => result.item as ClassWithCategory)

    // Group back into categories
    const categoryMap = new Map<string, CategoryData>()

    matchedClasses.forEach((item: ClassWithCategory) => {
      if (!categoryMap.has(item.category)) {
        categoryMap.set(item.category, {
          category: item.category,
          utilities: [],
        })
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { category, ...utility } = item
      categoryMap.get(item.category)!.utilities.push(utility)
    })

    return Array.from(categoryMap.values())
  }

  return results
})

const displayCategories = computed(() => filteredClasses.value)

// Watch for hash changes to scroll to category
watchEffect(() => {
  if (import.meta.client) {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
})
</script>
