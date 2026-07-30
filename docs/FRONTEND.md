# Frontend Architecture & Design System

## Overview

The AgencyWeb frontend utilizes Next.js 14+ App Router, React 18+, and Tailwind CSS v4 to deliver a responsive, dark-mode-first user interface with zero-runtime CSS overhead.

---

## Component Architecture

```
app/
├── globals.css              # Tailwind CSS v4 @import & @theme directives
├── layout.tsx               # Root application layout (HTML structure, Metadata, Navigation)
├── page.tsx                 # Home landing page (Hero, Features, Contact Form)
└── services/
    └── page.tsx             # Services detail page
```

---

## Styling & Design System (Tailwind CSS v4)

Tailwind CSS v4 replaces JavaScript configuration files (`tailwind.config.ts`) in favor of native CSS declarations inside [app/globals.css](file:///c:/Users/pabmu/develop/agencyweb/app/globals.css).

### Theme Declaration (`@theme`)

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #0055ff;
  --color-brand-dark: #0a0f1d;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}
```

### Visual Features
- **Glassmorphism Panels**: `.glass-panel` and `.glass-card` CSS utility classes with `backdrop-filter: blur()`.
- **Custom Color Palettes**: Accessible contrast ratios matching `#0a0f1d` dark background and `#0055ff` primary accent color.
- **Dynamic Text Gradients**: `.text-gradient` utility using linear gradient background clipping.
