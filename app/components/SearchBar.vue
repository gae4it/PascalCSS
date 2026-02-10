<template>
  <div class="relative">
    <div class="relative">
      <input
        :value="modelValue"
        type="text"
        placeholder="Search classes... (Cmd/Ctrl + K)"
        class="w-full rounded-xl border-2 border-gray-300 bg-white px-5 py-4 pl-12 pr-4 text-lg text-gray-900 transition-all placeholder:text-gray-400 focus:border-pascal-500 focus:ring-2 focus:ring-pascal-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @keydown="handleKeydown"
      />
      <svg
        class="absolute left-4 top-1/2 size-6 -translate-y-1/2 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <div class="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">
      Press <kbd class="rounded bg-gray-200 px-2 py-1 font-mono text-xs dark:bg-gray-800">⌘</kbd> +
      <kbd class="rounded bg-gray-200 px-2 py-1 font-mono text-xs dark:bg-gray-800">K</kbd> to focus
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    ;(e.target as HTMLInputElement).blur()
  }
}

// Keyboard shortcut Cmd/Ctrl + K
const keys = useMagicKeys()
const cmdK = keys['Meta+K']
const ctrlK = keys['Ctrl+K']

watch([cmdK, ctrlK], ([cmd, ctrl]) => {
  if (cmd || ctrl) {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement
    if (input) {
      input.focus()
      input.select()
    }
  }
})
</script>
