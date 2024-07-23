import { Router } from "express";
import { getMessages, sendMessage } from "../controller/MessageController.js";
import UserAuth from "../middleware/UserAuth.js";

const messageRoute = Router();

messageRoute.get("/:receiver_id", UserAuth, getMessages);
messageRoute.post("/send/:receiver_id", UserAuth, sendMessage);

export default messageRoute;
