import mongoose, { set } from "mongoose";
import logger from "../utils/logger";

export const connectMongoDB = async () => {
  const url = process.env.MONGODB_URL as string;
  if (!url) {
    logger.error("MONGODB_URL is not defined in environtment variables");
    throw new Error("MONGODB_URL is not defined");
  }
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(url);
    const db = mongoose.connection;

    db.on("error", (error) => logger.error("MongoDB Connection error: ", error));
    db.on("connected", () => logger.info(`Mongodb status: connected ${db.name}`));
    db.on("open", () => logger.info(`Mongodb status: open  ${db.name}`));
  } catch (error) {
    logger.error("MongoDb Connection error :", error);
  }
};
