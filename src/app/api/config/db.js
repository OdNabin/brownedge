import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to db");
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
};

export default connectDB;
