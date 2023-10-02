import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
//env configuration
dotenv.config();
const app = express();
//middleware for parsing the incoming request
app.use(express.json());
//db connection string
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => console.log(error));
//register all routes
app.use("/api/auth", userRoutes);
//listen the port
app.listen(3500, () => {
  console.log("server is started on port 3500");
});
