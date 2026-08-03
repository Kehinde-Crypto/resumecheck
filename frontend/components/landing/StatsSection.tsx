"use client";

const stats = [
  { value: "50K+", label: "Resumes Analyzed", icon: "📄" },
  { value: "94%", label: "ATS Pass Rate", icon: "🎯" },
  { value: "3.2x", label: "More Interviews", icon: "🚀" },
  { value: "4.9★", label: "User Rating", icon: "⭐" },
];

export default function StatsSection() {
  return (
    <section style={{ padding: "0 24px 80px", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="glass"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1px",
            overflow: "hidden",
            background: "var(--border-subtle)",
            borderRadius: "20px",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "32px 24px",
                textAlign: "center",
                background: "var(--surface)",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  background: "linear-gradient(135deg, #8B85FF, #00D9A6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: "500" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
