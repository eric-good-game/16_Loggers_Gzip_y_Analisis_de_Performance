import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    user: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const messageModel = model('Message', messageSchema);

export default messageModel;

