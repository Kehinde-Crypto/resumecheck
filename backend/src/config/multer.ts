import multer from "multer";

// Store uploaded resume files in memory buffer for instant parsing
const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (_req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "text/plain",
      "application/vnd.oasis.opendocument.text",
      "application/rtf",
    ];

    if (allowedTypes.includes(file.mimetype) || file.originalname.match(/\.(pdf|docx|doc|txt|odt|rtf)$/i)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file format. Please upload PDF, DOCX, DOC, TXT, ODT, or RTF."));
    }
  },
});
