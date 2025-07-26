import Resume from "../models/Resume.js";
import { parsePDF } from "../services/pdfService.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { buffer, originalname, size, mimetype } = req.file;

    // Parse PDF
    const pdfText = await parsePDF(buffer);

    if (!pdfText.success) {
      return res.status(500).json({ error: "Failed to parse PDF" });
    }

    // Save to DB
    const newResume = new Resume({
      originalName: originalname,
      size,
      contentType: mimetype,
      text: pdfText.text,
    });

    const savedResume = await newResume.save();

    res.status(201).json({
      message: "Resume uploaded and processed successfully",
      resumeId: savedResume._id,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
};