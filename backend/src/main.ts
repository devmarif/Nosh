/**
 * Application Entry Point
 *
 * Starts the Express server using the configured port.
 * Handles graceful shutdown on termination signals and logs
 * uncaught exceptions and unhandled promise rejections.
 */

import app from "./app/app.js";
import { env } from "./config/env.config.js";
import { logger } from "./config/logger.js";

const PORT = env.PORT;

const serverStart = app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

const serverShutDown = (signal: string) => {
    logger.info(`${signal} received. Server shutting down...`);
    serverStart.close(() => process.exit(0));
};

process.on("SIGINT", () => serverShutDown("SIGINT"));
process.on("SIGTERM", () => serverShutDown("SIGTERM"));

process.on("uncaughtException", (error) => {
    logger.error(error);
    process.exit(1);
});

process.on("unhandledRejection", (reason) => {
    logger.error(reason);
    process.exit(1);
});