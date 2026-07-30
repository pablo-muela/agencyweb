# Database & Persistence Architecture

## Overview

AgencyWeb utilizes **Supabase** (PostgreSQL) for relational data storage, authentication metadata, and persistent contact submission logging.

---

## Connection & Integration

### Configuration Variables
Database connection variables are configured in `.env.local` / Netlify environment settings:

```env
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

---

## Schema & Tables Blueprint

### `contact_submissions` Table

```sql
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow insert from anon key (public contact form)
CREATE POLICY "Enable insert for anonymous users" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);
```

---

## Security & Best Practices

1. **Row Level Security (RLS)**: Enforce strict RLS policies on all PostgreSQL tables.
2. **Service Role Key Isolation**: Never expose `SUPABASE_SERVICE_ROLE_KEY` to client-side code or `NEXT_PUBLIC_*` variables.
3. **Parameterized Queries**: Always use Supabase SDK or parameterized SQL to prevent SQL injection vulnerabilities.
