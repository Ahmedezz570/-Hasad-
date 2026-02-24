import { Request , Response } from "express";
import bcrypt from 'bcrypt';
import User from "../models/user_model";
import generateToken from "../utils/generateToken";


// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
export const registerUser = async (req: Request, res: Response) => {
const { name, email, password } = req.body;

const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({
       name,
       email,
       password: hashedPassword,
});
const token = generateToken(user._id.toString());
      res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token,
});
}

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
export const loginUser = async (req: Request, res: Response) => {
const { email, password } = req.body;
const user = await User.findOne({ email });
     if(!user){
       return res.status(400).json({ message: "Invalid email or password" });                              
        }

const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid email or password" });
        }
const token = generateToken(user._id.toString());
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token,
        });
}