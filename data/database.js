import mongoose from "mongoose";
import { User } from "../models/user.js";

// Database Connection
export const connectDB = () => { 
    mongoose.connect(process.env.MONGO_URI, {
        dbName : "TODO_Database",
    }).then((c)=>{
        console.log(`Databse Connected with ${c.connection.host}`);
    }).catch(() => {
        console.log("Error occured while connecting database...");
    })
};