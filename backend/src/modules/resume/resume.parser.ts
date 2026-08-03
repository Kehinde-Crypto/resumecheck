import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { logger } from "../../utils/logger";

export interface ParsedResume {
  filename: string;
  fileType: string;
  rawText: string;
  wordCount: number;
}

export async function parseResumeFile(file: Express.Multer.File): Promise<ParsedResume> {
  const filename = file.originalname;
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  let rawText = "";

  logger.info(`Parsing file: ${filename} (type: ${file.mimetype}, ext: ${ext})`);

  try {
    if (ext === "pdf" || file.mimetype === "application/pdf") {
      const data = await pdfParse(file.buffer);
      rawText = data.text;
    } else if (ext === "docx" || ext === "doc" || file.mimetype.includes("wordprocessingml")) {
      const result = await mammoth.extractRawText({ buffer: file.buffer });
      rawText = result.value;
    } else if (ext === "txt" || file.mimetype === "text/plain") {
      rawText = file.buffer.toString("utf-8");
    } else {
      // Fallback UTF-8 text extraction
      rawText = file.buffer.toString("utf-8");
    }

    // Clean text whitespace
    rawText = rawText.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

    if (!rawText || rawText.length < 50) {
      throw new Error("Extracted text is empty or too short. Ensure the file contains readable text and is not an image scan.");
    }

    const wordCount = rawText.split(/\s+/).filter(Boolean).length;

    logger.info(`Successfully parsed ${filename}: ${wordCount} words extracted.`);

    return {
      filename,
      fileType: ext,
      rawText,
      wordCount,
    };
  } catch (error: any) {
    logger.error(`Error parsing ${filename}: ${error.message}`);
    throw new Error(`Failed to extract text from ${filename}: ${error.message}`);
  }
}
