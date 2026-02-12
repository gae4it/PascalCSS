<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div
        v-if="consent === null"
        class="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900"
      >
        <div class="container mx-auto px-4 py-6">
          <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div class="flex-1">
              <h3 class="mb-2 font-semibold text-gray-900 dark:text-gray-100">Cookie Consent</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                We use Google Analytics 4 and GoatCounter for anonymous visit statistics to improve
                the site. Your data is never sold. Read our
                <NuxtLink
                  to="/privacy"
                  class="text-pascal-600 hover:underline dark:text-pascal-400"
                >
                  Privacy Policy
                </NuxtLink>
                for more information.
              </p>
            </div>

            <div class="flex shrink-0 items-center gap-3">
              <button
                class="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                @click="handleDecline"
              >
                Decline
              </button>
              <button
                class="rounded-lg bg-pascal-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-pascal-700"
                @click="handleAccept"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useAnalytics } from '~/app/composables/useAnalytics'

const { consent, acceptCookies, declineCookies } = useAnalytics()

const handleAccept = () => {
  acceptCookies()
}

const handleDecline = () => {
  declineCookies()
}
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
