import { inngest } from "./client";

/*
Sample event

{
  "name": "demo/simple.event",
  "data": {
    "name": "Inngest"
  }
}
 */

export const simpleFunction = inngest.createFunction(
  { name: "Simple" },
  { event: "demo/simple.event" },
  async ({ event }) => {
    return {
      message: `Hello ${event.data.name}!`,
    };
  }
);
