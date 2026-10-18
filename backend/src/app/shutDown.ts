import { Server } from "http";
import { logger } from "../config/logger.js";

export const ShutDown = (server: Server, signal: String): void => {
  logger.info(`${signal} received. Shutting Down GraceFully...`);
  server.close(() => {
    logger.info("HTTP server closed...");
    process.exit(0);
  });
};
