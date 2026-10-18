/**
 * Logger Configuration
 *
 * Configures Pino for application logging.
 * Uses pino-pretty for readable logs during development
 * and structured JSON logs in other environments.
 */

import pino from "pino";
import { env } from "./env.config.js";

export const logger = pino({
  ...(env.NODE_ENV === "development" && {
    transport: {
      target: "pino-pretty",
    },
  }),
  base:undefined
});