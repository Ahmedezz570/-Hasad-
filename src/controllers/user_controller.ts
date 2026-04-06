import { Request, Response } from "express";
import User from "../models/user_model";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      count: users.length,
      users
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch users"
    });
  }
};