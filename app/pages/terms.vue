<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Terms of Service</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">1. Acceptance of Terms</h2>
          <p class="text-gray-600 dark:text-gray-400">
            By accessing and using PascalCSS, you accept and agree to be bound by these Terms of Service. 
            This is an educational, non-commercial study project provided "as is" without warranties.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">2. Use License</h2>
          <p class="text-gray-600 dark:text-gray-400">
            PascalCSS is provided for educational and personal use. You may:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mt-4">
            <li>Use the CSS framework in your personal or commercial projects</li>
            <li>Modify and redistribute the framework (subject to license terms)</li>
            <li>Study and learn from the implementation</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">3. Disclaimer</h2>
          <p class="text-gray-600 dark:text-gray-400">
            <strong>This is a study project.</strong> While we strive for quality:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mt-4">
            <li>No warranties are provided, express or implied</li>
            <li>Use at your own risk</li>
            <li>Not recommended for production-critical applications without thorough testing</li>
            <li>Updates and support are not guaranteed</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">4. Limitation of Liability</h2>
          <p class="text-gray-600 dark:text-gray-400">
            In no event shall PascalCSS or its contributors be liable for any damages arising from the use 
            or inability to use this framework.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">5. Intellectual Property</h2>
          <p class="text-gray-600 dark:text-gray-400">
            The PascalCSS framework and documentation are open source. Please refer to the 
            <a href="https://github.com/gae4it/pascal-css" target="_blank" rel="noopener noreferrer" class="text-pascal-600 dark:text-pascal-400 hover:underline">
              GitHub repository
            </a> 
            for specific license information.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">6. Changes to Terms</h2>
          <p class="text-gray-600 dark:text-gray-400">
            We reserve the right to modify these terms at any time. Continued use of the site after changes 
            constitutes acceptance of the new terms.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">7. Governing Law</h2>
          <p class="text-gray-600 dark:text-gray-400">
            These terms are governed by applicable laws. As this is a non-commercial educational project, 
            disputes should be resolved informally when possible.
          </p>
        </section>

        <div class="mt-12 p-6 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
          <p class="text-gray-700 dark:text-gray-300">
            <strong>Questions?</strong> Contact us via our 
            <a href="https://github.com/gae4it/pascal-css" target="_blank" rel="noopener noreferrer" class="text-pascal-600 dark:text-pascal-400 hover:underline">
              GitHub repository
            </a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service - PascalCSS',
  description: 'Terms of Service for PascalCSS framework and documentation site.',
})
</script>
