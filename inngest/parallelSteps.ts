import { inngest } from "./client";

/*
Sample event

{
  "name": "demo/items.updated",
  "data": {
    "account_id": "057f134b-2ee3-4c98-b416-3fe94fc6faf3",
    "items": [
      { "id": "01GXBWV2HF931PKRAH3P75SDNF" },
      { "id": "01GXBWVF6CAFQFKHT5TV1Z606G" },
      { "id": "01GXBWVKKKD2KRKCFHJQZKRBCE" },
      { "id": "01GXBWVQBX9DBX56PBK0FQMD1J" }
    ]
  }
}
 */

export const parallelSteps = inngest.createFunction(
  { name: "Parallel Steps", concurrency: 10 },
  { event: "demo/items.updated" },
  async ({ event, step }) => {
    const { items, account_id } = event.data;

    // You can use "step.run" with Promise.all to run steps in parallel
    Promise.all(
      items.map((item) =>
        step.run(`Process item ${item.id}`, async () => {
          // Do some work here like call an external API or write to your database
          return { message: `successfully processed ${item.id}` };
        })
      )
    );

    return { message: `items processed for ${account_id}` };
  }
);
