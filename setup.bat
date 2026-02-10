@echo off
REM Quick Start Guide for PascalCSS Development

echo 🚀 PascalCSS Setup
echo ==================
echo.

REM Check Node version
node -v
npm -v
echo.

echo 📦 Installing dependencies...
call npm install
echo.

echo 📊 Generating classes.json...
call npm run generate:classes
echo.

echo ✅ Setup complete!
echo.
echo Next steps:
echo   npm run dev       - Start development server on http://localhost:3000
echo   npm run build     - Build for production
echo   npm run generate  - Generate static site
echo   npm run lint      - Check code quality
echo   npm run lint:fix  - Auto-fix linting issues
echo.
