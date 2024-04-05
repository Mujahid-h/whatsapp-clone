// route.js
import express from "express";
import { addUser, getUsers } from "../controllers/userController.js";
import {
  newConversation,
  getConversation,
} from "../controllers/conversationController.js";
import { newMessage, getMessages } from "../controllers/messageController.js";
import upload from "../utils/upload.js";
import { getImage, uploadFile } from "../controllers/fileController.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/users", getUsers);

router.post("/conversation/add", newConversation);
router.post("/conversation/get", getConversation);

router.post("/message/add", newMessage);
router.get("/message/get/:id", getMessages);

router.post("/file/upload", upload.single("file"), uploadFile);
router.get("/file/:filename", getImage);

export default router;
