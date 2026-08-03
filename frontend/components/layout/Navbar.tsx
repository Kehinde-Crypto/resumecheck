"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        padding: "0 24px",
        background: scrolled
          ? "rgba(15, 15, 26, 0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(108, 99, 255, 0.15)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #6C63FF, #00D9A6)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "800",
              color: "#fff",
              boxShadow: "0 0 20px rgba(108, 99, 255, 0.4)",
            }}
          >
            R
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "800",
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ResumeCheck
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="desktop-nav"
        >
          {["Features", "How It Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                padding: "8px 16px",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#fff";
                (e.target as HTMLElement).style.background = "rgba(108, 99, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/auth/login" className="btn-ghost" style={{ fontSize: "14px" }}>
            Sign In
          </Link>
          <Link href="/upload" className="btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
            Analyze Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
