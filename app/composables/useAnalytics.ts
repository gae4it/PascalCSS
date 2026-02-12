declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

type GA4EventParams = Record<string, string | number | boolean | string[]>

export const useAnalytics = () => {
  const consent = useCookie<'accepted' | 'declined' | null>('cookie-consent', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    default: () => null,
  })

  const isConsentGiven = computed(() => consent.value === 'accepted')
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

  const acceptCookies = () => {
    consent.value = 'accepted'
    injectGA4Script()
    injectGoatCounterScript()
  }

  const declineCookies = () => {
    consent.value = 'declined'
  }

  const trackEvent = (eventName: string, eventParams?: GA4EventParams): void => {
    if (!import.meta.client || consent.value !== 'accepted') return

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  // Auto-init GA4 and GoatCounter if consent was already given
  if (import.meta.client && consent.value === 'accepted') {
    injectGA4Script()
    injectGoatCounterScript()
  }

  // Track pageviews
  const router = useRouter()
  if (import.meta.client && consent.value === 'accepted') {
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
    acceptCookies,
    declineCookies,
    trackEvent,
  }
}
