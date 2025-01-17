//importing general
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import "express-async-errors";
import cookieParser from "cookie-parser";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

//importing routers
import dogRouter from "./routes/DogRoute.js";
import userRouter from "./routes/UserRoute.js";
import authRouter from "./routes/AuthRoute.js";

import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { authenticateUser } from "./middlewares/authMiddleware.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(express.json());
app.use(cookieParser());

//routers
app.use("/api/dogs", authenticateUser, dogRouter);
app.use("/api/user", authenticateUser, userRouter);
app.use("/api/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
//error handlers
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5050;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
