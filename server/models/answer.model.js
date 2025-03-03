import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    answers:[{type:String, default:' ', required:true}],
    userId: String,
    timestamp: { type: Date, default: Date.now },
})

export const UserAnswers = mongoose.model('UserAnswers', answerSchema);