<template>
  <aside class="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
    <nav
      class="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
    >
      <h3
        class="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100"
      >
        Categories
      </h3>
      <ul class="space-y-1">
        <li>
          <button
            :class="[
              'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
              modelValue === null
                ? 'bg-pascal-100 font-medium text-pascal-700 dark:bg-pascal-900 dark:text-pascal-300'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
            ]"
            @click="selectCategory(null)"
          >
            All Classes
          </button>
        </li>
        <li v-for="category in categories" :key="category.category">
          <button
            :class="[
              'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
              modelValue === category.category
                ? 'bg-pascal-100 font-medium text-pascal-700 dark:bg-pascal-900 dark:text-pascal-300'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
            ]"
            @click="selectCategory(category.category)"
          >
            {{ category.category }}
            <span class="ml-1 text-xs opacity-60">({{ category.utilities.length }})</span>
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import type { CategoryData } from '~/types/classes'

defineProps<{
  categories: CategoryData[]
  modelValue: string | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const selectCategory = (category: string | null) => {
  emit('update:modelValue', category)

  // Update URL hash
  if (category && import.meta.client) {
    window.location.hash = category.toLowerCase()
  } else if (import.meta.client) {
    history.pushState('', document.title, window.location.pathname + window.location.search)
  }
}
</script>
