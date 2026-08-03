export interface SectionScore {
  name: string;
  score: number;
  weight: string;
  icon: string;
}

export interface ImprovementItem {
  priority: "high" | "medium" | "low";
  text: string;
}

export interface AtsCheckItem {
  item: string;
  pass: boolean;
}

export interface AnalysisResult {
  filename: string;
  overallScore: number;
  atsScore: number;
  tone: string;
  analyzedAt: string;
  sectionScores: SectionScore[];
  strengths: string[];
  improvements: ImprovementItem[];
  atsChecklist: AtsCheckItem[];
  keywords: {
    found: string[];
    missing: string[];
  };
}

export function buildAnalysisPrompt(rawText: string, jobDescription?: string): string {
  return `
You are an expert executive resume reviewer and Applicant Tracking System (ATS) auditor.
Analyze the following resume text carefully and produce a comprehensive, structured evaluation.

Resume Text:
---
${rawText}
---

${jobDescription ? `Target Job Description:\n---\n${jobDescription}\n---` : ""}

Evaluate the resume across these dimensions:
1. Overall Score (0-100)
2. ATS Score (0-100)
3. Tone (e.g. "Professional", "Executive", "Too Generic", "Passive")
4. Section Scores (0-100) for: Work Experience, Skills, ATS Compatibility, Education, Professional Summary, Formatting, Contact Info, Readability.
5. Strengths (list 4-6 specific callouts)
6. Improvements (list 5-8 prioritized items with high/medium/low priority)
7. ATS Checklist (8 pass/fail criteria)
8. Keywords Found vs Missing

CRITICAL: Return ONLY a valid JSON object matching the exact structure below, with NO markdown backticks or markdown code blocks:

{
  "overallScore": 78,
  "atsScore": 85,
  "tone": "Professional",
  "sectionScores": [
    { "name": "Work Experience", "score": 75, "weight": "30%", "icon": "💼" },
    { "name": "Skills", "score": 90, "weight": "15%", "icon": "⚡" },
    { "name": "ATS Compatibility", "score": 85, "weight": "10%", "icon": "🎯" },
    { "name": "Education", "score": 80, "weight": "10%", "icon": "🎓" },
    { "name": "Professional Summary", "score": 65, "weight": "10%", "icon": "📝" },
    { "name": "Formatting", "score": 85, "weight": "15%", "icon": "🎨" },
    { "name": "Contact Info", "score": 100, "weight": "5%", "icon": "📋" },
    { "name": "Readability", "score": 78, "weight": "5%", "icon": "📖" }
  ],
  "strengths": [
    "Clear, logical reverse-chronological structure",
    "Strong technical skills highlighted prominently"
  ],
  "improvements": [
    { "priority": "high", "text": "Quantify achievements in work experience bullets with metrics and numbers." },
    { "priority": "medium", "text": "Expand professional summary to highlight key accomplishments." }
  ],
  "atsChecklist": [
    { "item": "Standard section headers (Experience, Education, Skills)", "pass": true },
    { "item": "No tables or complex columns", "pass": true },
    { "item": "Machine-readable contact details", "pass": true },
    { "item": "Action verbs starting bullet points", "pass": true },
    { "item": "Quantified achievements included", "pass": false },
    { "item": "Industry keywords included", "pass": true },
    { "item": "Consistent date formatting", "pass": true },
    { "item": "Appropriate file length and density", "pass": true }
  ],
  "keywords": {
    "found": ["TypeScript", "React", "Node.js", "Git"],
    "missing": ["System Design", "CI/CD", "AWS", "Docker"]
  }
}
`;
}
