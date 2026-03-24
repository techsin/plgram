# Post-Setup Config TODOs

This checklist covers all the manual configuration keys and environments needed to get the app fully functional in production and locally.

## 1. Database & Migrations (Supabase & Drizzle)
- [ ] **Supabase**: Create a new project. Find your connection string under Project Settings > Database > Connection String (URI). Ensure you use connection pooling (`prepare: false`) in the URL if required by Supabase.
- [ ] Update `DATABASE_URL` in `.env.local`.
- [ ] Run `npm run db:push` to sync your schema for the first time.
  _Note: Migrations generated via `npm run db:generate` will be saved to the `/drizzle` folder in root._

## 2. Authentication (Better Auth)
- [ ] Generate a long secure string for `BETTER_AUTH_SECRET`.
- [ ] Ensure `BETTER_AUTH_URL` matches your deployment URL (or `http://localhost:3000` for dev).

## 3. Payments (Stripe)
- [ ] **Stripe Dashboard**: Get your Secret and Publishable keys.
- [ ] Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to `.env.local`.
- [ ] Set up a local webhook using the Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook` and copy the signing secret into `STRIPE_WEBHOOK_SECRET`.

## 4. Background Jobs (Trigger.dev)
- [ ] Create an account & project at trigger.dev.
- [ ] Add your project ID to `trigger.config.ts` (`project: "your-project-ref"`).
- [ ] Add your `TRIGGER_SECRET_KEY` to `.env.local`.

## 5. Emails (Resend & Loops)
- [ ] Add `RESEND_API_KEY` to send transactional emails (like magic links).
- [ ] Add `LOOPS_API_KEY` to push users to marketing lists.

## 6. Analytics (PostHog)
- [ ] Get your PostHog API Key.
- [ ] Add `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` (e.g. `https://us.i.posthog.com`) to your `.env.local`.

## 7. Caching (Upstash Redis)
- [ ] Create a Redis instance on Upstash.
- [ ] Copy the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to your `.env.local`.

## 8. Error Logging (Sentry)
- [ ] Grab your DSN key from Sentry. Add it to `SENTRY_DSN`.
- [ ] _Optional for Prod_: Provide `SENTRY_AUTH_TOKEN` in your deployment environment (like Vercel) so Sentry can upload source maps during build.

## Prebuilt UI Enhancements Reminder
We are using `shadcn/ui` installed via `@base-ui`. Since you requested to use prebuilt components as much as possible, you can copy-paste advanced components seamlessly from popular libraries built on Tailwind+Framer:
- **Magic UI** (magicui.design)
- **Aceternity UI** (ui.aceternity.com)
Both are highly compatible with this setup.
