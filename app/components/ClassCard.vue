<template>
  <div class="card p-4 hover:shadow-lg transition-all group">
    <div class="flex items-start justify-between">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-2">
          <code class="text-base font-semibold font-mono text-pascal-600 dark:text-pascal-400 break-all">
            {{ className }}
          </code>
          <button
            @click="copyToClipboard"
            :class="[
              'flex-shrink-0 p-1.5 rounded transition-all',
              copied
                ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
            :title="copied ? 'Copied!' : 'Copy class name'"
          >
            <svg v-if="copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        
        <code class="text-sm text-gray-600 dark:text-gray-400 font-mono block">
          {{ property }}
        </code>

        <!-- Responsive variants -->
        <div v-if="responsive && responsive.length" class="mt-3 flex flex-wrap gap-1">
          <span
            v-for="variant in responsive"
            :key="variant"
            class="text-xs bg-pascal-50 dark:bg-pascal-950 text-pascal-700 dark:text-pascal-300 px-2 py-1 rounded font-mono"
          >
            {{ variant }}{{ className }}
          </span>
        </div>

        <!-- Visual preview -->
        <div v-if="preview" class="mt-3">
          <div v-if="preview.type === 'box'" class="flex items-center gap-2">
            <div
              class="w-8 h-8 border-2 border-pascal-300 dark:border-pascal-700 rounded flex items-center justify-center text-xs text-gray-500"
              :style="{ padding: preview.value }"
            >
              <div class="w-2 h-2 bg-pascal-400 dark:bg-pascal-600 rounded"></div>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ preview.value }}</span>
          </div>
          
          <div v-else-if="preview.type === 'color'" class="flex items-center gap-2">
            <div
              class="w-8 h-8 rounded border border-gray-200 dark:border-gray-700"
              :style="{ backgroundColor: preview.value }"
            ></div>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ preview.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import type { ClassPreview } from '~/types/classes'

const props = defineProps<{
  className: string
  property: string
  responsive?: string[]
  preview?: ClassPreview
}>()

const { copy, copied } = useClipboard()

const copyToClipboard = () => {
  copy(props.className)
}
</script>
