const app = require("./app");
import debug from "debug";
import http, { Server } from "http";

export const PORT = normalizePort(process.env.PORT || "3000");
export const APP_NAME = process.env.APP_NAME || "endpoint";
/**
 * Listen Server with port
 */
export const getAppServer = (): Server => {
  app.set("port", PORT);

  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.on("error", onError);

  server.on("listening", () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? `Pipe: ${PORT}` : `Port: ${PORT}`;
    debug(`${APP_NAME}:server`)(`Listening on : ${bind}`);
  });

  return server;
};

function normalizePort(val: string): string | number | false {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error: { syscall: string; code: any }): void {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof PORT === "string" ? `Pipe ${PORT}` : `Port ${PORT}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
