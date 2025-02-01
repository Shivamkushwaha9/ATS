import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
    texts : [{type:String, default:' ', required:true}],
    score : [{type:String}],
    feedback : [{type:String, default:' '}]
})

export const Pdf = mongoose.model('Pdf', pdfSchema);