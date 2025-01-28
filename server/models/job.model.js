import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    companyName:{type:String, required:true},
    companyLogo:{type:String, default:' '},
    employmentType:{type:String, enum:['Full-time', 'Internship', 'Part-time', 'Contract'], default:'Full-time'},
    salaryRange: {type:String, default:' '},
    skillsRequired: [{type:String}],
    postedAt : {type:Date, default:Date.now},
    applicationDeadline : {type:Date},
})

export const Jobs = mongoose.model('Jobs', jobSchema);