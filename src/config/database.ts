import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try{
      console.log("ENV VALUE:", process.env.MONGO_URI);
      const conn =  await mongoose.connect(process.env.MONGO_URI as string);
      console.log(`Database connected successfully ${conn.connection.host}`);            
    }catch (error) {
      console.log(`Error: ${error}`);
//       process.exit(1);  
    }                
} 


export default connectDB;