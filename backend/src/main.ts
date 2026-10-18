/**
 * Application Entry Point
 *
 * Starts the Express server using the configured port.
 * Handles graceful shutdown on termination signals and logs
 * uncaught exceptions and unhandled promise rejections.
 */

import { bootStrap } from "./app/bootStrap.js";
import { createServer } from "./app/server.js";
import { ShutDown } from "./app/shutDown.js";
import { logger } from "./config/logger.js";

const start = async (): Promise<void> => {
  try {
    await bootStrap();
    const server = createServer();
    process.on("SIGINT", () => ShutDown(server, "SIGINT"));
    process.on("SIGTERM", () => ShutDown(server, "SIGTERM"));
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};
start();

process.on("uncaughtException", (error) => {
  logger.error(error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error(reason);
  process.exit(1);
});
