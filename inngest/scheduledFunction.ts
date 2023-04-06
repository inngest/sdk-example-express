import { inngest } from "./client";

/**
 * This function is a cron
 *
 * When using the Inngest dev server, check out the "Function log" for logs
 */

export const scheduledFunction = inngest.createFunction(
  { name: "Scheduled function" },
  { cron: "TZ=America/New_York */2 * * * *" },
  async ({ step }) => {
    await step.run("A simple step", async () => {
      return "OK!";
    });
  }
);
