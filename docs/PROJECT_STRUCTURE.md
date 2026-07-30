# Project Structure Blueprint

## Overview

Comprehensive directory map and file responsibility matrix for AgencyWeb.

---

## Directory Map

```
agencyweb/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact API route handler (Serverless)
│   ├── globals.css              # Global CSS & Tailwind CSS v4 @import & @theme
│   ├── icon.svg                 # Dynamic application brand icon
│   ├── layout.tsx               # Root HTML layout wrapper
│   ├── page.tsx                 # Home landing page component
│   └── services/
│       └── page.tsx             # Internal services page
├── docs/                        # Technical system documentation
│   ├── ARCHITECTURE.md
│   ├── BACKEND.md
│   ├── CI-CD.md
│   ├── DATABASE.md
│   ├── DEPLOYMENT.md
│   ├── ENVIRONMENT.md
│   ├── FRONTEND.md
│   ├── PROJECT_STRUCTURE.md
│   ├── README.md
│   └── SECURITY.md
├── public/
│   └── images/                  # Static images and brand assets
├── .env.example                 # Environment variables template
├── .env.local                   # Local secret overrides (Git ignored)
├── .eslintrc.json               # ESLint code quality rules
├── .gitignore                   # Version control exclusion rules
├── .nvmrc                       # Node.js version pin (v20)
├── netlify.toml                 # Netlify deployment & security config
├── next.config.mjs              # Next.js compiler settings
├── package.json                 # Project manifest & npm scripts
├── postcss.config.mjs           # PostCSS Tailwind v4 plugin config
├── README.md                    # Main project overview
└── tsconfig.json                # TypeScript compiler configuration
```

---

## Responsibilities Matrix

| File / Folder | Type | Primary Purpose |
| :--- | :--- | :--- |
| `app/layout.tsx` | Component | Sets up HTML structure, global fonts, navigation bar, and footer |
| `app/page.tsx` | Component | Renders landing page (Hero, Feature cards, Contact form) |
| `app/services/page.tsx` | Component | Displays service catalog and capability grid |
| `app/api/contact/route.ts` | Route Handler | Validates contact submissions and returns structured JSON responses |
| `app/globals.css` | Stylesheet | Defines Tailwind v4 `@import`, `@theme` colors, and glassmorphism styles |
| `postcss.config.mjs` | Config | Enables `@tailwindcss/postcss` plugin for Tailwind v4 compilation |
| `netlify.toml` | Config | Defines build commands,publish directory, and security response headers |
