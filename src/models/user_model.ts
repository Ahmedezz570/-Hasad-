import mongoose ,{Document}from "mongoose";

export interface User extends Document {
    name: string;
    email: string;
    password: string;  
    updatedAt: Date;
    createdAt: Date;              
}

const userSchema = new mongoose.Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
},
    {timestamps: true}
);

export default mongoose.model<User>('User', userSchema);