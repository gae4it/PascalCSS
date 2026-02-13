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
    '@dargmuesli/nuxt-cookie-control',
  ],

  cookieControl: {
    barPosition: 'bottom-right',
    closeModalOnClickOutside: true,
    isAcceptNecessaryButtonEnabled: true,
    isControlButtonEnabled: true,
    isCookieIdVisible: false,
    isDashInDescriptionEnabled: true,
    isIframeBlocked: false,
    isModalForced: false,
    isCssEnabled: true,
    locales: ['en'],
    localeTexts: {
      en: {
        barDescription:
          'We use our own cookies and third-party cookies so that we can display this website correctly and better understand how this website is used, with a view to improving the services we offer. A decision on cookie usage permissions can be changed anytime using the cookie button that will appear after a selection has been made on this banner.',
      },
    },
    colors: {
      barBackground: '#f8fafc',
      barButtonBackground: '#0369a1',
      barButtonColor: '#ffffff',
      barButtonHoverBackground: '#0284c7',
      barButtonHoverColor: '#ffffff',
      barTextColor: '#1e293b',
      checkboxActiveBackground: '#0369a1',
      checkboxActiveCircleBackground: '#ffffff',
      checkboxDisabledBackground: '#cbd5e1',
      checkboxDisabledCircleBackground: '#ffffff',
      checkboxInactiveBackground: '#e2e8f0',
      checkboxInactiveCircleBackground: '#ffffff',
      controlButtonBackground: '#0369a1',
      controlButtonHoverBackground: '#0284c7',
      controlButtonIconColor: '#ffffff',
      controlButtonIconHoverColor: '#ffffff',
      focusRingColor: '#0284c7',
      modalBackground: '#ffffff',
      modalButtonBackground: '#0369a1',
      modalButtonColor: '#ffffff',
      modalButtonHoverBackground: '#0284c7',
      modalButtonHoverColor: '#ffffff',
      modalOverlay: '#000000',
      modalOverlayOpacity: 0.6,
      modalTextColor: '#1e293b',
      modalUnsavedColor: '#f59e0b',
    },
    cookies: {
      necessary: [
        {
          id: 'goat-counter',
          name: 'GoatCounter Analytics',
          description: 'Privacy-friendly analytics. No personal data or cookies used.',
          links: {
            'https://www.goatcounter.com': 'GoatCounter.com',
          },
        },
      ],
      optional: [
        {
          id: 'google-analytics',
          name: 'Google Analytics 4',
          description:
            'Helps us understand how visitors interact with the site to improve your experience.',
          links: {
            'https://pascalcss.netlify.app/privacy': 'Privacy Policy',
          },
        },
      ],
    },
  },

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
      siteUrl: 'https://pascalcss.netlify.app',
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
          href: 'https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.2.0/dist/pascal-css.min.css',
        },
      ],
    },
  },

  sitemap: {
    enabled: true,
    sitemapName: 'sitemap.xml',
    autoLastmod: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/docs', '/playground', '/privacy', '/terms'],
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
