/**
 * Script to parse PascalCSS and generate classes.json
 * Uses the local v4.0.0 release file for stable, offline generation.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CSS_PATH = path.join(__dirname, '../release/pascal-cssV4.0.0.css')
const EXCLUDED_CATEGORIES = new Set([
  'CONTAINER QUERIES (Modern CSS - v3.0)',
  'RESPONSIVE LAYOUT ENGINE',
])

const normalizeCategoryName = (raw) => {
  const cleaned = raw.replace(/\s+/g, ' ').trim()
  return cleaned || 'Misc'
}

const extractCategories = (css) => {
  const headerRegex = /\/\*\s*={5,}[\s\S]*?\*\//g
  const categories = []

  for (const match of css.matchAll(headerRegex)) {
    const block = match[0]
    const lines = block.split('\n').map((line) =>
      line
        .replace(/^\s*\/?\*+/, '')
        .replace(/\*\/\s*$/, '')
        .trim()
    )
    const nameLine = lines.find((line) => line && !/=/.test(line))
    if (nameLine) {
      categories.push({ name: normalizeCategoryName(nameLine), index: match.index ?? 0 })
    }
  }

  return categories
}

const normalizeDeclarations = (body) => {
  const cleaned = body
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const declarations = cleaned
    .split(';')
    .map((decl) => decl.trim())
    .filter(Boolean)
  if (!declarations.length) return ''
  return declarations.map((decl) => `${decl};`).join(' ')
}

const splitClassName = (rawName) => {
  const unescaped = rawName.replace(/\\:/g, ':')
  if (unescaped.includes(':')) {
    const [prefix, base] = unescaped.split(':')
    return { baseName: base, prefix: `${prefix}:` }
  }
  return { baseName: unescaped, prefix: null }
}

const findCategoryForIndex = (index, categories) => {
  let current = categories[0]?.name ?? 'Misc'
  for (const category of categories) {
    if (category.index <= index) {
      current = category.name
    } else {
      break
    }
  }
  return current
}

const inferCategoryFromClassName = (className) => {
  if (
    /^Fs\d+|^Fw\d+|^LineHeight|^Text|^FontStyle|^LetterSpacing|^LineClamp|^Hyphens|^WordBreak|^OverflowWrap|^VerticalAlign/.test(
      className
    )
  ) {
    return 'TYPOGRAPHY'
  }
  if (/^Padding|^Margin|^Gap|^ColumnGap|^RowGap/.test(className)) {
    return 'SPACING'
  }
  if (/^Display|^Position|^Top|^Left|^Right|^Bottom|^Inset|^Overflow/.test(className)) {
    return 'LAYOUT'
  }
  if (/^Flex|^Justify|^Align|^Place/.test(className)) {
    return 'FLEXBOX'
  }
  if (/^Grid/.test(className)) {
    return 'GRID'
  }
  if (
    /^Width|^MinWidth|^MaxWidth|^Height|^MinHeight|^MaxHeight|^Size|^AspectRatio/.test(className)
  ) {
    return 'SIZING'
  }
  if (/^Bg|^Fc|^Bc|^Color|^BorderColor|^Outline/.test(className)) {
    return 'COLORS & BORDERS'
  }
  if (/^Border|^Rounded|^Shadow|^Opacity|^ZIndex/.test(className)) {
    return 'EFFECTS'
  }
  if (
    /^Cursor|^PointerEvents|^Visibility|^UserSelect|^ObjectFit|^ObjectPosition|^ScreenReaderOnly|^FocusVisibleRing/.test(
      className
    )
  ) {
    return 'INTERACTION & ACCESSIBILITY'
  }
  if (/^Transform|^Translate|^Scale|^Rotate|^Skew|^Transition|^Animate/.test(className)) {
    return 'TRANSFORMS & MOTION'
  }
  return 'MISC'
}

const generateClassesFromCss = (css) => {
  const categories = extractCategories(css)
  const classRegex = /\.([A-Za-z0-9\\:_-]+)\s*\{([\s\S]*?)\}/g
  const categoryMap = new Map()
  const utilityIndex = new Map()
  const pendingResponsive = new Map()

  const ensureCategory = (categoryName) => {
    if (!categoryMap.has(categoryName)) {
      categoryMap.set(categoryName, new Map())
    }
    return categoryMap.get(categoryName)
  }

  const addResponsive = (utility, prefix) => {
    if (!prefix) return
    if (!utility.responsive.includes(prefix)) {
      utility.responsive.push(prefix)
    }
  }

  for (const match of css.matchAll(classRegex)) {
    const rawName = match[1]
    const body = match[2]
    const classIndex = match.index ?? 0
    const { baseName, prefix } = splitClassName(rawName)
    if (!baseName) continue
    const categoryName = categories.length
      ? findCategoryForIndex(classIndex, categories)
      : inferCategoryFromClassName(baseName)

    const property = normalizeDeclarations(body)

    if (prefix && utilityIndex.has(baseName)) {
      const existing = utilityIndex.get(baseName)
      if (property && !existing.property.includes(property)) {
        existing.property = existing.property ? `${existing.property} ${property}` : property
      }
      addResponsive(existing, prefix)
      continue
    }

    if (prefix && !utilityIndex.has(baseName)) {
      if (!pendingResponsive.has(baseName)) {
        pendingResponsive.set(baseName, new Set())
      }
      pendingResponsive.get(baseName).add(prefix)
    }

    const utilities = ensureCategory(categoryName)
    const existing = utilities.get(baseName)

    if (existing) {
      if (property && !existing.property.includes(property)) {
        existing.property = existing.property ? `${existing.property} ${property}` : property
      }
      addResponsive(existing, prefix)
    } else {
      const utility = {
        name: baseName,
        property: property,
        responsive: [],
      }
      addResponsive(utility, prefix)

      if (pendingResponsive.has(baseName)) {
        for (const pendingPrefix of pendingResponsive.get(baseName)) {
          addResponsive(utility, pendingPrefix)
        }
      }

      utilities.set(baseName, utility)
      utilityIndex.set(baseName, utility)
    }
  }

  const output = []

  if (categories.length) {
    for (const category of categories) {
      if (EXCLUDED_CATEGORIES.has(category.name)) continue
      const utilities = categoryMap.get(category.name)
      if (!utilities || utilities.size === 0) continue
      output.push({
        category: category.name,
        utilities: Array.from(utilities.values()),
      })
    }
  } else {
    for (const [categoryName, utilities] of categoryMap.entries()) {
      if (!utilities || utilities.size === 0) continue
      output.push({
        category: categoryName,
        utilities: Array.from(utilities.values()),
      })
    }
  }

  return output
}

// Main execution
const main = () => {
  console.log('🚀 Generating classes.json...')

  if (!fs.existsSync(CSS_PATH)) {
    console.error(`❌ CSS file not found: ${CSS_PATH}`)
    process.exit(1)
  }

  const css = fs.readFileSync(CSS_PATH, 'utf-8')
  const classes = generateClassesFromCss(css)
  const outputPath = path.join(__dirname, '../public/data/classes.json')

  // Ensure directory exists
  const outputDir = path.dirname(outputPath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Write JSON file
  fs.writeFileSync(outputPath, JSON.stringify(classes, null, 2), 'utf-8')

  console.log(`✅ Generated ${outputPath}`)
  console.log(`📊 Total categories: ${classes.length}`)
  console.log(`📦 Total utilities: ${classes.reduce((sum, cat) => sum + cat.utilities.length, 0)}`)
}

main()
