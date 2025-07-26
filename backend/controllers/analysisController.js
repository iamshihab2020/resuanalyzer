import JobDescription from "../models/JobDescription.js";
import Resume from "../models/Resume.js";

export const processJobDescription = async (req, res) => {
  try {
    const { jdText, resumeId } = req.body;

    if (!jdText || !resumeId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Save JD
    const newJD = new JobDescription({ text: jdText });
    const savedJD = await newJD.save();

    // Link to resume
    await Resume.findByIdAndUpdate(resumeId, { analysis: savedJD._id });

    res.status(201).json({
      message: "Job description processed",
      jdId: savedJD._id,
      resumeId,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
};
