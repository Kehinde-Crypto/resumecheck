"use client";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Analysis",
    desc: "Gemini AI reads your entire resume and generates a comprehensive score across 8 key dimensions — just like a professional recruiter would.",
    color: "#6C63FF",
    glow: "rgba(108,99,255,0.2)",
  },
  {
    icon: "🎯",
    title: "ATS Compatibility Check",
    desc: "91% of Fortune 500 companies use ATS. We check your resume against the same criteria and tell you exactly what to fix to get past the bots.",
    color: "#00D9A6",
    glow: "rgba(0,217,166,0.2)",
  },
  {
    icon: "📋",
    title: "Multi-Format Support",
    desc: "Upload PDF, DOCX, DOC, TXT, ODT or RTF. Our parser extracts your content accurately regardless of template or formatting.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.2)",
  },
  {
    icon: "⚡",
    title: "Instant Results",
    desc: "Get your full analysis in under 30 seconds. No waiting, no queues. Your score, feedback, and improvement tips arrive instantly.",
    color: "#EC4899",
    glow: "rgba(236,72,153,0.2)",
  },
  {
    icon: "🔍",
    title: "Section-by-Section Feedback",
    desc: "Every section of your resume — Contact, Summary, Experience, Education, Skills — gets its own detailed score and targeted suggestions.",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    desc: "Upload revised versions and watch your score improve over time. Our dashboard charts your resume journey from first draft to interview-ready.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.2)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "80px 24px", position: "relative" }}>
      {/* Background */}
      <div className="glow-orb" style={{ width: "400px", height: "400px", background: "rgba(108,99,255,0.08)", top: "50%", right: "-100px" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="badge badge-purple" style={{ marginBottom: "16px" }}>✦ Features</span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "800", marginBottom: "16px", color: "#fff" }}>
            Everything you need to{" "}
            <span className="gradient-text">get hired faster</span>
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto" }}>
            ResumeCheck doesn&apos;t just grade your resume — it gives you the exact roadmap to improve it.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="card card-glow"
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = feature.color + "50";
                el.style.boxShadow = `0 0 30px ${feature.glow}, 0 8px 30px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: feature.glow,
                  border: `1px solid ${feature.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "16px",
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px", color: "#fff" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.7" }}>
                {feature.desc}
              </p>

              {/* Accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="feature-accent"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
