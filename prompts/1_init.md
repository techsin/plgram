setup entire project using tech stack
use latest stable version and documentation
use mulitpile agents 
write down the implementation plan and use it as a check list, diligently mark it as progress completes
verify completetion after each section
also setup basic api, ui, testing
create docs folder and be concise in what you write there but document all decisions you are making

Use open source tools as much as possible over writing new components
create guidelines so future you follow this, im using antigravity with gemini 3.1 pro model.
try your best to reuse existing code, write modular components, and for ui try to use prebuilt components as much as possible. if there is a library that is built on top of current ui library with components we need even better, but it should be reliable and popular.
Less code the better overall.
More modular the better.

Framework:        Next.js
Hosting:          Vercel
Database:         Supabase Postgres
Auth:             Better Auth
Payments:         Stripe
UI:               shadcn/ui + Tailwind
Background Jobs:  Trigger.dev (Cloud)
Email (tx):       Resend
Email (mktg):     Loops
Analytics/AB:     PostHog
Cache:            Upstash Redis
Error Tracking:   Sentry