# Decisions Log

## 2026-03-24: Initial Architecture

### ORM: Drizzle over Prisma
- Schema-first, type-safe, no code generation step
- Native Better Auth adapter available
- Lighter weight, better edge/serverless support

### Auth: Better Auth over NextAuth/Clerk
- Fully open-source, self-hosted
- Built-in Drizzle adapter
- Email/password + social providers out of the box
- No vendor lock-in

### UI: shadcn/ui v4 over MUI/Chakra
- Copy-paste component model — full ownership, no lock-in
- Built on @base-ui (Radix successor) + Tailwind
- Highly customizable, minimal bundle impact

### Cache: Upstash Redis over Vercel KV
- Serverless HTTP-based Redis (no persistent connections needed)
- Works perfectly on Vercel edge/serverless
- More portable than Vercel-specific KV

### Payments: Stripe (direct SDK)
- Webhook-based architecture for reliability
- No wrapper libraries — direct Stripe SDK for maximum control

### Background Jobs: Trigger.dev over Inngest/QStash
- v3 has great DX, retry policies, and scheduling
- Cloud-hosted — no infra to manage
- Task files co-located in `src/trigger/`

### Testing Architecture: Playwright (API/E2E) + Vitest (Unit/Components)
- Playwright natively tests App Router `route.ts` API endpoints against the live dev server without difficult mocking.
- Vitest handles isolated components (React Testing Library) and pure logic.
