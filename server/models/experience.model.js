import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
  experiences: [{
    position: { type: String, required: true },
    positionIcon: { type: String, required: true }, // Store icon name/path
    company: { type: String, required: true },
    duration: { type: String, required: true }, // E.g., "Jan 2021 - Present"
    skillsUsed: [{ type: String }],
    description: [{ type: String }] // Bullet points
  }],
  timestamp: { type: Date, default: Date.now },
});

export const UserExperience = mongoose.model('UserExperience', experienceSchema);