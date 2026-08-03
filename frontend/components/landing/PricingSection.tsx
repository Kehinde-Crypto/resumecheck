"use client";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect to get started and see what ResumeCheck can do.",
    color: "#6C63FF",
    features: [
      "3 resume analyses per month",
      "Overall score (0–100)",
      "ATS compatibility check",
      "Basic section feedback",
      "PDF & DOCX support",
    ],
    notIncluded: [
      "Job description matching",
      "Keyword gap analysis",
      "Unlimited analyses",
      "PDF report download",
    ],
    cta: "Get Started Free",
    href: "/auth/register",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    desc: "For serious job seekers who want every possible advantage.",
    color: "#00D9A6",
    badge: "Most Popular",
    features: [
      "Unlimited resume analyses",
      "Full section-by-section scores",
      "ATS compatibility check",
      "Job description matching",
      "Keyword gap analysis",
      "PDF report download",
      "All file formats",
      "Score history & tracking",
      "Priority AI processing",
    ],
    cta: "Start Pro — $12/mo",
    href: "/auth/register?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    desc: "For teams, career coaches, and recruiting platforms.",
    color: "#8B5CF6",
    features: [
      "Everything in Pro",
      "Team dashboard & management",
      "Bulk resume processing API",
      "Custom scoring rubrics",
      "White-label option",
      "Dedicated account manager",
      "SLA & priority support",
    ],
    cta: "Contact Sales",
    href: "mailto:hello@resumecheck.com",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "80px 24px", position: "relative" }}>
      <div className="glow-orb" style={{ width: "500px", height: "500px", background: "rgba(108,99,255,0.1)", top: "0", left: "50%", transform: "translateX(-50%)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="badge badge-teal" style={{ marginBottom: "16px" }}>✦ Pricing</span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "800", marginBottom: "16px", color: "#fff" }}>
            Simple,{" "}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto" }}>
            Start free. Upgrade when you&apos;re ready. Cancel any time.
          </p>
        </div>

        {/* Plans Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "start" }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: plan.highlighted ? "linear-gradient(135deg, rgba(0,217,166,0.1), rgba(108,99,255,0.1))" : "var(--surface)",
                border: plan.highlighted ? `2px solid ${plan.color}60` : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "32px",
                position: "relative",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(0,0,0,0.3), 0 0 30px ${plan.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: `linear-gradient(135deg, ${plan.color}, #6C63FF)`,
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "4px 16px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div style={{ marginBottom: "8px" }}>
                <span className="badge" style={{ background: `${plan.color}18`, color: plan.color, border: `1px solid ${plan.color}40`, marginBottom: "12px" }}>
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "48px", fontWeight: "800", color: "#fff" }}>{plan.price}</span>
                <span style={{ fontSize: "15px", color: "var(--text-muted)", marginLeft: "6px" }}>/{plan.period}</span>
              </div>

              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "28px", lineHeight: "1.6" }}>
                {plan.desc}
              </p>

              {/* CTA */}
              <Link
                href={plan.href}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "13px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  marginBottom: "28px",
                  transition: "all 0.2s ease",
                  background: plan.highlighted ? `linear-gradient(135deg, ${plan.color}, #6C63FF)` : "transparent",
                  color: plan.highlighted ? "#fff" : plan.color,
                  border: plan.highlighted ? "none" : `1px solid ${plan.color}60`,
                  boxShadow: plan.highlighted ? `0 0 20px ${plan.color}40` : "none",
                }}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {plan.features.map((feature, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: plan.color, fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded?.map((feature, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", opacity: 0.35 }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✕</span>
                    <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
