import { test, expect } from "@playwright/test";

test.describe("API Testing Example", () => {
  test("GET /api/health should return 200 OK and valid JSON", async ({ request }) => {
    // Make a GET request to your API route
    const response = await request.get("/api/health");
    
    // Assert the HTTP status code
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    // Parse and assert the JSON body
    const body = await response.json();
    expect(body.status).toBe("ok");
    expect(typeof body.timestamp).toBe("string");
  });

  test("POST /api/webhook/example should handle invalid signatures", async ({ request }) => {
    // Example of testing a webhook or protected REST API
    // We send a mock payload without the required signature headers
    const response = await request.post("/api/stripe/webhook", {
      data: {
        id: "evt_test_123",
        type: "checkout.session.completed"
      }
    });

    // We expect it to fail with a 400 Bad Request since there's no Stripe signature
    expect(response.status()).toBe(400);
    
    const body = await response.json();
    expect(body.error).toBe("Missing signature");
  });
});
