import { Router, Request, Response } from "express";
import { upload } from "../config/multer";
import { parseResumeFile } from "../modules/resume/resume.parser";
import { analyzeResumeWithAI } from "../modules/analysis/analysis.service";
import { registerUser, loginUser } from "../modules/auth/auth.service";
import { authenticateToken, AuthRequest } from "../middleware/auth.middleware";
import { generatePdfReportHtml } from "../modules/report/report.service";
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

// AUTH ROUTES
router.post("/auth/register", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }
    const result = await registerUser(email, password, name);
    res.json({ success: true, data: result });
  } catch (error: any) {
    logger.error(`Register error: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
});

router.post("/auth/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }
    const result = await loginUser(email, password);
    res.json({ success: true, data: result });
  } catch (error: any) {
    logger.error(`Login error: ${error.message}`);
    res.status(401).json({ error: error.message });
  }
});

router.get("/auth/me", authenticateToken, (req: AuthRequest, res: Response) => {
  res.json({ success: true, user: req.user });
});

// RESUME & ANALYSIS ROUTES
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

router.post("/analysis/analyze", upload.single("resume"), async (req: Request, res: Response): Promise<void> => {
  try {
    let rawText = req.body.rawText || "";
    let filename = req.body.filename || "Uploaded_Resume.pdf";
    const jobDescription = req.body.jobDescription || "";

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

// REPORT GENERATION ROUTE
router.post("/reports/export", (req: Request, res: Response) => {
  try {
    const analysisData = req.body.analysis;
    if (!analysisData) {
      res.status(400).json({ error: "Analysis data required for report export." });
      return;
    }

    const html = generatePdfReportHtml(analysisData);
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (error: any) {
    res.status(500).json({ error: "Failed to generate report export." });
  }
});

export default router;
