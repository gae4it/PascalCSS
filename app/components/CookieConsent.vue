<template>
  <Transition name="slide-up">
    <div
      v-if="isConsentMissing"
      class="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div class="flex-1">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-gray-100">Cookie Consent</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              We use Google Analytics 4 and GoatCounter for anonymous visit statistics to improve
              the site. Your data is never sold. You can accept all cookies, only necessary ones, or
              reject everything. Read our
              <NuxtLink to="/privacy" class="text-pascal-600 hover:underline dark:text-pascal-400">
                Privacy Policy
              </NuxtLink>
              for more information.
            </p>
          </div>

          <div class="flex shrink-0 flex-wrap items-center gap-3">
            <button
              class="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              @click="handleRejectAll"
            >
              Reject All
            </button>
            <button
              class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              @click="handleNecessaryOnly"
            >
              Necessary Only
            </button>
            <button
              class="rounded-lg bg-pascal-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-pascal-700"
              @click="handleAcceptAll"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useAnalytics } from '~/composables/useAnalytics'

const { consent, isClientReady, acceptAllCookies, acceptNecessaryCookies, rejectAllCookies } =
  useAnalytics()
const isConsentMissing = computed(
  () =>
    !isClientReady.value ||
    (consent.value !== 'all' && consent.value !== 'necessary' && consent.value !== 'none')
)

const handleAcceptAll = () => {
  acceptAllCookies()
}

const handleNecessaryOnly = () => {
  acceptNecessaryCookies()
}

const handleRejectAll = () => {
  rejectAllCookies()
}

onMounted(() => {
  const inlineBanner = document.getElementById('cookie-consent-inline')
  if (inlineBanner) {
    inlineBanner.remove()
  }
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
