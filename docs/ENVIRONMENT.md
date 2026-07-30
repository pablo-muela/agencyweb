# Environment Variables & Configuration

## Overview

AgencyWeb manages environment variables using standard Next.js `.env` rules and Netlify environment settings.

---

## Variable Reference Table

| Variable Name | Scope | Required | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `PORT` | Server | No | Local server port override | `3000` |
| `NODE_ENV` | Server | Yes | Execution environment mode | `development` / `production` |
| `CONTACT_NOTIFICATION_EMAIL` | Server | No | Target email for contact form alerts | `admin@agencyweb.dev` |
| `CONTACT_API_SECRET_KEY` | Server | No | Secret key for contact API validation | `secret_key_here` |
| `NEXT_PUBLIC_APP_URL` | Client/Server | Yes | Public canonical URL | `https://agencyweb.dev` |
| `SUPABASE_URL` | Server | No | Supabase API endpoint | `https://<id>.supabase.co` |
| `SUPABASE_ANON_KEY` | Client/Server | No | Supabase anonymous API key | `public_anon_key` |

---

## File Precedence & Security Rules

1. `.env.local` (Local overrides, ignored by Git)
2. `.env.development` / `.env.production`
3. `.env.example` (Version-controlled template without secrets)

> **SECURITY WARNING**: Never prefix database passwords, secret keys, or admin tokens with `NEXT_PUBLIC_`. Variables with `NEXT_PUBLIC_` are embedded into the client-side JavaScript bundle.
