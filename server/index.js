import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from "./routes/user.route.js";

import path from 'path';
import { fileURLToPath } from 'url';



//File upload ke regarding
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api/v1", userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at PORT: ${PORT}`);
})