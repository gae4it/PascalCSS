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
  let scriptInjected = false

  const injectGA4Script = () => {
    if (!import.meta.client || scriptInjected) return

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

    scriptInjected = true
  }

  const acceptCookies = () => {
    consent.value = 'accepted'
    injectGA4Script()
  }

  const declineCookies = () => {
    consent.value = 'declined'
  }

  const trackEvent = (eventName: string, eventParams?: GA4EventParams): void => {
    // TESTING: Track always (consent check disabled temporarily)
    // if (!import.meta.client || consent.value !== 'accepted') return
    if (!import.meta.client) return

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  // TESTING: Load GA4 always (consent check disabled temporarily)
  // Auto-init GA4 if consent was already given
  // if (import.meta.client && consent.value === 'accepted') {
  if (import.meta.client) {
    injectGA4Script()
  }

  // Track pageviews
  const router = useRouter()
  // TESTING: Track always (consent check disabled temporarily)
  // if (import.meta.client && consent.value === 'accepted') {
  if (import.meta.client) {
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
