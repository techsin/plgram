export default function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">
        You&apos;re signed in! This is a protected page.
      </p>
    </main>
  );
}
