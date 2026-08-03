import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyze Your Resume — ResumeCheck",
  description: "Upload your resume (PDF, DOCX, TXT) and get an instant AI-powered score and feedback in seconds.",
};

export default function UploadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
