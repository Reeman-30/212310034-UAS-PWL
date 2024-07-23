import { Router } from "express";
import { connect, getAllUsers } from "../controller/UserController.js";
import UserAuth from "../middleware/UserAuth.js";

const userRoute = Router();

userRoute.get("/connect", connect);
userRoute.get("/", UserAuth, getAllUsers);

export default userRoute;
