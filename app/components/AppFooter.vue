<template>
  <footer class="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div
            class="mb-4 bg-gradient-to-r from-pascal-600 to-pascal-400 bg-clip-text text-2xl font-bold text-transparent"
          >
            PascalCSS
          </div>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            Zero-Build Utility CSS with PascalCase Readability
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500">
            Non-commercial study project. No data is sold.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-gray-100">Resources</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/docs"
                class="text-gray-600 transition-colors hover:text-pascal-600 dark:text-gray-400 dark:hover:text-pascal-400"
              >
                Documentation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/playground"
                class="text-gray-600 transition-colors hover:text-pascal-600 dark:text-gray-400 dark:hover:text-pascal-400"
              >
                Playground
              </NuxtLink>
            </li>
            <li>
              <a
                href="https://github.com/gae4it/pascal-css"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 transition-colors hover:text-pascal-600 dark:text-gray-400 dark:hover:text-pascal-400"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-gray-100">Legal</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/privacy"
                class="text-gray-600 transition-colors hover:text-pascal-600 dark:text-gray-400 dark:hover:text-pascal-400"
              >
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="text-gray-600 transition-colors hover:text-pascal-600 dark:text-gray-400 dark:hover:text-pascal-400"
              >
                Terms of Service
              </NuxtLink>
            </li>
            <li>
              <button
                type="button"
                class="text-gray-600 transition-colors hover:text-pascal-600 dark:text-gray-400 dark:hover:text-pascal-400"
                @click="resetCookieConsent"
              >
                Reset Cookie Consent
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
      >
        &copy; {{ new Date().getFullYear() }} PascalCSS. Educational project.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAnalytics } from '~/app/composables/useAnalytics'

const { resetConsent } = useAnalytics()

const resetCookieConsent = () => {
  resetConsent()
}
</script>
