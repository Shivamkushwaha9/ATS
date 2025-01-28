import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3002;

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));


app.use(cors({origin:"http://localhost:3000", credentials:true}));

app.use("/api/v1", userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at PORT: ${PORT}`);
})