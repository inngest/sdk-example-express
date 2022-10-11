const express = require("express");
const { serve } = require("inngest/express");

const helloWorldFunction = require("./inngest/helloWorld");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`file!`);
});

app.use("/api/inngest", serve("My Express App", [helloWorldFunction], {}));

app.listen(process.env.PORT || 3000);
