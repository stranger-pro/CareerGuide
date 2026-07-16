import express from "express";
const router = express.Router();


import { isAuth } from "../middlewares/isAuth.js";
import { checkOut, paymentVerification } from "../controllers/payment.js";

router.post("/checkout",isAuth,checkOut);
router.post("/verify",isAuth,paymentVerification);


export default router;