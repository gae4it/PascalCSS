import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginTailwindcss from 'eslint-plugin-tailwindcss'

export default tseslint.config(
  {
    ignores: [
      '.nuxt',
      '.output',
      'dist',
      'node_modules',
      '.nitro',
      'build',
      'coverage',
      '.eslintcache',
      '.turbo',
      '.cache',
      'public/data/classes.json',
    ],
  },
  {
    languageOptions: {
      globals: {
        // Nuxt 4 auto-imported composables and functions
        defineNuxtConfig: 'readonly',
        defineNuxtPlugin: 'readonly',
        definePageMeta: 'readonly',
        defineRouteMiddleware: 'readonly',
        navigateTo: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useState: 'readonly',
        useFetch: 'readonly',
        useAsyncData: 'readonly',
        useLazyAsyncData: 'readonly',
        useLazyFetch: 'readonly',
        useHydration: 'readonly',
        useNuxtData: 'readonly',
        useAppConfig: 'readonly',
        useRuntimeConfig: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useServerSeoMeta: 'readonly',
        useSchemaOrg: 'readonly',
        usePayloadExtraction: 'readonly',
        useColorMode: 'readonly',
        useCookie: 'readonly',
        useStorage: 'readonly',
        useClipboard: 'readonly',
        useEventListener: 'readonly',
        useDebounceFn: 'readonly',
        useMagicKeys: 'readonly',
        // Vue 3 auto-imported functions
        ref: 'readonly',
        computed: 'readonly',
        reactive: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        onMounted: 'readonly',
        onBeforeMount: 'readonly',
        onAfterMount: 'readonly',
        onBeforeUnmount: 'readonly',
        onUnmounted: 'readonly',
        NuxtLink: 'readonly',
        Teleport: 'readonly',
        Transition: 'readonly',
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  pluginPrettier,
  pluginTailwindcss.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
      'prettier/prettier': 'warn',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  }
)
