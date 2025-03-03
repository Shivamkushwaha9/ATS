import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';

import express, { urlencoded } from 'express';
import connectDB from './utils/db.js';
import cookieParser from 'cookie-parser';
import userRoute from "./routes/user.route.js";
import uploadRoute from "./routes/upload.route.js";

// Expereice wala routing ke liye
import experienceRoutes from './routes/experiences.route.js';




//File upload ke regarding
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', uploadRoute);
app.use('/api', experienceRoutes);




app.use("/api", userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at PORT: ${PORT}`);
})