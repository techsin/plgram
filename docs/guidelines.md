# Plgram — Architecture & AI Agent Guidelines

## Project Overview
Full-stack SaaS starter built with Next.js 16 (App Router), deployed on Vercel.

## Tech Stack Decisions

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16 App Router | Latest SSR/SSG, server components, route handlers |
| Database | Supabase Postgres + Drizzle ORM | Managed Postgres, type-safe schema-first ORM |
| Auth | Better Auth v1 | Open-source, DB-agnostic, Drizzle adapter built-in |
| Payments | Stripe SDK | Industry standard, webhook-based event handling |
| UI | shadcn/ui v4 + Tailwind CSS v4 | Open-source component library, copy-paste ownership |
| Background Jobs | Trigger.dev v3 (Cloud) | Serverless-friendly, retries, scheduling |
| Transactional Email | Resend | Developer-first API, React email support |
| Marketing Email | Loops | API-based marketing automation |
| Analytics / AB | PostHog | Open-source product analytics |
| Cache | Upstash Redis | Serverless HTTP-based Redis |
| Errors | Sentry | Industry-standard error tracking |
| Theme | next-themes | SSR-safe dark/light mode switching |

## Project Structure
```
src/
├── app/                  # Next.js App Router pages & API routes
│   ├── (auth)/           # Auth route group (login, signup)
│   ├── (app)/            # Authenticated route group (dashboard, etc.)
│   └── api/              # Route handlers (auth, stripe webhook, health)
├── components/
│   ├── ui/               # shadcn/ui components (auto-generated)
│   └── providers/        # React context providers (theme, posthog)
├── lib/                  # Shared utilities & service clients
│   ├── auth.ts           # Better Auth server config
│   ├── auth-client.ts    # Better Auth client helpers
│   ├── db.ts             # Drizzle + Postgres client
│   ├── schema.ts         # Drizzle table definitions
│   ├── stripe.ts         # Stripe SDK instance
│   ├── redis.ts          # Upstash Redis instance
│   ├── email.ts          # Resend transactional email
│   ├── loops.ts          # Loops marketing email
│   └── utils.ts          # General utilities (cn, etc.)
├── trigger/              # Trigger.dev background job definitions
e2e/                      # Playwright E2E tests
docs/                     # Documentation
drizzle/                  # Generated migrations
```

## Coding Principles

### 1. Minimal Code
- Prefer open-source libraries over custom implementations
- Use shadcn/ui components — don't rebuild common UI
- Each file should do one thing well

### 2. Modularity
- Each lib file exports a singleton client + helper functions
- Providers wrap the app in `layout.tsx`, not scattered across pages
- Route groups `(auth)` and `(app)` separate public vs authenticated pages

### 3. Type Safety
- All schemas defined in `src/lib/schema.ts` with Drizzle ORM
- Use TypeScript strictly; no `any` unless truly unavoidable
- Better Auth generates types from your schema automatically

### 4. Testing
- **Unit & Components**: Vitest with `@testing-library/react` (configured with `jsdom` and `@testing-library/jest-dom`).
- **E2E & API Testing**: Playwright (`e2e/*.spec.ts`). Playwright is utilized for browser-level E2E tests *and* raw Next.js Route Handler testing via its `request` API.
- Run: `npm test` (unit/components), `npm run test:e2e` (E2E/API)

### 5. Database Workflow
```bash
npm run db:generate   # Generate migration from schema changes
npm run db:migrate    # Apply migrations
npm run db:push       # Push schema directly (dev only)
npm run db:studio     # Open Drizzle Studio GUI
```

## AI Agent Rules
1. **Read Next.js docs** at `node_modules/next/dist/docs/` before writing Next.js-specific code
2. **shadcn v4 uses @base-ui** — no `asChild` prop; use `render` prop for polymorphism
3. **Server vs Client**: Default to server components. Add `"use client"` only when needed (hooks, event handlers, browser APIs)
4. **API routes**: Use `route.ts` files. Never place `route.ts` alongside `page.tsx` in the same segment
5. **Env vars**: Client-side vars must be prefixed with `NEXT_PUBLIC_`
6. **Imports**: Use `@/` alias for all project imports
