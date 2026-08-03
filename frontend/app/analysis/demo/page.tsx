"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const defaultMockAnalysis = {
  filename: "John_Doe_Resume.pdf",
  overallScore: 78,
  atsScore: 91,
  tone: "Professional",
  analyzedAt: "Just now",
  sectionScores: [
    { name: "Work Experience", score: 74, weight: "30%", icon: "💼" },
    { name: "Skills", score: 88, weight: "15%", icon: "⚡" },
    { name: "ATS Compatibility", score: 91, weight: "10%", icon: "🎯" },
    { name: "Education", score: 85, weight: "10%", icon: "🎓" },
    { name: "Professional Summary", score: 62, weight: "10%", icon: "📝" },
    { name: "Formatting", score: 80, weight: "15%", icon: "🎨" },
    { name: "Contact Info", score: 100, weight: "5%", icon: "📋" },
    { name: "Readability", score: 76, weight: "5%", icon: "📖" },
  ],
  strengths: [
    "Strong technical skills section with relevant keywords",
    "Clean, ATS-friendly formatting with standard section headers",
    "Complete contact information including LinkedIn and GitHub",
    "Good use of industry-specific terminology throughout",
    "Education section is well-structured and includes GPA",
  ],
  improvements: [
    { priority: "high" as const, text: "Work experience bullets are too duty-focused. Rewrite them with quantified achievements (e.g., 'Reduced load time by 40%' instead of 'Responsible for performance')" },
    { priority: "high" as const, text: "Professional summary is too generic (3 sentences). Expand to 4–5 targeted sentences that align with the roles you're applying for." },
    { priority: "medium" as const, text: "Missing key skills for senior roles: System Design, Microservices, Cloud (AWS/GCP/Azure)" },
    { priority: "medium" as const, text: "Add a 'Projects' section to showcase tangible work beyond your job titles" },
    { priority: "medium" as const, text: "Dates on experience are inconsistent (mix of MM/YYYY and YYYY)" },
    { priority: "low" as const, text: "Consider adding certifications if you have any relevant ones (AWS, Google Cloud, etc.)" },
    { priority: "low" as const, text: "Resume is 2 pages — trim to 1 page if you have under 7 years of experience" },
  ],
  atsChecklist: [
    { item: "Standard section headers (Experience, Education, Skills)", pass: true },
    { item: "No tables, columns, or text boxes", pass: true },
    { item: "Machine-readable fonts", pass: true },
    { item: "Contact info in header", pass: true },
    { item: "Action verbs at start of bullets", pass: false },
    { item: "Quantified achievements present", pass: false },
    { item: "No graphics or images", pass: true },
    { item: "File name is professional", pass: true },
  ],
  keywords: {
    found: ["TypeScript", "React", "Node.js", "PostgreSQL", "REST API", "Git", "Agile"],
    missing: ["System Design", "Microservices", "Docker", "Kubernetes", "CI/CD", "AWS"],
  },
};

function ScoreColor(score: number) {
  if (score >= 85) return "#22C55E";
  if (score >= 70) return "#F59E0B";
  return "#EF4444";
}

function ScoreBadge({ score }: { score: number }) {
  const color = ScoreColor(score);
  const label = score >= 85 ? "Excellent" : score >= 70 ? "Good" : "Needs Work";
  return (
    <span style={{ padding: "3px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: "700", background: color + "18", color, border: `1px solid ${color}40` }}>
      {label}
    </span>
  );
}

export default function AnalysisPage() {
  const [analysis, setAnalysis] = useState(defaultMockAnalysis);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("latest_analysis");
      if (stored) {
        setAnalysis(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading analysis from localStorage:", e);
    }
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Top Bar */}
      <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(15,15,26,0.95)", backdropFilter: "blur(20px)", zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "30px", height: "30px", background: "linear-gradient(135deg, #6C63FF, #00D9A6)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "800", color: "#fff" }}>R</div>
            <span style={{ fontSize: "16px", fontWeight: "800", color: "#fff" }}>ResumeCheck</span>
          </Link>
          <span style={{ color: "var(--border-subtle)" }}>|</span>
          <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>📄 {analysis.filename}</span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link href="/upload" className="btn-secondary" style={{ padding: "8px 16px", fontSize: "13px" }}>
            ↑ New Analysis
          </Link>
          <button onClick={() => window.print()} className="btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
            ⬇ Download Report
          </button>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Overall Score Hero */}
        <div
          className="glass-strong"
          style={{
            padding: "48px",
            marginBottom: "32px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "48px",
            alignItems: "center",
            background: "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,217,166,0.05))",
            border: "1px solid rgba(108,99,255,0.2)",
          }}
        >
          {/* Score Ring */}
          <div style={{ position: "relative", width: "160px", height: "160px", flexShrink: 0 }}>
            <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(108,99,255,0.12)" strokeWidth="12" />
              <circle
                cx="80" cy="80" r="68" fill="none"
                stroke="url(#mainGrad)" strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 68}`}
                strokeDashoffset={`${2 * Math.PI * 68 * (1 - analysis.overallScore / 100)}`}
              />
              <defs>
                <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6C63FF" />
                  <stop offset="100%" stopColor="#00D9A6" />
                </linearGradient>
              </defs>
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "40px", fontWeight: "900", color: "#fff", lineHeight: 1 }}>{analysis.overallScore}</span>
              <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>/ 100</span>
            </div>
          </div>

          {/* Score Summary */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#fff" }}>Resume Analysis Complete</h1>
              <ScoreBadge score={analysis.overallScore} />
            </div>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "28px", lineHeight: "1.6" }}>
              Your resume scores <strong style={{ color: "#fff" }}>{analysis.overallScore}/100</strong> overall.
              ATS compatibility is at <strong style={{ color: ScoreColor(analysis.atsScore) }}>{analysis.atsScore}%</strong>.
            </p>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#22C55E" }}>{analysis.atsScore}%</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>ATS Score</div>
              </div>
              <div>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#6C63FF" }}>{analysis.strengths.length}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>Strengths Found</div>
              </div>
              <div>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#F59E0B" }}>{analysis.improvements.length}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>Improvements</div>
              </div>
              <div>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#fff" }}>{analysis.tone}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>Tone Detected</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>

          {/* Section Scores */}
          <div className="card" style={{ padding: "28px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "24px" }}>
              📊 Section Scores
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {analysis.sectionScores.map((section, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "16px" }}>{section.icon}</span>
                      <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: "500" }}>{section.name}</span>
                      <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>({section.weight})</span>
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: ScoreColor(section.score) }}>
                      {section.score}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${section.score}%`,
                        background: `linear-gradient(90deg, ${ScoreColor(section.score)}, ${ScoreColor(section.score)}99)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ATS Checklist */}
          <div className="card" style={{ padding: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>🎯 ATS Checklist</h2>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#22C55E" }}>
                {analysis.atsChecklist.filter(i => i.pass).length}/{analysis.atsChecklist.length} passed
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {analysis.atsChecklist.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: item.pass ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                    border: `1px solid ${item.pass ? "#22C55E40" : "#EF444440"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: item.pass ? "#22C55E" : "#EF4444",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}>
                    {item.pass ? "✓" : "✕"}
                  </span>
                  <span style={{ fontSize: "13px", color: item.pass ? "var(--text-secondary)" : "var(--text-muted)", lineHeight: "1.5" }}>
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strengths + Improvements */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>

          {/* Strengths */}
          <div className="card" style={{ padding: "28px", borderColor: "rgba(34,197,94,0.2)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "20px" }}>
              ✅ Strengths
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {analysis.strengths.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22C55E", fontSize: "16px", flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Improvements */}
          <div className="card" style={{ padding: "28px", borderColor: "rgba(245,158,11,0.2)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "20px" }}>
              🔧 Improvements
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {analysis.improvements.map((imp, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{
                    padding: "2px 7px",
                    borderRadius: "4px",
                    fontSize: "10px",
                    fontWeight: "700",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                    marginTop: "2px",
                    background: imp.priority === "high" ? "rgba(239,68,68,0.15)" : imp.priority === "medium" ? "rgba(245,158,11,0.15)" : "rgba(108,99,255,0.15)",
                    color: imp.priority === "high" ? "#f87171" : imp.priority === "medium" ? "#fbbf24" : "#a78bfa",
                    border: `1px solid ${imp.priority === "high" ? "#EF444440" : imp.priority === "medium" ? "#F59E0B40" : "#6C63FF40"}`,
                  }}>
                    {imp.priority.toUpperCase()}
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{imp.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Keywords Panel */}
        <div className="card" style={{ padding: "28px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "20px" }}>
            🔑 Keyword Analysis
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div>
              <h3 style={{ fontSize: "13px", fontWeight: "700", color: "#22C55E", marginBottom: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                ✓ Found in Resume
              </h3>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {analysis.keywords.found.map((kw, i) => (
                  <span key={i} className="badge badge-green">{kw}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "13px", fontWeight: "700", color: "#EF4444", marginBottom: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                ✕ Missing Keywords
              </h3>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {analysis.keywords.missing.map((kw, i) => (
                  <span key={i} className="badge badge-red">{kw}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="glass-strong" style={{ padding: "40px", textAlign: "center", background: "linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,217,166,0.06))", border: "1px solid rgba(108,99,255,0.2)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#fff", marginBottom: "10px" }}>
            Ready to improve your score?
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "28px" }}>
            Address the {analysis.improvements.filter(i => i.priority === "high").length} high-priority issues and re-analyze to watch your score climb.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/upload" className="btn-primary" style={{ padding: "12px 28px" }}>
              ↑ Re-analyze Improved Resume
            </Link>
            <button onClick={() => window.print()} className="btn-secondary" style={{ padding: "12px 28px" }}>
              ⬇ Download Full Report (PDF)
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
