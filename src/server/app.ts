import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { connectMongoDB } from "../config/db.connection";

import bodyParser from "body-parser";

import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const app: Express = express();
const morgaConfig = morgan("dev");

app.use(morgaConfig);
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
connectMongoDB();
// console.log(process.env.MONGODB_URI);

import routers from "../routes";

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome jweb api",
  });
});
app.use("/api/v1", routers);

module.exports = app;
