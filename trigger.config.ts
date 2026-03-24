import { defineConfig } from "@trigger.dev/sdk/v3";

export default defineConfig({
  project: "your-project-ref", // Replace with your Trigger.dev project ref
  runtime: "node",
  logLevel: "log",
  maxDuration: 300,
  retries: {
    enabledInDev: true,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
    },
  },
  dirs: ["./src/trigger"],
});
