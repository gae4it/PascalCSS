declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

type GA4EventParams = Record<string, string | number | boolean | string[]>
type ConsentValue = 'all' | 'necessary' | 'none'

export const useAnalytics = () => {
  const consentCookie = useCookie<ConsentValue | null>('cookie_consent', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    default: () => null,
  })

  const consent = useState<ConsentValue | null>('cookie-consent-state', () => null)
  const isClientReady = useState<boolean>('cookie-consent-ready', () => false)
  const isConsentGiven = computed(() => consent.value === 'all')
  const ga4Injected = useState<boolean>('ga4-injected', () => false)
  const goatCounterInjected = useState<boolean>('goatcounter-injected', () => false)

  const isValidConsent = (value: unknown): value is ConsentValue =>
    value === 'all' || value === 'necessary' || value === 'none'

  const readStoredConsent = (): ConsentValue | null => {
    if (isValidConsent(consentCookie.value)) return consentCookie.value

    if (import.meta.client) {
      const localValue = window.localStorage.getItem('cookie_consent')
      if (isValidConsent(localValue)) return localValue
    }

    return null
  }

  const writeConsent = (value: ConsentValue | null) => {
    consent.value = value
    consentCookie.value = value

    if (import.meta.client) {
      if (value) {
        window.localStorage.setItem('cookie_consent', value)
      } else {
        window.localStorage.removeItem('cookie_consent')
      }
    }
  }

  const injectGA4Script = () => {
    if (!import.meta.client || ga4Injected.value) return

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

    ga4Injected.value = true
  }

  const injectGoatCounterScript = () => {
    if (!import.meta.client || goatCounterInjected.value) return

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

    goatCounterInjected.value = true
  }

  const acceptAllCookies = () => {
    writeConsent('all')
    injectGA4Script()
    injectGoatCounterScript()
  }

  const acceptNecessaryCookies = () => {
    writeConsent('necessary')
  }

  const rejectAllCookies = () => {
    writeConsent('none')
  }

  const resetConsent = () => {
    writeConsent(null)
  }

  const trackEvent = (eventName: string, eventParams?: GA4EventParams): void => {
    if (!import.meta.client || consent.value !== 'all') return

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  onMounted(() => {
    const storedConsent = readStoredConsent()
    consent.value = storedConsent
    isClientReady.value = true

    if (storedConsent === 'all') {
      injectGA4Script()
      injectGoatCounterScript()
    }
  })

  // Track pageviews
  const router = useRouter()
  if (import.meta.client) {
    watch(
      () => router.currentRoute.value.path,
      () => {
        if (consent.value === 'all' && typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', useRuntimeConfig().public.gaId, {
            page_path: router.currentRoute.value.path,
          })
        }
      }
    )
  }

  return {
    consent,
    isClientReady,
    isConsentGiven,
    acceptAllCookies,
    acceptNecessaryCookies,
    rejectAllCookies,
    resetConsent,
    trackEvent,
  }
}
