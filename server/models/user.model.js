import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    profilePicture:{type:String, default:' '},
    summary:{type:String, default:' '},
    resume:{type:String, default:' '},
    githubLinks:[{type:String, default:' '}],
    skills:[{type:String, default:' '}],
    jobApplications : [{jobId: {type:mongoose.Schema.Types.ObjectId, ref:'Jobs'}, status:{type:String}}],
    isVerified:{type:String, default:' '}
})

export const User = mongoose.model('User', userSchema);