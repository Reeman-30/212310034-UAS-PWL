import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import DBConnect from "./config/MongoDBConnect.js";
import userRoute from "./routes/UserRoute.js";
import authRoute from "./routes/AuthRoute.js";
import messageRoute from "./routes/MessageRoute.js";

const app = express();
dotenv.config();

const PORT = process.env.APP_PORT || 3030;

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

app.listen(PORT, () => {
  DBConnect();
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
