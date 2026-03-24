import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center rounded-full border border-border/40 bg-muted/30 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          ✨ Welcome to Plgram
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          Build something
          <br />
          amazing today
        </h1>
        <p className="max-w-md text-muted-foreground text-lg">
          A modern full-stack starter with authentication, payments, background
          jobs, and analytics — all wired up and ready to go.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" render={<Link href="/login" />}>
          Get Started
        </Button>
        <Button variant="outline" size="lg" render={<Link href="/api/health" />}>
          API Health
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 max-w-xl w-full">
        {[
          { label: "Auth", desc: "Better Auth" },
          { label: "Database", desc: "Supabase + Drizzle" },
          { label: "Payments", desc: "Stripe" },
          { label: "Email", desc: "Resend + Loops" },
          { label: "Analytics", desc: "PostHog" },
          { label: "Cache", desc: "Upstash Redis" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border/40 bg-card/50 p-4 text-center backdrop-blur-sm transition-colors hover:bg-card/80"
          >
            <p className="font-semibold text-sm">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
