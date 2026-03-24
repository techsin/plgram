import { task } from "@trigger.dev/sdk/v3";

export const exampleTask = task({
  id: "example-task",
  maxDuration: 300, // 5 minutes
  run: async (payload: { message: string }) => {
    console.log("Running example task with payload:", payload);
    // Add your background job logic here
    return { success: true, message: payload.message };
  },
});
