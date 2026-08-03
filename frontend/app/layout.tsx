import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResumeCheck — AI-Powered Resume Analyzer",
  description: "Upload your resume and get instant AI-powered feedback. Check ATS compatibility, content quality, and get actionable tips to land more interviews.",
  keywords: ["resume analyzer", "AI resume checker", "ATS resume", "resume feedback", "career tools"],
  authors: [{ name: "ResumeCheck" }],
  openGraph: {
    title: "ResumeCheck — AI-Powered Resume Analyzer",
    description: "Get instant AI feedback on your resume. ATS score, section analysis, and actionable improvements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
