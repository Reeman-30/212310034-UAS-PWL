import { Router } from "express";
import {
  connect,
  loginUsers,
  logoutUser,
  registerUsers,
} from "../controller/AuthController.js";

const authRoute = Router();

authRoute.get("/connect", connect);

authRoute.post("/register", registerUsers);
authRoute.post("/login", loginUsers);
authRoute.post("/logout", logoutUser);

export default authRoute;
