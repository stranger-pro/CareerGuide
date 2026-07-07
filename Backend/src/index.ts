import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();
connectDB();
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true,limit:"10mb"}));

app.use("/api/users", userRoutes);

app.get("/",(req,res)=>{
  res.send("server is working");
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});