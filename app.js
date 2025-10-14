import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
    path:"./data/config.env",
})

//using middleware : 
app.use("/users", userRouter);
app.use(express.json());