# PascalCSS Documentation Site

Official landing page and documentation for PascalCSS - the Zero-Build Utility CSS Framework.

## � About PascalCSS

PascalCSS is a **static utility-first CSS framework** with **PascalCase naming**.

- ✅ Zero build tools required
- ✅ Just one line to add to your HTML
- ✅ 100% static CSS, no JavaScript
- ✅ Component-style class names (e.g., `DisplayFlex`, `Padding20`, `FcBlue700`)

**Official Release v4.0.0**: [github.com/gae4it/pascal-css](https://github.com/gae4it/pascal-css)

### Installation

**Option 1: CDN (Recommended)**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.0.0/dist/pascal-css.min.css"
/>
```

**Option 2: Local File**
Download from [releases](https://github.com/gae4it/pascal-css/releases/tag/v4.0.0) and add to your project.

## 🚀 Development - This Site

```bash
# Install dependencies
npm install

# Generate classes.json from PascalCSS
npm run generate:classes

# Start development server
npm run dev

# Build for production
npm run generate
```

## 🏗️ Tech Stack

- **Framework:** Nuxt 4 + Vue 3
- **Styling:** TailwindCSS + PascalCSS (v4.0.0 from jsDelivr CDN)
- **Search:** Fuse.js (fuzzy search)
- **Deployment:** Netlify
- **SEO:** Sitemap, Meta tags, Schema.org

## 📁 Project Structure

```
├── app/
│   ├── components/     # Vue components
│   ├── composables/    # Composables (useAnalytics, etc.)
│   ├── layouts/        # Layout components
│   └── pages/          # Pages (index, docs, playground)
├── public/
│   ├── data/           # Generated classes.json
│   └── pascalcss.css   # PascalCSS library
├── scripts/            # Build scripts
└── nuxt.config.ts      # Nuxt configuration
```

## 🎯 Features

- ✅ Interactive documentation with fuzzy search
- ✅ Live playground editor
- ✅ GDPR-compliant cookie consent
- ✅ Dark mode support
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Static site generation

## 📝 Development Notes

The `public/pascalcss.css` file is a placeholder. Replace it with the actual library from [pascal-css repository](https://github.com/gae4it/pascal-css).

Run `npm run generate:classes` to parse the CSS and generate the documentation JSON.

## 📄 License

Educational study project. See LICENSE file.
