import { inngest } from "./client";

/*
Sample event

{
  "name": "demo/campaign.workflow",
  "data": {
    "account_id": "057f134b-2ee3-4c98-b416-3fe94fc6faf3",
    "actions": [
      { "type": "email", "data": { "email": "jane@example.com", "name": "Jane", "message": "Hi there!" } },
      { "type": "wait", "data": "5d" },
      { "type": "sms", "data": { "phone": "+12125551234", "message": "Hello again!" } },
      { "type": "wait", "data": "2d" },
      { "type": "email", "data": { "email": "jane@example.com", "name": "Jane", "message": "Please respond :)" } }
    ]
  }
}
 */

export const dynamicWorkflow = inngest.createFunction(
  { name: "Dynamic workflow" },
  { event: "demo/campaign.workflow" },
  async ({ event, step }) => {
    const { actions } = event.data;

    for (let action of actions) {
      switch (action.type) {
        case "email":
          await step.run("Send email", async () => {
            // await sendEmail(action.data)
            return `Email sent successfully`;
          });
          break;
        case "sms":
          await step.run("Send email", async () => {
            // await sendSMS(action.data.phone, action.data.message)
            return `SMS sent successfully`;
          });
          break;
        case "wait":
          await step.sleep(action.data);
          break;
      }
    }

    return { message: `completed workflow for ${event.data.account_id}` };
  }
);
