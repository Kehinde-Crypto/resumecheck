"use client";
import Link from "next/link";

const stats = [
  { value: "50K+", label: "Resumes Analyzed" },
  { value: "94%", label: "ATS Pass Rate" },
  { value: "3.2x", label: "More Interviews" },
  { value: "4.9★", label: "User Rating" },
];

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Background Orbs */}
      <div className="glow-orb" style={{ width: "600px", height: "600px", background: "rgba(108,99,255,0.12)", top: "-100px", left: "-200px" }} />
      <div className="glow-orb" style={{ width: "500px", height: "500px", background: "rgba(0,217,166,0.08)", bottom: "-100px", right: "-150px" }} />

      {/* Grid Background */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
          <span className="badge badge-purple">
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6C63FF", display: "inline-block", animation: "pulse-glow 2s ease infinite" }} />
            AI-Powered Resume Analysis
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: "900",
            lineHeight: "1.05",
            letterSpacing: "-0.03em",
            marginBottom: "24px",
            color: "#fff",
          }}
        >
          Your Resume,{" "}
          <span className="gradient-text">
            Perfected
          </span>
          <br />
          by AI
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: "clamp(17px, 2.5vw, 20px)",
            color: "var(--text-secondary)",
            lineHeight: "1.7",
            marginBottom: "40px",
            maxWidth: "620px",
            margin: "0 auto 40px",
          }}
        >
          Upload your resume in any format — PDF, DOCX, TXT — and get an instant
          AI-powered analysis with your ATS score, section-by-section feedback, and
          actionable steps to land more interviews.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "60px" }}>
          <Link href="/upload" className="btn-primary" style={{ padding: "16px 36px", fontSize: "16px", borderRadius: "14px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Analyze My Resume — Free
          </Link>
          <a href="#how-it-works" className="btn-secondary" style={{ padding: "16px 36px", fontSize: "16px", borderRadius: "14px" }}>
            See How It Works
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8"/>
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "72px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>Supports:</span>
          {["PDF", "DOCX", "TXT", "ODT", "RTF"].map((fmt) => (
            <span key={fmt} className="badge badge-purple" style={{ fontSize: "11px", padding: "3px 10px" }}>{fmt}</span>
          ))}
          <span style={{ fontSize: "13px", color: "var(--text-muted)", marginLeft: "8px" }}>• No sign-up required to try</span>
        </div>

        {/* Hero Score Card Preview */}
        <div
          className="glass-strong"
          style={{
            padding: "32px",
            maxWidth: "700px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Mock analysis result card */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>

            {/* Score Ring */}
            <div style={{ position: "relative", width: "120px", height: "120px", flexShrink: 0 }}>
              <svg width="120" height="120" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(108,99,255,0.15)" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="url(#scoreGrad)" strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 52}`}
                  strokeDashoffset={`${2 * Math.PI * 52 * (1 - 0.78)}`}
                  style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)" }}
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#00D9A6" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "28px", fontWeight: "800", color: "#fff" }}>78</span>
                <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "500" }}>/ 100</span>
              </div>
            </div>

            {/* Score Breakdown */}
            <div style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>ATS Compatibility</span>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#4ade80" }}>92%</span>
              </div>
              <div className="progress-bar" style={{ marginBottom: "14px" }}>
                <div className="progress-fill" style={{ width: "92%" }} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Work Experience</span>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#fbbf24" }}>74%</span>
              </div>
              <div className="progress-bar" style={{ marginBottom: "14px" }}>
                <div className="progress-fill" style={{ width: "74%", background: "linear-gradient(90deg, #F59E0B, #FBBF24)" }} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Skills Section</span>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#4ade80" }}>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "88%" }} />
              </div>
            </div>

            {/* Quick Feedback */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "160px" }}>
              {[
                { icon: "✓", text: "Strong keywords", color: "#22C55E" },
                { icon: "✓", text: "Good formatting", color: "#22C55E" },
                { icon: "!", text: "Add quantified results", color: "#F59E0B" },
                { icon: "!", text: "Expand summary section", color: "#F59E0B" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: `${item.color}22`, color: item.color, fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Label */}
          <div style={{ textAlign: "center", marginTop: "20px", paddingTop: "20px", borderTop: "1px solid var(--border-subtle)" }}>
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>↑ Sample analysis result — yours will be generated in seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
