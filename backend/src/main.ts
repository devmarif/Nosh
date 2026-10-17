import app from "./app/app.js";
import { env } from "./config/env.config.js";
import { logger } from "./config/logger.js";
const PORT = env.PORT;

const serverStart = app.listen(PORT, () => {
  logger.info(`Server is running at the PORT ${PORT}`);
});

const serverShutDown = (signal: string) => {
  logger.info(`${signal} recieved..,Server Shutting Down....`);
  serverStart.close(async () => process.exit(0));
};

process.on("SIGINIT", () => serverShutDown("SIGINIT"));
process.on("SIGTERM", () => serverShutDown("SIGTERM"));

process.on("uncaughtException", (error) => {
  logger.error(error);
  process.exit(1);
});
process.on("unhandledRejection", (reason) => {
  logger.error(reason);
  process.exit(1);
});
