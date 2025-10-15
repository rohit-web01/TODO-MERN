import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();

config({
    path:"./data/config.env",
})

//using middleware : 
app.use(express.json());
app.use(cookieParser());

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// Checking server working fine or not ?
app.get("/", (req, res)=>{
    res.send("Everything working fine...");
});

// using error middleware
app.use(errorMiddleware);