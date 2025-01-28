import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB connected and working")
    } catch (error) {
        console.log(`Some Error occured while connecting to mongoDB ${error}`)
    }
}
export default connectDB;