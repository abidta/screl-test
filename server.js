import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import {  db } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));

app.use("/auth", authRoutes);
db.connect((err) => {
  if (err) {
    throw err;
    process.exit(1);
  }
  console.log("database connected");
});

// app.get()

app.listen(PORT, console.log(`listening in port ${PORT}`));
