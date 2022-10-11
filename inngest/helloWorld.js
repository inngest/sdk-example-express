const { createFunction } = require("inngest");

module.exports = createFunction(
  "Hello World",
  "demo/event.sent",
  ({ event }) => {
    return {
      message: "Hello Inngest!",
    };
  }
);
