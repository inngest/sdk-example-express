import { inngest } from "./client";
import type { DemoRefreshAccount } from "./types";

/**
 * Fan-out is when a single Inngest function sends `n` number of events
 * which trigger other functions to run independently. This is often
 * useful to combine with a cron job so you can quickly schedule n numbers
 * of functions to run based on an event payload.
 *
 * Below is an example of this where the first scheduled function creates
 * events for the second function to process.
 */

export const scheduledFanOut = inngest.createFunction(
  { name: "Fan-out cron job", concurrency: 10 },
  { cron: "* * * * *" },
  async ({ step }) => {
    // We put this in a step.run to wrap any async data fetching in a retry-able step
    const account_ids = await step.run("Fetch account ids", async () => {
      // Your cron function would normally query your database for a list
      // of items to process. Here we hard-code an array for demo purposes
      return [
        "057f134b-2ee3-4c98-b416-3fe94fc6faf3",
        "15562bd4-43f8-4188-8339-3be45f495592",
        "a01c26bf-0367-42d6-8191-2b92eb781c9f",
      ];
    });

    const eventsToFanOut: DemoRefreshAccount[] = account_ids.map(
      (account_id) => ({
        name: "demo/refresh.account",
        data: { account_id },
      })
    );

    // Fan-out the events to another function
    await step.sendEvent(eventsToFanOut);

    return { message: `sent ${account_ids.length} events` };
  }
);

export const fanOutProcessor = inngest.createFunction(
  { name: "Fan-out processor", concurrency: 4 },
  { event: "demo/refresh.account" },
  async ({ event, step }) => {
    const { account_id } = event.data;

    await step.run("Refresh account", async () => {
      // Do some work here like update an account in your database based
      // off some external API request
      return { message: `Account refreshed!`, account_id };
    });
  }
);
