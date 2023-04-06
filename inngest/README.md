# `inngest` directory

The pattern here is a great way to set up your Inngest project.

- `client.ts` - Where the `new Inngest()` client is created so it can be re-used across the app
- `types.ts` (optional) - A central place to define TypeScript types for each event payload which are passed as a Generic to the client in `client.ts`
- `index.ts` - A useful single export location which can export the client and functions for usage in the parent app (Express.js in this case)
- `<my-function>.ts` - All other files are Inngest functions that are imported within `index.ts`
