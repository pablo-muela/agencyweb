# Backend & Serverless API Architecture

## Overview

The backend of AgencyWeb follows a thin, stateless serverless model using Next.js App Router API Route Handlers.

---

## API Endpoints

### `POST /api/contact`

Handles contact form submissions from client applications or external HTTP requests.

- **File Location**: [app/api/contact/route.ts](file:///c:/Users/pabmu/develop/agencyweb/app/api/contact/route.ts)
- **Supported Content Types**:
  - `application/json`
  - `application/x-www-form-urlencoded`

#### Request Payload
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Project consultation inquiry"
}
```

#### Responses
- **`200 OK` / `303 See Other`**: Successful validation & processing.
- **`400 Bad Request`**: Missing required payload parameters (`name`, `email`, `message`).
- **`500 Internal Server Error`**: Unexpected runtime exception.

#### Implementation Pattern
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Parses multi-format body payloads (JSON & Form Data)
  // Performs input verification
  // Dispatches notification / stores record
}
```

---

## Serverless Execution Rules

1. **Stateless Execution**: API handlers MUST NOT store persistent in-memory state across requests.
2. **Environment Access**: Access environment secrets strictly via `process.env`. Never expose server keys in public responses.
3. **Graceful Error Handling**: All route handlers MUST wrap execution in `try-catch` blocks and return structured JSON error payloads.
