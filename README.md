# Inngest Express.js Template

This is an [Express.js](https://expressjs.com/) v4 project. It is a reference on how to send and receive events with Inngest and Express.js running on any platform that supports Express.js including Heroku, Docker, etc.

## Getting Started

After installing dependencies with `yarn`, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000/api/inngest](http://localhost:3000/api/inngest) with your browser to check configuration.

Start the Inngest dev server to test all functions on your machine!

```
npx inngest-cli@latest dev -u http://localhost:3000/api/inngest
```

Open [http://localhost:8288](http://localhost:8288) in your browser to see the dev server.

[Inngest functions](https://www.inngest.com/docs/functions) are available at [`./inngest`](/inngest).

## Testing

Each function within [`./inngest`](/inngest) includes some information and test event payloads that you can send with the Inngest dev server's "Send Event" button. For example, open up your Inngest dev server and send the following event:

```json
{
  "name": "demo/simple.event",
  "data": {
    "name": "Inngest"
  }
}
```

## Learn More

- [Inngest Documentation](https://www.inngest.com/docs) - learn about the Inngest SDK, functions, and events
- [Express.js Documentation](https://expressjs.com/en/4x/api.html) - learn about Express.js features and API.

Feedback and contributions are welcome!
