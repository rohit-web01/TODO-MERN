import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();

config({
    path:"./data/config.env",
})

//using middleware : 
app.use(express.json());
app.use(cookieParser());

//using routes
app.use("/api/v1/users", userRouter);

// Checking server working fine or not ?
app.get("/", (req, res)=>{
    res.send("Everything working fine...");
});