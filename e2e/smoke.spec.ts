import { test, expect } from "@playwright/test";

test("home page renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
});

test("health API returns ok", async ({ request }) => {
  const response = await request.get("/api/health");
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.status).toBe("ok");
});
