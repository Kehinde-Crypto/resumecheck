import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
