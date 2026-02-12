/**
 * Script to parse PascalCSS and generate classes.json
 * Fetches from the official CDN: https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.0/dist/pascal-css.min.css
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// TODO: Fetch and parse real PascalCSS from CDN
// For now, generate expanded sample structure based on v3.0.0 release
const generateSampleClasses = () => {
  return [
    {
      category: 'Layout',
      utilities: [
        {
          name: 'DisplayFlex',
          property: 'display: flex;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'DisplayBlock',
          property: 'display: block;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'DisplayInline',
          property: 'display: inline;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'DisplayNone',
          property: 'display: none;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'DisplayGrid',
          property: 'display: grid;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
      ],
    },
    {
      category: 'Flexbox',
      utilities: [
        {
          name: 'JustifyContentCenter',
          property: 'justify-content: center;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'JustifyContentStart',
          property: 'justify-content: flex-start;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'JustifyContentEnd',
          property: 'justify-content: flex-end;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'JustifyContentBetween',
          property: 'justify-content: space-between;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'AlignItemsCenter',
          property: 'align-items: center;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'AlignItemsStart',
          property: 'align-items: flex-start;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'FlexDirectionColumn',
          property: 'flex-direction: column;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
      ],
    },
    {
      category: 'Spacing',
      utilities: [
        {
          name: 'Padding10',
          property: 'padding: 1rem;',
          value: '1rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
          preview: {
            type: 'box',
            value: '1rem',
          },
        },
        {
          name: 'Padding20',
          property: 'padding: 2rem;',
          value: '2rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
          preview: {
            type: 'box',
            value: '2rem',
          },
        },
        {
          name: 'Margin10',
          property: 'margin: 1rem;',
          value: '1rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
          preview: {
            type: 'box',
            value: '1rem',
          },
        },
        {
          name: 'MarginTop10',
          property: 'margin-top: 1rem;',
          value: '1rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
          preview: {
            type: 'box',
            value: '1rem',
          },
        },
        {
          name: 'MarginBottom10',
          property: 'margin-bottom: 1rem;',
          value: '1rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
          preview: {
            type: 'box',
            value: '1rem',
          },
        },
      ],
    },
    {
      category: 'Typography',
      utilities: [
        {
          name: 'FontSize16',
          property: 'font-size: 1rem;',
          value: '1rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'FontSize32',
          property: 'font-size: 2rem;',
          value: '2rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'FontWeightBold',
          property: 'font-weight: 700;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'TextAlignCenter',
          property: 'text-align: center;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
      ],
    },
    {
      category: 'Colors',
      utilities: [
        {
          name: 'ColorBlue600',
          property: 'color: #2563eb;',
          value: '#2563eb',
          responsive: [],
          preview: {
            type: 'color',
            value: '#2563eb',
          },
        },
        {
          name: 'ColorBlue700',
          property: 'color: #1d4ed8;',
          value: '#1d4ed8',
          responsive: [],
          preview: {
            type: 'color',
            value: '#1d4ed8',
          },
        },
        {
          name: 'ColorGray600',
          property: 'color: #4b5563;',
          value: '#4b5563',
          responsive: [],
          preview: {
            type: 'color',
            value: '#4b5563',
          },
        },
        {
          name: 'BackgroundColorWhite',
          property: 'background-color: #ffffff;',
          value: '#ffffff',
          responsive: [],
          preview: {
            type: 'color',
            value: '#ffffff',
          },
        },
      ],
    },
    {
      category: 'Borders',
      utilities: [
        {
          name: 'BorderRadius10',
          property: 'border-radius: 0.625rem;',
          value: '0.625rem',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
        {
          name: 'Border1',
          property: 'border-width: 1px;',
          responsive: ['Sm:', 'Md:', 'Lg:', 'Xl:'],
        },
      ],
    },
  ]
}

// Main execution
const main = () => {
  console.log('🚀 Generating classes.json...')

  const classes = generateSampleClasses()
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
