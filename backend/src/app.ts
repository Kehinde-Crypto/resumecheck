import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.routes";
import { logger } from "./utils/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Request Logger
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// API Routes
app.use("/api", apiRoutes);

// Error Handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  logger.error(`Unhandled error: ${err.message}`);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  logger.info(`🚀 ResumeCheck Backend Server running on http://localhost:${PORT}`);
  logger.info(`- Health Check: http://localhost:${PORT}/api/health`);
  logger.info(`- Upload Endpoint: http://localhost:${PORT}/api/resumes/upload`);
  logger.info(`- AI Analysis Endpoint: http://localhost:${PORT}/api/analysis/analyze`);
});

export default app;
