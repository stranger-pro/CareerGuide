import express from "express";
const router = express.Router();

import { loginUser, myProfile } from "../controllers/user.js";
import { isAuth } from "../middlewares/isAuth.js";

router.post("/login", loginUser);
router.get("me",isAuth,myProfile);

export default router;