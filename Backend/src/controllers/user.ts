import { outh2Client } from "../config/googleconfig.js";
import TryCatch  from "../middlewares/tryCatch.js";
import axios from "axios";
import User from "../models/user.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticatedRequest } from "../middlewares/isAuth.js";
dotenv.config();

export const loginUser = TryCatch(async (req,res) => {
    const {code} = req.body;

    if(!code){
        return res.status(400).json({
            message:"Authorization code is required",
        });
    }

    const googleRes = await outh2Client.getToken(code);

    outh2Client.setCredentials(googleRes.tokens);
    const userRes = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );

    const {email ,name , picture} = userRes.data;

    let user = await User.findOne({email});

    if(!user){
        user = await User.create({
            name,
            email,
            image:picture,
        })
    }

    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET as string,{
        expiresIn:"4d",
    });

    return res.status(201).json({
        message:"User Logged In",
        token,
        user,
    })

})

export const myProfile = TryCatch(async(req:AuthenticatedRequest,res) => {
    const user = req.user;

    res.json(user);
})