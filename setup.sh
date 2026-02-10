#!/bin/bash

# Quick Start Guide for PascalCSS Development

echo "🚀 PascalCSS Setup"
echo "=================="
echo ""

# Check Node version
NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)
echo "✅ Node version: $NODE_VERSION"
echo "✅ npm version: $NPM_VERSION"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Generate classes.json
echo "📊 Generating classes.json..."
npm run generate:classes
echo ""

# Ready
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  npm run dev       - Start development server on http://localhost:3000"
echo "  npm run build     - Build for production"
echo "  npm run generate  - Generate static site"
echo "  npm run lint      - Check code quality"
echo "  npm run lint:fix  - Auto-fix linting issues"
echo ""
