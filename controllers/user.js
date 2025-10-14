import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";


// POST API for login of user
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email }).select("+password"); // because we set not, selected for password in schema.

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password.",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password.",
    });
  }

  sendCookie(user, res, `Welcome back, ${user.name}`, 200);
};

// POST API for registering new users.
export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: "User already exist",
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, "Registered Successfully", 201);
};


// GET API for showing details of user
export const getMyProfile =  (req, res) => {

    res.status(200).json({
        success : true,
        user: req.user,
    });
};


// GET API for logging out user
export const logout = (req, res) => {
    res.status(200).cookie("token", "", {
        expire : new Date(Date.now())
    }).json({
        success : true,
        message : "Successfully logout"
    });
};