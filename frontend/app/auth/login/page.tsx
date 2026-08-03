"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative" }}>
      <div className="glow-orb" style={{ width: "500px", height: "500px", background: "rgba(108,99,255,0.12)", top: "-100px", left: "-200px" }} />
      <div className="glow-orb" style={{ width: "400px", height: "400px", background: "rgba(0,217,166,0.07)", bottom: "-100px", right: "-100px" }} />

      <div style={{ width: "100%", maxWidth: "440px", position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
            <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #6C63FF, #00D9A6)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "800", color: "#fff" }}>R</div>
            <span style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>ResumeCheck</span>
          </Link>
          <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", marginBottom: "8px" }}>Welcome back</h1>
          <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>Sign in to view your analyses and history</p>
        </div>

        {/* Form Card */}
        <div className="glass-strong" style={{ padding: "36px" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="input"
              />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-secondary)" }}>Password</label>
                <a href="#" style={{ fontSize: "12px", color: "var(--primary)", textDecoration: "none" }}>Forgot password?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="input"
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "15px", borderRadius: "12px", marginTop: "4px", opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0" }}>
            <div className="divider" style={{ flex: 1 }} />
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>or continue with</span>
            <div className="divider" style={{ flex: 1 }} />
          </div>

          {/* OAuth Buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[{ label: "Google", icon: "G" }, { label: "GitHub", icon: "GH" }].map((p) => (
              <button
                key={p.label}
                className="btn-secondary"
                style={{ flex: 1, justifyContent: "center", padding: "11px", fontSize: "13px" }}
              >
                <span style={{ fontWeight: "700" }}>{p.icon}</span>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sign up link */}
        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "14px", color: "var(--text-muted)" }}>
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" style={{ color: "#6C63FF", fontWeight: "600", textDecoration: "none" }}>
            Create one free →
          </Link>
        </p>
      </div>
    </main>
  );
}
