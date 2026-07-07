import { outh2Client } from "../config/googleconfig.js";
import TryCatch from "../middlewares/trycatch.js";
import axios from "axios";
export const loginUser = TryCatch(async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({
            message: "Authorization code is required",
        });
    }
    const googleRes = await outh2Client.getToken(code);
    outh2Client.setCredentials(googleRes.tokens);
    const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=$
        {googleRes.tokens.access_token}`);
});
