# AgencyWeb

Modern, high-performance web development and digital agency platform built with Next.js, TypeScript, Tailwind CSS, and optimized for Netlify deployment.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## Project Structure

```
agencyweb/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Endpoint de API delgado (Next.js / Netlify Function)
│   ├── favicon.ico
│   ├── globals.css              # Estilos globales / Tailwind CSS
│   ├── layout.tsx               # Layout raíz de la aplicación
│   ├── page.tsx                 # Landing page principal (SSR/SSG)
│   └── services/
│       └── page.tsx             # Página interna de servicios
├── public/
│   └── images/                  # Assets estáticos (logos, imágenes)
├── .env.example                 # Plantilla de variables de entorno (sin credenciales)
├── .eslintrc.json               # Configuración de linter
├── .gitignore                   # Archivos ignorados por Git
├── netlify.toml                 # Configuración principal de Netlify (Build, Redirects, Headers)
├── next.config.mjs              # Configuración de Next.js
├── package.json                 # Dependencias del proyecto y scripts
├── README.md                    # Documentación del proyecto
└── tsconfig.json                # Configuración de TypeScript
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Deployment

Deploy directly to Netlify using the pre-configured `netlify.toml` file and `@netlify/plugin-nextjs`.
