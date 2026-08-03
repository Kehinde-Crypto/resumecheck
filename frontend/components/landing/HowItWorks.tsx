"use client";

const steps = [
  {
    number: "01",
    title: "Upload Your Resume",
    desc: "Drag and drop or click to upload your resume file. We support PDF, DOCX, DOC, TXT, ODT, and RTF formats. No conversion needed.",
    icon: "📤",
    color: "#6C63FF",
    details: ["PDF, DOCX, TXT, ODT, RTF", "Up to 10MB file size", "Secure encrypted upload"],
  },
  {
    number: "02",
    title: "AI Analyzes Instantly",
    desc: "Our Gemini AI engine reads every word of your resume, checks it against ATS criteria, evaluates each section, and calculates your score in seconds.",
    icon: "🧠",
    color: "#00D9A6",
    details: ["8-dimension scoring", "ATS keyword check", "Section-level analysis"],
  },
  {
    number: "03",
    title: "Get Your Action Plan",
    desc: "Receive a detailed report with your overall score, section scores, strengths, specific improvement suggestions, and missing keywords.",
    icon: "📈",
    color: "#F59E0B",
    details: ["Prioritized suggestions", "Score breakdown", "Downloadable PDF report"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "80px 24px", position: "relative" }}>
      <div className="glow-orb" style={{ width: "400px", height: "400px", background: "rgba(0,217,166,0.07)", bottom: "0", left: "-100px" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="badge badge-teal" style={{ marginBottom: "16px" }}>✦ How It Works</span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "800", marginBottom: "16px", color: "#fff" }}>
            From upload to{" "}
            <span className="gradient-text">offer letter</span>
            {" "}in 3 steps
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto" }}>
            The fastest path from a mediocre resume to one that gets you noticed.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "40px",
                padding: "40px",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s ease",
                border: `1px solid rgba(255,255,255,0.06)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = step.color + "40";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Step Number + Icon */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background: `${step.color}18`,
                    border: `1px solid ${step.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "36px",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: step.color,
                    letterSpacing: "0.1em",
                    opacity: 0.8,
                  }}
                >
                  STEP {step.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "10px", color: "#fff" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
                  {step.desc}
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {step.details.map((detail, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ color: step.color, fontSize: "14px" }}>✓</span>
                      <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: "500" }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big number watermark */}
              <div
                style={{
                  position: "absolute",
                  right: "32px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "120px",
                  fontWeight: "900",
                  color: `${step.color}08`,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
