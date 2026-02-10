<template>
  <div class="card group p-4 transition-all hover:shadow-lg">
    <div class="flex items-start justify-between">
      <div class="min-w-0 flex-1">
        <div class="mb-2 flex items-center gap-2">
          <code
            class="break-all font-mono text-base font-semibold text-pascal-600 dark:text-pascal-400"
          >
            {{ className }}
          </code>
          <button
            :class="[
              'shrink-0 rounded p-1.5 transition-all',
              copied
                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
            ]"
            :title="copied ? 'Copied!' : 'Copy class name'"
            @click="copyToClipboard"
          >
            <svg v-if="copied" class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <svg v-else class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>

        <code class="block font-mono text-sm text-gray-600 dark:text-gray-400">
          {{ property }}
        </code>

        <!-- Responsive variants -->
        <div v-if="responsive && responsive.length" class="mt-3 flex flex-wrap gap-1">
          <span
            v-for="variant in responsive"
            :key="variant"
            class="rounded bg-pascal-50 px-2 py-1 font-mono text-xs text-pascal-700 dark:bg-pascal-950 dark:text-pascal-300"
          >
            {{ variant }}{{ className }}
          </span>
        </div>

        <!-- Visual preview -->
        <div v-if="preview" class="mt-3">
          <div v-if="preview.type === 'box'" class="flex items-center gap-2">
            <div
              class="flex size-8 items-center justify-center rounded border-2 border-pascal-300 text-xs text-gray-500 dark:border-pascal-700"
              :style="{ padding: preview.value }"
            >
              <div class="size-2 rounded bg-pascal-400 dark:bg-pascal-600"></div>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ preview.value }}</span>
          </div>

          <div v-else-if="preview.type === 'color'" class="flex items-center gap-2">
            <div
              class="size-8 rounded border border-gray-200 dark:border-gray-700"
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
