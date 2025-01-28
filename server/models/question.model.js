import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questions:[{type:String, default:' ', required:true}],
    options:[{type:String}],
    answers:[{type:String, default:' ', required:true}],
})

export const Question = mongoose.model('Question', questionSchema);