import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questions:[{type:String, default:' ', required:true}],
    userId: String,
    timestamp: { type: Date, default: Date.now },
})

export const Question = mongoose.model('Question', questionSchema);