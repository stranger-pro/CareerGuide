import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.js";
import cors from 'cors';
import aiRoutes from "./routes/ai.js";
import Razorpay from "razorpay";
import paymentRoutes from './routes/payment.js';
const app = express();
dotenv.config();
connectDB();
export const instance = new Razorpay({
    key_id: process.env.Razorpay_key,
    key_secret: process.env.Razorpay_Secret
});
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/payment", paymentRoutes);
app.get("/", (req, res) => {
    res.send("server is working");
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
