import { Request, Response } from "express";
import Message from "../models/message_model";
import { askAI } from "../utils/ai";

export const chatWithAI = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Message required" });
    }

    await Message.create({
      user: userId,
      sender: "user",
      text
    });


    const aiResponse = await askAI(text);


    await Message.create({
      user: userId,
      sender: "llm",
      text: aiResponse
    });

    res.json({
      message: aiResponse
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Chat failed", error });
  }
};