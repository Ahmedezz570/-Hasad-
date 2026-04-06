import { Schema, model, Types } from "mongoose";

interface IMessage {
  user: Types.ObjectId;
  sender: "user" | "llm";
  text: string;
  createdAt?: Date;
}

const messageSchema = new Schema<IMessage>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  sender: { type: String, enum: ["user", "llm"], required: true },
  text: { type: String, required: true }
}, { timestamps: true });

export default model<IMessage>("Message", messageSchema);