import { Router, Request, Response } from "express";
import { upload } from "../config/multer";
import { parseResumeFile } from "../modules/resume/resume.parser";
import { analyzeResumeWithAI } from "../modules/analysis/analysis.service";
import { logger } from "../utils/logger";

const router = Router();

// Health Check
router.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    service: "ResumeCheck API Service",
    timestamp: new Date().toISOString(),
  });
});

// Resume Upload & Text Extraction Endpoint
router.post("/resumes/upload", upload.single("resume"), async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No resume file uploaded. Please attach a PDF, DOCX, or TXT file." });
      return;
    }

    const parsed = await parseResumeFile(req.file);
    res.json({
      success: true,
      message: "Resume parsed successfully.",
      data: parsed,
    });
  } catch (error: any) {
    logger.error(`Upload endpoint error: ${error.message}`);
    res.status(500).json({ error: error.message || "Failed to process resume file." });
  }
});

// Analyze Resume Endpoint (Accepts file upload OR rawText JSON)
router.post("/analysis/analyze", upload.single("resume"), async (req: Request, res: Response): Promise<void> => {
  try {
    let rawText = req.body.rawText || "";
    let filename = req.body.filename || "Uploaded_Resume.pdf";
    const jobDescription = req.body.jobDescription || "";

    // If file is attached in request, parse it first
    if (req.file) {
      const parsed = await parseResumeFile(req.file);
      rawText = parsed.rawText;
      filename = parsed.filename;
    }

    if (!rawText || rawText.trim().length < 50) {
      res.status(400).json({ error: "Resume content is too short or missing. Please upload a valid document." });
      return;
    }

    logger.info(`Starting AI analysis for ${filename}...`);
    const analysis = await analyzeResumeWithAI(rawText, filename, jobDescription);

    res.json({
      success: true,
      message: "Analysis completed successfully.",
      data: analysis,
    });
  } catch (error: any) {
    logger.error(`Analysis endpoint error: ${error.message}`);
    res.status(500).json({ error: error.message || "Failed to analyze resume." });
  }
});

export default router;
