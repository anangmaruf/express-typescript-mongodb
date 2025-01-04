import logger from "../utils/logger";
import { getAppServer, PORT } from "./server";

const appServer = getAppServer();

appServer.listen(PORT, async () => {
  logger.info(`Server ${process.env.APP_NAME} listen PORT: ${PORT}`);
});

// process.on('uncaughtException', (err) => {
//   winston.error(`Server exit for uncaught Exception`, err);
// })
