<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Privacy Policy</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Introduction</h2>
          <p class="text-gray-600 dark:text-gray-400">
            PascalCSS ("we", "our", or "us") is a non-commercial educational study project. 
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Data We Collect</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            We only collect data if you explicitly consent to our cookie policy. When you accept cookies, we use:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li><strong>Google Analytics 4:</strong> To understand how visitors use our site (page views, session duration, geographic location)</li>
            <li><strong>Cookies:</strong> To remember your cookie consent preference and dark mode setting</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">How We Use Your Data</h2>
          <p class="text-gray-600 dark:text-gray-400">
            Analytics data is used solely to improve the website experience and understand usage patterns. 
            <strong class="text-pascal-600 dark:text-pascal-400">We do not sell, rent, or share your data with third parties for commercial purposes.</strong>
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Your Rights</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">You have the right to:</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Decline or revoke cookie consent at any time</li>
            <li>Browse the site without being tracked (decline cookies)</li>
            <li>Request deletion of any data we may have collected</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Third-Party Services</h2>
          <p class="text-gray-600 dark:text-gray-400">
            We use Google Analytics 4, which is governed by 
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-pascal-600 dark:text-pascal-400 hover:underline">
              Google's Privacy Policy
            </a>.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact</h2>
          <p class="text-gray-600 dark:text-gray-400">
            For privacy concerns, please visit our 
            <a href="https://github.com/gae4it/pascal-css" target="_blank" rel="noopener noreferrer" class="text-pascal-600 dark:text-pascal-400 hover:underline">
              GitHub repository
            </a>.
          </p>
        </section>

        <div class="mt-12 p-6 bg-pascal-50 dark:bg-pascal-950 border border-pascal-200 dark:border-pascal-800 rounded-xl">
          <p class="text-pascal-800 dark:text-pascal-200 font-medium">
            ✅ This is a non-commercial study project. Your data is never sold or used for commercial purposes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - PascalCSS',
  description: 'Privacy policy for PascalCSS. Learn how we protect your data.',
})
</script>
