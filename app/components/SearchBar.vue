<template>
  <div class="relative">
    <div class="relative">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        type="text"
        placeholder="Search classes... (Cmd/Ctrl + K)"
        class="w-full px-5 py-4 pl-12 pr-4 text-lg bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-pascal-500 focus:border-pascal-500 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
        @keydown="handleKeydown"
      />
      <svg
        class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
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
    <div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-right">
      Press <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-xs font-mono">⌘</kbd> + 
      <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-xs font-mono">K</kbd> to focus
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
    (e.target as HTMLInputElement).blur()
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
