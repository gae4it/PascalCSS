<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="text-2xl font-bold bg-gradient-to-r from-pascal-600 to-pascal-400 bg-clip-text text-transparent mb-4">
            PascalCSS
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Zero-Build Utility CSS with PascalCase Readability
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-500">
            Non-commercial study project. No data is sold.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/docs" class="text-gray-600 dark:text-gray-400 hover:text-pascal-600 dark:hover:text-pascal-400 transition-colors">
                Documentation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/playground" class="text-gray-600 dark:text-gray-400 hover:text-pascal-600 dark:hover:text-pascal-400 transition-colors">
                Playground
              </NuxtLink>
            </li>
            <li>
              <a href="https://github.com/gae4it/pascal-css" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-pascal-600 dark:hover:text-pascal-400 transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">Legal</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/privacy" class="text-gray-600 dark:text-gray-400 hover:text-pascal-600 dark:hover:text-pascal-400 transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-gray-600 dark:text-gray-400 hover:text-pascal-600 dark:hover:text-pascal-400 transition-colors">
                Terms of Service
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} PascalCSS. Educational project.
      </div>
    </div>
  </footer>
</template>
