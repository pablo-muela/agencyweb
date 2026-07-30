# CI/CD Pipeline & GitOps Workflow

## Overview

AgencyWeb uses a continuous integration and deployment pipeline triggered via Git commits to `github.com/pablo-muela/agencyweb`.

---

## Pipeline Workflow

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant GitHub as GitHub Repo
    participant Netlify as Netlify CI/CD
    participant Edge as Netlify Edge CDN

    Dev->>GitHub: git push origin main
    GitHub->>Netlify: Webhook Trigger
    Netlify->>Netlify: Install dependencies (npm install)
    Netlify->>Netlify: Run TypeScript & Next.js Build (npm run build)
    Netlify->>Edge: Deploy Artifacts (.next & Serverless Functions)
    Edge-->>Dev: Live Production URL
```

---

## Quality Gates & Verification

Before code merges into `main`, developers must verify:

1. **Type Checking**:
   ```bash
   npx tsc --noEmit
   ```
2. **ESLint Code Quality**:
   ```bash
   npm run lint
   ```
3. **Production Build Compilation**:
   ```bash
   npm run build
   ```
