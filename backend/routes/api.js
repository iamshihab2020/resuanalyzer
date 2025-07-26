import express from "express";
import multer from "multer";
import { uploadResume } from "../controllers/resumeController.js";
import { processJobDescription } from "../controllers/analysisController.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Resume processing
router.post("/resume", upload.single("resume"), uploadResume);

// Job description processing
router.post("/job-description", processJobDescription);

export default router;
