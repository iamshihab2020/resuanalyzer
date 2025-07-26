import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  originalName: String,
  size: Number,
  contentType: String,
  text: String,
  uploadDate: { type: Date, default: Date.now },
  analysis: { type: mongoose.Schema.Types.ObjectId, ref: "Analysis" },
});

export default mongoose.model("Resume", resumeSchema);
