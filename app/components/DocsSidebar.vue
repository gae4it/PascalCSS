<template>
  <aside class="sticky top-24 h-fit">
    <nav class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
      <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm uppercase tracking-wide">
        Categories
      </h3>
      <ul class="space-y-1">
        <li>
          <button
            @click="selectCategory(null)"
            :class="[
              'w-full text-left px-3 py-2 rounded-lg transition-colors text-sm',
              modelValue === null
                ? 'bg-pascal-100 dark:bg-pascal-900 text-pascal-700 dark:text-pascal-300 font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            All Classes
          </button>
        </li>
        <li v-for="category in categories" :key="category.category">
          <button
            @click="selectCategory(category.category)"
            :class="[
              'w-full text-left px-3 py-2 rounded-lg transition-colors text-sm',
              modelValue === category.category
                ? 'bg-pascal-100 dark:bg-pascal-900 text-pascal-700 dark:text-pascal-300 font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            {{ category.category }}
            <span class="text-xs opacity-60 ml-1">({{ category.utilities.length }})</span>
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
