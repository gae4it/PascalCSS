<template>
  <div class="min-h-screen bg-gray-50 py-8 dark:bg-gray-950">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">Playground</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Try PascalCSS classes live. Edit the HTML and see the results instantly.
        </p>
      </div>

      <div class="grid h-[calc(100vh-16rem)] grid-cols-1 gap-6 lg:grid-cols-2">
        <!-- Editor Panel -->
        <div class="flex flex-col">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">HTML Editor</h2>
            <div class="flex gap-2">
              <button
                class="rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                @click="resetCode"
              >
                Reset
              </button>
              <button
                :class="[
                  'rounded-lg px-4 py-2 text-sm transition-colors',
                  codeCopied
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    : 'bg-pascal-100 text-pascal-700 hover:bg-pascal-200 dark:bg-pascal-900 dark:text-pascal-300 dark:hover:bg-pascal-800',
                ]"
                type="button"
                @click="() => copyCode()"
              >
                {{ codeCopied ? 'Copied!' : 'Copy HTML' }}
              </button>
            </div>
          </div>

          <textarea
            v-model="htmlCode"
            class="flex-1 resize-none rounded-xl border border-gray-300 bg-white p-4 font-mono text-sm text-gray-900 focus:border-pascal-500 focus:ring-2 focus:ring-pascal-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            placeholder="Write your HTML here..."
            spellcheck="false"
          ></textarea>
        </div>

        <!-- Preview Panel -->
        <div class="flex flex-col">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Live Preview</h2>
            <span class="text-sm text-gray-500 dark:text-gray-400">Auto-updates</span>
          </div>

          <div
            class="flex-1 overflow-auto rounded-xl border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="min-h-full p-6" v-html="sanitizedHtml"></div>
          </div>
        </div>
      </div>

      <!-- Info Box -->
      <div
        class="mt-12 rounded-xl border border-pascal-200 bg-pascal-50 p-4 dark:border-pascal-800 dark:bg-pascal-950 md:mt-6"
      >
        <div class="flex items-start gap-3">
          <svg
            class="mt-0.5 size-5 shrink-0 text-pascal-600 dark:text-pascal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div class="text-sm text-pascal-800 dark:text-pascal-200">
            <strong>Tip:</strong> Your code is automatically saved to localStorage. Try PascalCSS
            classes like
            <code class="rounded bg-white px-2 py-0.5 font-mono text-xs dark:bg-gray-900"
              >DisplayFlex</code
            >,
            <code class="rounded bg-white px-2 py-0.5 font-mono text-xs dark:bg-gray-900"
              >Padding20</code
            >,
            <code class="rounded bg-white px-2 py-0.5 font-mono text-xs dark:bg-gray-900"
              >ColorBlue600</code
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard, useStorage, useDebounceFn } from '@vueuse/core'
import DOMPurify from 'isomorphic-dompurify'

const {
  public: { siteUrl },
} = useRuntimeConfig()

useSeoMeta({
  title: 'Playground - Try PascalCSS Live',
  description:
    'Interactive playground to test PascalCSS utility classes in real-time. Write HTML and see live results.',
  ogTitle: 'PascalCSS Playground',
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    name: 'Playground - Try PascalCSS Live',
    description:
      'Interactive playground to test PascalCSS utility classes in real-time. Write HTML and see live results.',
    url: `${siteUrl}/playground`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PascalCSS',
      url: siteUrl,
    },
  },
])

const defaultTemplate = `<div class="DisplayFlex JustifyContentCenter AlignItemsCenter" style="min-height: 300px;">
  <div class="Padding20 BgWhite BorderRadius10">
    <h1 class="Fs20 FcBlue500  MarginBottom10">
      Hello PascalCSS! 👋
    </h1>
    <p class="Fs8 ColorGray600">
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
      ALLOWED_TAGS: [
        'div',
        'span',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'a',
        'button',
        'img',
        'ul',
        'ol',
        'li',
        'section',
        'article',
        'header',
        'footer',
        'nav',
        'main',
        'aside',
        'strong',
        'em',
        'code',
        'pre',
        'blockquote',
        'table',
        'thead',
        'tbody',
        'tr',
        'td',
        'th',
      ],
      ALLOWED_ATTR: ['class', 'style', 'href', 'src', 'alt', 'title', 'id'],
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    sanitizedHtml.value = '<p class="ColorRed600">Invalid HTML</p>'
  }
}, 300)

watch(htmlCode, updatePreview, { immediate: true })

const resetCode = () => {
  htmlCode.value = defaultTemplate
}
</script>
