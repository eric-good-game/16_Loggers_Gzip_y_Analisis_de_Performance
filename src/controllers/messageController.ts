import { Request, Response } from "express";
import logger from "../config/loggerConfig";
import Messages from "../models/messageModel";

class MessageController {
    static async createMessage(req: Request, res: Response) {
        try {
            const message = await Messages.create(req.body);
            res.status(201).json(message);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async getMessages(req: Request, res: Response) {
        try {
            const messages = await Messages.find();
            res.status(200).json(messages);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async getMessageById(req: Request, res: Response) {
        try {
            const message = await Messages.findById(req.params.id);
            if(!message) {
                throw new Error("Message not found");
            }
            res.status(200).json(message);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async updateMessage(req: Request, res: Response) {
        try {
            const message = await Messages.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(message);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    static async deleteMessage(req: Request, res: Response) {
        try {
            const message = await Messages.findByIdAndDelete(req.params.id);
            res.status(200).json(message);
        } catch (err) {
            if(err instanceof Error) {
                logger.error(err.message);
            }
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

}

export default MessageController;