<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Plgram Agent Context

## Key Architectural Facts
- **shadcn/ui v4** uses `@base-ui/react` (NOT Radix). Button uses `render` prop, NOT `asChild`.
- **Better Auth v1.5** — client import is `better-auth/client`, NOT `@better-auth/client`.
- **Stripe SDK** — do NOT pass `apiVersion` manually; the SDK auto-detects it.
- **Drizzle ORM** — schema lives in `src/lib/schema.ts`. Use `npm run db:push` for dev, `npm run db:migrate` for prod.
- **Trigger.dev v3** — tasks live in `src/trigger/`. Config requires `maxDuration`.
- **PostHog** — provider gracefully degrades if `NEXT_PUBLIC_POSTHOG_KEY` is not set.
- **Sentry** — initialized via `src/instrumentation.ts` (auto-loaded by Next.js).

## File Organization
- `src/lib/` — service singletons and utilities (one file per service)
- `src/components/ui/` — shadcn/ui auto-generated components
- `src/components/providers/` — React context providers
- `src/app/(auth)/` — public auth pages (login, signup)
- `src/app/(app)/` — authenticated pages (dashboard)
- `src/app/api/` — API route handlers
- `src/trigger/` — background job definitions
- `docs/` — architecture docs, setup guide, decision log
- `e2e/` — Playwright end-to-end and API tests

## Before Writing Code
1. Check `docs/guidelines.md` for coding principles
2. Check `docs/decisions.md` for tech choices and rationale
3. Read Next.js docs at `node_modules/next/dist/docs/` for the feature you're implementing
