"use client";
import Link from "next/link";

const history = [
  { id: "demo", filename: "John_Doe_Resume.pdf", date: "Aug 2, 2026", score: 78, atsScore: 91, status: "Completed" },
  { id: "demo-2", filename: "Software_Engineer_v2.docx", date: "Jul 28, 2026", score: 65, atsScore: 82, status: "Completed" },
  { id: "demo-3", filename: "Draft_Resume.txt", date: "Jul 15, 2026", score: 48, atsScore: 60, status: "Completed" },
];

export default function DashboardPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Top Bar */}
      <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(15,15,26,0.95)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "30px", height: "30px", background: "linear-gradient(135deg, #6C63FF, #00D9A6)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "800", color: "#fff" }}>R</div>
            <span style={{ fontSize: "16px", fontWeight: "800", color: "#fff" }}>ResumeCheck</span>
          </Link>
          <span style={{ color: "var(--border-subtle)" }}>|</span>
          <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>Dashboard</span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link href="/upload" className="btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
            + New Analysis
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", marginBottom: "24px" }}>Analysis History & Stats</h1>
        
        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "32px" }}>
          <div className="card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>Total Analyses</div>
            <div style={{ fontSize: "28px", fontWeight: "800", color: "#fff" }}>3</div>
          </div>
          <div className="card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>Latest Score</div>
            <div style={{ fontSize: "28px", fontWeight: "800", color: "#00D9A6" }}>78/100</div>
          </div>
          <div className="card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>Highest ATS Score</div>
            <div style={{ fontSize: "28px", fontWeight: "800", color: "#6C63FF" }}>91%</div>
          </div>
          <div className="card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>Score Improvement</div>
            <div style={{ fontSize: "28px", fontWeight: "800", color: "#22C55E" }}>+30 pts</div>
          </div>
        </div>

        {/* History Table */}
        <div className="card" style={{ padding: "24px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>Recent Analyses</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <th style={{ padding: "12px 16px", fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>FILENAME</th>
                  <th style={{ padding: "12px 16px", fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>DATE</th>
                  <th style={{ padding: "12px 16px", fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>OVERALL SCORE</th>
                  <th style={{ padding: "12px 16px", fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>ATS SCORE</th>
                  <th style={{ padding: "12px 16px", fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr key={item.id} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "16px", fontSize: "14px", color: "#fff", fontWeight: "500" }}>📄 {item.filename}</td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "var(--text-muted)" }}>{item.date}</td>
                    <td style={{ padding: "16px", fontSize: "14px", fontWeight: "700", color: item.score >= 70 ? "#00D9A6" : "#F59E0B" }}>{item.score}/100</td>
                    <td style={{ padding: "16px", fontSize: "14px", fontWeight: "700", color: "#6C63FF" }}>{item.atsScore}%</td>
                    <td style={{ padding: "16px" }}>
                      <Link href={`/analysis/${item.id}`} style={{ fontSize: "13px", color: "#6C63FF", textDecoration: "none", fontWeight: "600" }}>
                        View Report →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
