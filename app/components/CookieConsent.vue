<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div
        v-if="consent === null"
        class="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl"
      >
        <div class="container mx-auto px-4 py-6">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Cookie Consent
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                We use Google Analytics to understand how you use our site. 
                Your data is never sold. Read our 
                <NuxtLink to="/privacy" class="text-pascal-600 dark:text-pascal-400 hover:underline">
                  Privacy Policy
                </NuxtLink> 
                for more information.
              </p>
            </div>
            
            <div class="flex items-center gap-3 flex-shrink-0">
              <button
                @click="handleDecline"
                class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Decline
              </button>
              <button
                @click="handleAccept"
                class="px-6 py-2 text-sm font-medium bg-pascal-600 hover:bg-pascal-700 text-white rounded-lg transition-colors shadow-sm"
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
