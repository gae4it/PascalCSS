<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Playground
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Try PascalCSS classes live. Edit the HTML and see the results instantly.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-16rem)]">
        <!-- Editor Panel -->
        <div class="flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">HTML Editor</h2>
            <div class="flex gap-2">
              <button
                @click="resetCode"
                class="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                @click="copyCode"
                :class="[
                  'px-4 py-2 text-sm rounded-lg transition-colors',
                  codeCopied
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : 'bg-pascal-100 dark:bg-pascal-900 text-pascal-700 dark:text-pascal-300 hover:bg-pascal-200 dark:hover:bg-pascal-800'
                ]"
              >
                {{ codeCopied ? 'Copied!' : 'Copy HTML' }}
              </button>
            </div>
          </div>
          
          <textarea
            v-model="htmlCode"
            class="flex-1 p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl font-mono text-sm resize-none focus:ring-2 focus:ring-pascal-500 focus:border-pascal-500 text-gray-900 dark:text-gray-100"
            placeholder="Write your HTML here..."
            spellcheck="false"
          ></textarea>
        </div>

        <!-- Preview Panel -->
        <div class="flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Live Preview</h2>
            <span class="text-sm text-gray-500 dark:text-gray-400">Auto-updates</span>
          </div>
          
          <div class="flex-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl overflow-auto">
            <div
              class="p-6 min-h-full"
              v-html="sanitizedHtml"
            ></div>
          </div>
        </div>
      </div>

      <!-- Info Box -->
      <div class="mt-6 p-4 bg-pascal-50 dark:bg-pascal-950 border border-pascal-200 dark:border-pascal-800 rounded-xl">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-pascal-600 dark:text-pascal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="text-sm text-pascal-800 dark:text-pascal-200">
            <strong>Tip:</strong> Your code is automatically saved to localStorage. Try PascalCSS classes like 
            <code class="bg-white dark:bg-gray-900 px-2 py-0.5 rounded font-mono text-xs">DisplayFlex</code>, 
            <code class="bg-white dark:bg-gray-900 px-2 py-0.5 rounded font-mono text-xs">Padding20</code>, 
            <code class="bg-white dark:bg-gray-900 px-2 py-0.5 rounded font-mono text-xs">ColorBlue600</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard, useStorage, useDebounceFn } from '@vueuse/core'
import DOMPurify from 'isomorphic-dompurify'

useSeoMeta({
  title: 'Playground - Try PascalCSS Live',
  description: 'Interactive playground to test PascalCSS utility classes in real-time. Write HTML and see live results.',
  ogTitle: 'PascalCSS Playground',
})

const defaultTemplate = `<div class="DisplayFlex JustifyContentCenter AlignItemsCenter" style="min-height: 300px;">
  <div class="Padding20 BackgroundColorBlue50 BorderRadius10">
    <h1 class="FontSize32 ColorBlue700 MarginBottom10">
      Hello PascalCSS! 👋
    </h1>
    <p class="FontSize16 ColorGray600">
      Edit the HTML on the left to see changes here.
    </p>
  </div>
</div>`

// Persist code in localStorage
const htmlCode = useStorage('pascalcss-playground-code', defaultTemplate)

const { copy: copyCode, copied: codeCopied } = useClipboard({ source: htmlCode })

// Debounced sanitization for performance
const sanitizedHtml = ref('')

const updatePreview = useDebounceFn(() => {
  try {
    sanitizedHtml.value = DOMPurify.sanitize(htmlCode.value, {
      ALLOWED_TAGS: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'button', 'img', 'ul', 'ol', 'li', 'section', 'article', 'header', 'footer', 'nav', 'main', 'aside', 'strong', 'em', 'code', 'pre', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th'],
      ALLOWED_ATTR: ['class', 'style', 'href', 'src', 'alt', 'title', 'id'],
    })
  } catch (error) {
    sanitizedHtml.value = '<p class="ColorRed600">Invalid HTML</p>'
  }
}, 300)

watch(htmlCode, updatePreview, { immediate: true })

const resetCode = () => {
  htmlCode.value = defaultTemplate
}
</script>
