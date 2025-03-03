import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, sparse: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profilePicture: { type: String, default: '' },
  summary: { type: String, default: '' },
  resume: { type: String, default: '' },
  githubLinks: [{ type: String }],
  skills: [{ type: String }],
  jobApplications: [{
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Jobs' },
    status: { type: String }
  }],
  // isVerified: { type: Boolean, default: false },
  googleId: { type: String }, //Google ID for Google authenticated users
  name: { type: String }, // Full name from Google
  image: { type: String } // Profile image from Google
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);