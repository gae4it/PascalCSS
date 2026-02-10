export const useAnalytics = () => {
  const consent = useCookie<'accepted' | 'declined' | null>('cookie-consent', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    default: () => null,
  })

  const isConsentGiven = computed(() => consent.value === 'accepted')

  const acceptCookies = () => {
    consent.value = 'accepted'

    // Inject GA4 script dynamically
    if (import.meta.client && consent.value === 'accepted') {
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
    }
  }

  const declineCookies = () => {
    consent.value = 'declined'
  }

  // Auto-init GA4 if consent was already given
  if (import.meta.client && consent.value === 'accepted') {
    acceptCookies()
  }

  return {
    consent,
    isConsentGiven,
    acceptCookies,
    declineCookies,
  }
}
