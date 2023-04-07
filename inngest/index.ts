export { inngest } from "./client";

import { simpleFunction } from "./simpleFunction";
import { parallelSteps } from "./parallelSteps";
import { scheduledFunction } from "./scheduledFunction";
import { scheduledFanOut, fanOutProcessor } from "./fanOut";
import { dynamicWorkflow } from "./dynamicWorkflow";

export const functions = [
  simpleFunction,
  parallelSteps,
  scheduledFunction,
  scheduledFanOut,
  fanOutProcessor,
  dynamicWorkflow,
];
