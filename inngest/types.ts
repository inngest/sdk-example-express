/**
 * You can define the types for each of your event payloads
 */

export type Events = {
  "demo/simple.event": DemoSimpleEvent;
  "demo/items.updated": DemoItemsUpdated;
  "demo/refresh.account": DemoRefreshAccount;
};

type DemoSimpleEvent = {
  name: "demo/simple.event";
  data: {
    name: string;
  };
};

type DemoItemsUpdated = {
  name: "demo/items.updated";
  data: {
    account_id: string;
    items: {
      id: string;
    }[];
  };
};

export type DemoRefreshAccount = {
  name: "demo/refresh.account";
  data: {
    account_id: string;
  };
};
