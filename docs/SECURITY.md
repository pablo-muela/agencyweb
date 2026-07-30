# Security Policy & Hardening Controls

## Overview

AgencyWeb implements a Zero-Trust security model for infrastructure, application code, and data transmission.

---

## HTTP Security Headers

Security headers are enforced at the CDN edge via [netlify.toml](file:///c:/Users/pabmu/develop/agencyweb/netlify.toml):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## Security Standards & Policies

### 1. Secret Protection
- **No Hardcoded Credentials**: API tokens, private keys, and passwords MUST NOT be committed to Git.
- **Git Hygiene**: `.gitignore` excludes `.env`, `.env*.local`, `.netlify`, and `node_modules`.

### 2. Input Sanitization & Validation
- All incoming payloads in `app/api/contact/route.ts` are checked for presence, type compliance, and sanitized prior to processing.

### 3. Least Privilege Access (PoLP)
- Database credentials follow PoLP. Client queries utilize restricted `ANON_KEY` combined with PostgreSQL Row Level Security (RLS).
