// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-schema-org',
  ],

  site: {
    url: 'https://pascalcss.netlify.app',
    name: 'PascalCSS',
    description: 'Zero-Build Utility CSS with PascalCase Readability',
    defaultLocale: 'en',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  runtimeConfig: {
    public: {
      gaId: process.env.NUXT_PUBLIC_GA_ID || 'G-JGLJRGEHL4',
      cronitorClientKey: process.env.NUXT_PUBLIC_CRONITOR_CLIENT_KEY || '',
      goatCounterCode: process.env.NUXT_PUBLIC_GOATCOUNTER_CODE || '',
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#ec4899' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
      ],
      link: [
        // Favicon - primary
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },

        // Apple touch icon
        { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180' },

        // Chrome/Android icons
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },

        // Web app manifest
        { rel: 'manifest', href: '/favicon/site.webmanifest' },

        // Preconnect to CDN
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },

        // PascalCSS stylesheet
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.1.0/dist/pascal-css.min.css',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    externals: {
      inline: ['unhead'],
    },
    preset: 'static',
  },

  hooks: {
    'build:before': async () => {
      // Will run the CSS parser script before build
      console.log('Ensuring classes.json is up-to-date...')
    },
  },
})
