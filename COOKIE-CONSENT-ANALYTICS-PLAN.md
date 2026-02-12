# Generic Cookie Bar & Analytics Plan (Universal Prompt)

---

## Objective

Implement a cookie bar with 3 buttons:

- **Accept All** (accepts all cookies and enables analytics)
- **Necessary Only** (only technical/essential cookies, no analytics)
- **Reject All** (rejects everything non-essential)

Valid for **React, Next.js, Vue, Nuxt, Astro** projects.

---

## Required Features

- **Cookie bar** visible until the user makes a choice.
- **Persistence** of the choice via cookie/localStorage (key: `cookie_consent`, values: `all`, `necessary`, `none`).
- **Conditional loading** of analytics scripts **only after consent**.
- **3 buttons**: Accept All, Necessary Only, Reject All.
- **Clear text** explaining the site uses Google Analytics 4 and GoatCounter for visit analysis.
- **Link to privacy policy**.

---

## Supported Analytics

- **Google Analytics 4 (GA4)**
  - Load `gtag.js` script only after consent.
  - Configurable ID (e.g., `G-XXXXXXXXXX`).
  - Consent Mode optional.
- **GoatCounter**
  - Load script only after consent.
  - `data-goatcounter` attribute with your account URL.

---

## Hosting & Privacy

- Hosting on **Netlify** or **Vercel** (USA cloud provider, but with global CDN: static content may be served from nodes in Europe, but logs and technical data are mainly processed in the USA).
- **Study/educational project**: no data is sold, no commercial use.
- **Disclaimer**: the privacy policy should state that data is used only for aggregate analysis, not for profiling or selling.
- **Note**: for personal/educational projects, regulations may be less strict, but it is always good practice to inform users and ask for consent for analytics.

---

## Implementation Prompt (copy/paste)

> Implement a cookie bar with 3 buttons: "Accept All", "Necessary Only", "Reject All". The choice must be saved in a cookie or localStorage (`cookie_consent`: `all`, `necessary`, `none`). Only if the user accepts all cookies, dynamically load:
>
> - Google Analytics 4 (`gtag.js` with configurable ID)
> - GoatCounter (`count.js` with `data-goatcounter` attribute)
>
> The cookie bar must explain that the site uses Google Analytics 4 and GoatCounter for aggregate visit analysis, without profiling or selling data. Add a link to the privacy policy. Hosting on Netlify or Vercel (USA cloud, global CDN). Study project, no commercial use.
>
> The logic must work on React, Next.js, Vue, Nuxt, Astro.

---

## Example text for the cookie bar

> "This site uses Google Analytics 4 and GoatCounter to analyze visits in aggregate. No personal data is sold or used for profiling. You can accept all cookies, only necessary ones, or reject everything. [Privacy Policy](/privacy)"

---

## Example logic (pseudo-code)

```js
// On page load
const consent = getCookie('cookie_consent') // or localStorage
if (consent === 'all') {
  loadGA4()
  loadGoatCounter()
}
// ...show bar if consent === null

// On Accept All
setCookie('cookie_consent', 'all')
loadGA4()
loadGoatCounter()

// On Necessary Only
setCookie('cookie_consent', 'necessary')
// do not load analytics

// On Reject All
setCookie('cookie_consent', 'none')
// do not load analytics
```

---

## Example scripts

**Google Analytics 4**

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'G-XXXXXXXXXX')
</script>
```

**GoatCounter**

```html
<script
  data-goatcounter="https://yourcode.goatcounter.com/count"
  async
  src="//gc.zgo.at/count.js"
></script>
```

---

## Final notes

- Adapt the logic to React, Next.js, Vue, Nuxt, Astro according to your chosen framework.
- Remember to update the privacy policy and always declare the use of analytics.
- For study projects, transparency is always the best choice.
