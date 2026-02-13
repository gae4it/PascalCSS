declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

type GA4EventParams = Record<string, string | number | boolean | string[]>

export const useAnalytics = () => {
  const config = useRuntimeConfig()
  const ga4Injected = useState<boolean>('ga4-injected', () => false)
  const goatCounterInjected = useState<boolean>('goatcounter-injected', () => false)

  const injectGA4Script = () => {
    if (!import.meta.client || ga4Injected.value) return

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

    ga4Injected.value = true
  }

  const injectGoatCounterScript = () => {
    if (!import.meta.client || goatCounterInjected.value) return

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

    goatCounterInjected.value = true
  }

  const trackEvent = (eventName: string, eventParams?: GA4EventParams): void => {
    if (!import.meta.client) return

    // Check if google-analytics cookie is enabled
    const cookieControl = useCookieControl()
    const isAnalyticsEnabled = cookieControl.cookiesEnabledIds.value?.includes('google-analytics')

    if (!isAnalyticsEnabled) return

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  const isConsentGiven = computed(() => {
    const cookieControl = useCookieControl()
    return cookieControl.cookiesEnabledIds.value?.includes('google-analytics') ?? false
  })

  onMounted(() => {
    const cookieControl = useCookieControl()

    // 1. Always inject GoatCounter (privacy-first, no consent needed)
    injectGoatCounterScript()

    // 2. Watch for changes in cookie settings for GA4 only
    watch(
      () => cookieControl.cookiesEnabledIds.value,
      (enabledIds) => {
        if (enabledIds?.includes('google-analytics')) {
          injectGA4Script()
        }
      },
      { immediate: true }
    )
  })

  // Track pageviews
  const router = useRouter()
  if (import.meta.client) {
    watch(
      () => router.currentRoute.value.path,
      () => {
        const cookieControl = useCookieControl()
        const isAnalyticsEnabled =
          cookieControl.cookiesEnabledIds.value?.includes('google-analytics')

        if (isAnalyticsEnabled && typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', config.public.gaId, {
            page_path: router.currentRoute.value.path,
          })
        }
      }
    )
  }

  return {
    isConsentGiven,
    trackEvent,
  }
}
