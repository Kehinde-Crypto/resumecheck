"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", padding: "64px 24px 40px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #6C63FF, #00D9A6)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "800", color: "#fff" }}>R</div>
              <span style={{ fontSize: "18px", fontWeight: "800", color: "#fff" }}>ResumeCheck</span>
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.7", maxWidth: "280px", marginBottom: "24px" }}>
              AI-powered resume analysis that helps job seekers land more interviews. Upload, analyze, improve, repeat.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {["𝕏", "in", "gh"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--surface)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    fontSize: "14px",
                    fontWeight: "700",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#6C63FF60";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.background = "rgba(108,99,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Product</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Features", "How It Works", "Pricing", "Changelog"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "14px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Resume Guide", "ATS Tips", "Blog", "API Docs"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "14px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["About", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "14px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            © 2026 ResumeCheck. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            Built with ❤️ to help people land their dream jobs.
          </p>
        </div>
      </div>
    </footer>
  );
}
