import mongoose from "mongoose";
import { User } from "../models/user.js";

// Database Connection
export const connectDB = () => { 
    mongoose.connect(process.env.MONGO_URI, {
        dbName : "TODO_Database",
    }).then(()=>{
        console.log("Database connected successfully...");
    }).catch(() => {
        console.log("Error occured while connecting database...");
    })
};