import dotenv from 'dotenv';
dotenv.config();
import jwt from "jsonwebtoken";
import User from "../models/user.js";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Please Login - No Header",
            });
            return;
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(401).json({
                message: "Please Login - Token Missing",
            });
            return;
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedData || !decodedData._id) {
            res.status(401).json({
                message: "Token Invalid",
            });
            return;
        }
        const user = await User.findById(decodedData._id);
        if (!user) {
            res.status(401).json({
                message: "Token Expired",
            });
            return;
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Please Login",
        });
    }
};
