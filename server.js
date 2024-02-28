import "dotenv/config.js";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { db, creteUserTable } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { createTable } from "./sql/queries.js";
import { errorMiddleWare } from "./middlewares/errorMiddleware.js";
import { verifyToken } from "./middlewares/verifyToken.js";
import userRoutes from './routes/userRoutes.js'
const app = express();
const PORT = process.env.PORT || 3000;

db.connect((err) => {
  if (err) {
    throw err;
  }
  creteUserTable();

  console.log("database connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));

app.use("/auth", authRoutes);
app.use('/user',verifyToken,userRoutes)
app.get('/ping',(req,res)=>res.json('pong'))

app.use(errorMiddleWare)
app.listen(PORT, console.log(`listening in port ${PORT}`));
