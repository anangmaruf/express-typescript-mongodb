import { createLogger, format, transports } from "winston";
import path from "path";
import DailyRotateFile from "winston-daily-rotate-file";

/**
 * Custom Log Format
 */
const customFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toLocaleUpperCase()}]: ${message}`;
});

/**
 * Define log format
 */
const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug", // Debug level in development
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), //timestamp format
    customFormat
  ),
  transports: [
    //Console transport
    new transports.Console({
      format: format.combine(
        format.colorize(), // Colorize console input
        customFormat
      ),
    }),
    /**
     * File transport for error logging
     */
    new DailyRotateFile({
      filename: "logs/jweb-api-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxFiles: "30d", // Retain log files for 30 days
    }),
    new transports.Console(),
  ],
});

// Handle uncaught exceptions and unhandled rejections
logger.exceptions.handle(new transports.File({ filename: path.join(__dirname, "logs/exceptions.log") }));
logger.rejections.handle(new transports.File({ filename: path.join(__dirname, "logs/rejections.log") }));

export default logger;
