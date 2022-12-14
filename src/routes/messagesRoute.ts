import { Router } from "express";
import MessageController from "../controllers/messageController";

const router = Router();

router
    .post("/", MessageController.createMessage)
    .get("/", MessageController.getMessages)
    .get("/:id", MessageController.getMessageById)
    .put("/:id", MessageController.updateMessage)
    .delete("/:id", MessageController.deleteMessage);

export default router;