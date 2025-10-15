import express from "express";
import { newTask, getMyTask, updateTask, deleteTask } from "../controllers/task.js";
import { isAuthenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticate, newTask);

router.get("/my", isAuthenticate, getMyTask);

// dynamic route url : with PUT & POST both API at same URL
router.route("/:id").put(isAuthenticate, updateTask).delete(isAuthenticate, deleteTask);

export default router;