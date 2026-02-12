declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

type GA4EventParams = Record<string, string | number | boolean | string[]>

export const useAnalytics = () => {
  const consent = useCookie<'all' | 'necessary' | 'none' | null>('cookie_consent', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    default: () => null,
  })

  const isConsentGiven = computed(() => consent.value === 'all')
  let ga4Injected = false
  let goatCounterInjected = false

  const injectGA4Script = () => {
    if (!import.meta.client || ga4Injected) return

    const config = useRuntimeConfig()
    const gaId = config.public.gaId || 'G-XXXXXXXXXX'

    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        },
      ],
    })

    ga4Injected = true
  }

  const injectGoatCounterScript = () => {
    if (!import.meta.client || goatCounterInjected) return

    const config = useRuntimeConfig()
    const goatCounterCode = config.public.goatCounterCode

    if (!goatCounterCode) return

    useHead({
      script: [
        {
          src: '//gc.zgo.at/count.js',
          async: true,
          'data-goatcounter': `https://${goatCounterCode}.goatcounter.com/count`,
        },
      ],
    })

    goatCounterInjected = true
  }

  const acceptAllCookies = () => {
    consent.value = 'all'
    injectGA4Script()
    injectGoatCounterScript()
  }

  const acceptNecessaryCookies = () => {
    consent.value = 'necessary'
  }

  const rejectAllCookies = () => {
    consent.value = 'none'
  }

  const trackEvent = (eventName: string, eventParams?: GA4EventParams): void => {
    if (!import.meta.client || consent.value !== 'all') return

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  // Auto-init GA4 and GoatCounter if consent was already given
  if (import.meta.client && consent.value === 'all') {
    injectGA4Script()
    injectGoatCounterScript()
  }

  // Track pageviews
  const router = useRouter()
  if (import.meta.client && consent.value === 'all') {
    watch(
      () => router.currentRoute.value.path,
      () => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', useRuntimeConfig().public.gaId, {
            page_path: router.currentRoute.value.path,
          })
        }
      }
    )
  }

  return {
    consent,
    isConsentGiven,
    acceptAllCookies,
    acceptNecessaryCookies,
    rejectAllCookies,
    trackEvent,
  }
}
