# Supabase Session Issue & Resolution

## Problem

After implementing sign-in and sign-up, calling `supabase.auth.getSession()` on the client always returned `null`:

```
Session: null
User: undefined
User Metadata: undefined
```

## Root Cause

Two issues were causing the session to not persist:

### 1. API routes used `@supabase/supabase-js` directly

Both `Login` and `Register` routes created the Supabase client like this:

```ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);
```

This client does **not** handle cookies. When `signInWithPassword()` succeeds, the auth tokens are returned in the response body but **never set as cookies** in the browser. Without cookies, the browser client has no session to read.

### 2. No Next.js middleware to refresh sessions

The `@supabase/ssr` package requires a middleware that calls `supabase.auth.getUser()` on every request. This refreshes the session token and keeps cookies up to date. No middleware file existed.

## Solution

### A. Use cookie-aware server client in API routes

Changed both `src/app/api/Login/route.ts` and `src/app/api/Register/route.ts` from:

```ts
import { createClient } from "@supabase/supabase-js";
// ...
const supabase = createClient(url, key);
```

To:

```ts
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
// ...
const cookieStore = await cookies();
const supabase = createClient(cookieStore);
```

The `@/utils/supabase/server` client uses `createServerClient` from `@supabase/ssr` with a cookie adapter. When `signInWithPassword()` succeeds, Supabase sets auth cookies (`sb-<project>-auth-token`) in the response headers.

### B. Created `src/middleware.ts`

Created a Next.js middleware that:

1. Creates a cookie-aware Supabase client on every request
2. Calls `supabase.auth.getUser()` to refresh the session token
3. Passes updated cookies back in the response

```ts
export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() { return request.cookies.getAll(); },
      setAll(cookiesToSet) {
        // update request + response cookies
      },
    },
  });

  await supabase.auth.getUser(); // refreshes the session
  return supabaseResponse;
}
```

The matcher excludes static assets so the middleware only runs on page/API routes.

## Key Takeaway

When using `@supabase/ssr` with Next.js:

- **API routes** must use the cookie-aware server client (not `@supabase/supabase-js`) so auth tokens get set as cookies
- **Middleware** must exist to refresh sessions on each request
- **Client** (`@/utils/supabase/client` with `createBrowserClient`) then reads the session from cookies automatically

After these changes, you must **sign in again** — the old login never set cookies, so there's no session to read.
