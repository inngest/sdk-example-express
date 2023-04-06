import * as dotenv from "dotenv";
import express from "express";
import { serve } from "inngest/express";

/**
 * dotenv loads the .env file to pick up the following environment variables:
 * - INNGEST_EVENT_KEY
 * - INNGEST_SIGNING_KEY
 */
dotenv.config();

import { inngest, functions } from "./inngest";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`Check out /api/inngest`);
});

app.use(express.json());
app.use("/api/inngest", serve(inngest, functions));

app.listen(process.env.PORT || 3000);
