"use client";

const testimonials = [
  {
    name: "Amara Okonkwo",
    role: "Software Engineer @ Google",
    avatar: "AO",
    color: "#6C63FF",
    rating: 5,
    text: "I was getting zero callbacks for months. ResumeCheck found 12 issues with my resume I never would have caught myself. After fixing them my ATS score went from 48 to 91 — I got 3 interviews the following week.",
  },
  {
    name: "David Chen",
    role: "Product Manager @ Stripe",
    avatar: "DC",
    color: "#00D9A6",
    rating: 5,
    text: "The section-by-section breakdown is incredibly detailed. It told me my work experience bullets were too duty-focused and gave me exact examples of how to reframe them with impact and numbers. Game changer.",
  },
  {
    name: "Priya Sharma",
    role: "Data Scientist @ Netflix",
    avatar: "PS",
    color: "#F59E0B",
    rating: 5,
    text: "The job description matching feature showed me exactly which keywords I was missing for the roles I was targeting. Went from 0/5 to 3/5 first-round interviews after using ResumeCheck for one week.",
  },
  {
    name: "Marcus Williams",
    role: "UX Designer @ Figma",
    avatar: "MW",
    color: "#EC4899",
    rating: 5,
    text: "As a designer, I thought my resume looked great. ResumeCheck taught me that ATS can't read fancy columns and graphics. Fixed the structure, kept the style — now it works for both humans AND bots.",
  },
  {
    name: "Sofia Rodriguez",
    role: "Marketing Lead @ HubSpot",
    avatar: "SR",
    color: "#8B5CF6",
    rating: 5,
    text: "I used ResumeCheck 4 times — each time uploading a revised resume and watching my score climb. Went from 62 to 89. The progress tracking kept me motivated. Landed my dream job in 6 weeks.",
  },
  {
    name: "James O'Brien",
    role: "Backend Engineer @ Shopify",
    avatar: "JO",
    color: "#06B6D4",
    rating: 5,
    text: "The AI feedback is shockingly specific — not generic advice like 'add more keywords'. It literally said 'your Python experience section doesn't mention system design or scalability which are key for senior roles'. Spot on.",
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="badge badge-purple" style={{ marginBottom: "16px" }}>✦ Testimonials</span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "800", marginBottom: "16px", color: "#fff" }}>
            Real people,{" "}
            <span className="gradient-text">real results</span>
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto" }}>
            Join 50,000+ job seekers who improved their resumes and landed the interviews they deserved.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = t.color + "40";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(0,0,0,0.3), 0 0 20px ${t.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px" }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} style={{ color: "#F59E0B", fontSize: "16px" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.75", flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
