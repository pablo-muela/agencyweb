# Netlify Deployment Guide

## Overview

AgencyWeb is pre-configured for automated continuous deployment on **Netlify** via GitHub integration and `@netlify/plugin-nextjs`.

---

## Deployment Configuration (`netlify.toml`)

The build pipeline is controlled by [netlify.toml](file:///c:/Users/pabmu/develop/agencyweb/netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## Node.js Environment Matching

- **Version File**: [.nvmrc](file:///c:/Users/pabmu/develop/agencyweb/.nvmrc) specifies Node version `20`.
- **Environment Declaration**: `NODE_VERSION = "20"` in `netlify.toml` guarantees matching build environment across Netlify buildbots.

---

## Deployment Steps

1. **Connect Repository**: Link `github.com/pablo-muela/agencyweb` to Netlify.
2. **Build Command**: Set to `npm run build`.
3. **Publish Directory**: Set to `.next`.
4. **Environment Variables**: Configure variables in Netlify Site Settings > Environment Variables.
