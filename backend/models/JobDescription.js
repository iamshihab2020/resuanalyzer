import mongoose from "mongoose";

const jdSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  analysis: { type: mongoose.Schema.Types.ObjectId, ref: "Analysis" },
});

export default mongoose.model("JobDescription", jdSchema);
