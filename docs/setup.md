# Plgram — Setup Guide

## Prerequisites
- Node.js 20+
- npm
- Supabase project (for Postgres)

## Getting Started

1. Clone the repo and install dependencies:
```bash
npm install
```

2. Copy env example and fill in values:
```bash
cp .env.example .env.local
```

3. Push the database schema:
```bash
npm run db:push
```

4. Start the dev server:
```bash
npm run dev
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests (Vitest) |
| `npm run test:e2e` | Run E2E tests (Playwright) |
| `npm run db:generate` | Generate DB migration |
| `npm run db:migrate` | Apply DB migrations |
| `npm run db:push` | Push schema to DB (dev) |
| `npm run db:studio` | Open Drizzle Studio |

## Service Setup

### Supabase
Create a project at [supabase.com](https://supabase.com) and copy the Postgres connection string to `DATABASE_URL`.

### Stripe
Create a Stripe account, get API keys, and add webhook endpoint for `/api/stripe/webhook`.

### Trigger.dev
Sign up at [trigger.dev](https://trigger.dev), create a project, and add your project ref to `trigger.config.ts`.

### PostHog
Create a project at [posthog.com](https://posthog.com) and add your project key to `NEXT_PUBLIC_POSTHOG_KEY`.

### Upstash Redis
Create a Redis database at [upstash.com](https://upstash.com) and copy the REST URL and token.

### Sentry
Create a project at [sentry.io](https://sentry.io) and add the DSN to `SENTRY_DSN`.

### Resend
Sign up at [resend.com](https://resend.com) and add your API key. Update the `from` address in `src/lib/email.ts`.

### Loops
Sign up at [loops.so](https://loops.so) and add your API key.
