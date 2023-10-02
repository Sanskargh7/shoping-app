import express from "express";
import Authentication from "../middleware/Authentication.js";
import User from "../controller/User.js";
const router = express.Router();
//register route
router.post("/register", Authentication.validateUserInfo, User.registerUser);
export default router;
