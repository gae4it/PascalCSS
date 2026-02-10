PASCALCSS

# Role: Senior Full-Stack Nuxt Architect & SEO Expert

# Task: Scaffold and Develop the PascalCSS Official Landing & Documentation Site

## 1. Project Core Stack

- **Framework:** Nuxt 4 (Latest stable) + Vue 3 (Composition API / Script Setup).

export default defineNuxtConfig({
future: {
compatibilityVersion: 4,
},
})

- **Package Manager:** pnpm.
- **Styling:** TailwindCSS (for the site layout) + integration of the local PascalCSS library for demo sections.
- **Build Tool:** Vite.
- **Linting:** ESLint (with Prettier plugin), Husky, and Lint-Staged for pre-commit hooks.

## 2. Infrastructure & SEO Requirements

- **Hosting:** Netlify (deploy to pascalcss.netlify.app).
- **SEO:** - Implementation of `useSeoMeta` for all pages.
  - Automatic Sitemap generation (`@nuxtjs/sitemap`).
  - Schema.org markup for SoftwareLibrary.
- **Analytics & GDPR:** - Google Analytics 4 integration.
  - Custom-built Cookie Consent Bar: strictly blocking GA4 scripts until user acceptance.
  - Privacy/Legal pages explicitly stating: "Non-commercial study project. No data is sold."

## 3. Site Structure & Marketing Content

- **Home Page (Hero Section):** Catchy headline about "Zero-Build Utility CSS". Clear CTA to "Get Started".
- **Marketing Copy:** Focus on the "PascalCase readability" and "No-JS runtime" benefits. Use SEO-friendly keywords: "Static CSS library", "Utility-first CSS", "PascalCase CSS", "Fastest CSS framework 2026".
- **Documentation:** A clean, searchable sidebar for utility classes (Spacing, Display, Grid, Responsive).
- **Playground Section:** A live preview where users can see PascalCSS classes in action.
- **Legal:** Privacy Policy and Terms of Service (boilerplate for study projects).

## 4. Technical Specifications for Copilot

- Create a `composables/useAnalytics.ts` to manage the GA4 toggle state.
- Ensure all Tailwind configurations are optimized for production.
- Setup a `.eslintrc.cjs` that enforces strict Vue 3 rules.
- Set up a `robots.txt` that allows indexing of the main marketing pages.

## 5. Tone & Voice

The marketing copy should be:

- **Professional yet witty:** "Because your CSS classes should look like your Components."
- **Clear & Concise:** Focus on the "No-Deploy/No-Build" advantage.

This is a crucial feature for your project. A "Cheat Sheet" or "Class Reference" is what makes a CSS library actually usable. Users need to quickly find Padding20 without scrolling through thousands of lines of code.
Here is the Product Requirements Document (PRD) specifically for the Interactive Class Reference page of your Nuxt 4 site.
PRD: PascalCSS Interactive Class Reference (Cheat Sheet)

1. Objective
   To provide a high-performance, searchable, and interactive documentation page where developers can explore the entire PascalCSS utility set, similar to the Tailwind CSS Cheat Sheet experience.
2. Target Features
   A. Real-Time Search & Filtering

- Search Bar: A prominent input field (top of page) that filters classes as the user types.
- Fuzzy Search: If a user types "pad", it should show all Padding, PaddingTop, PaddingX, etc.
- Category Tabs: Sidebar or top navigation to jump between sections (e.g., Layout, Spacing, Typography, Tables, Flexbox).
  B. Class Display Cards
  Each class entry should include:
- Class Name: The PascalCase name (e.g., JustifyContentCenter).
- CSS Property: The underlying CSS rule (e.g., justify-content: center;).
- Copy Action: Click-to-copy functionality for the class name.
- Responsive Variants: A toggle or badge showing available prefixes (Sm:, Md:, Lg:, Xl:).
  C. Live Visual Preview
- Hover Preview: When hovering over a color or spacing class, show a small visual indicator (e.g., a colored square or a highlighted box-model margin).

3. Technical Requirements (Nuxt 4 / Vue 3)
   A. Data Architecture

- JSON Source: Do NOT hardcode the list in HTML. Create a classes.json file or a Nuxt Content collection that stores all class data.
  {
  "category": "Spacing",
  "utilities": [
  { "name": "Padding10", "property": "padding: 1rem;" },
  { "name": "MarginTop15", "property": "margin-top: 1.5rem;" }
  ]
  }

- Computed Filtering: Use a Vue computed property to filter the JSON list based on the search query for instant UI updates.
  B. Performance
- Virtual Scrolling: Since there might be hundreds of classes, use virtual scrolling (e.g., vue-virtual-scroller) to ensure the page remains performant.
- Static Site Generation (SSG): Pre-render the entire cheat sheet during nuxt generate for near-instant load times.

4. UI/UX Design (The "Pascal" Aesthetic)

- Clean & Minimal: High contrast, lots of white space (using PascalCSS classes!).
- Dark Mode Support: Essential for developers.
- Keyboard Navigation: Support CMD/CTRL + K to focus the search bar instantly.

5. Marketing Integration (SEO)

- Dynamic Metadata: Every category (e.g., /docs/spacing) should have unique useSeoMeta tags to capture long-tail search traffic (e.g., "PascalCSS spacing classes").
- Deep Linking: Clicking a category updates the URL fragment (e.g., pascalcss.com/docs#spacing) so users can share specific sections.
  Suggested Next Step:
  Would you like me to generate the Vue 3 Component code for this searchable list, or should we create the JSON data structure first to organize all your current PascalCSS classes?
