import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C63FF",
          light: "#8B85FF",
          dark: "#5048E5",
        },
        secondary: {
          DEFAULT: "#00D9A6",
          light: "#00F5C0",
        },
        bg: {
          DEFAULT: "#0F0F1A",
          secondary: "#141428",
        },
        surface: {
          DEFAULT: "#1A1A2E",
          2: "#22223B",
          3: "#2A2A4A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(108, 99, 255, 0.4)",
        "glow-lg": "0 0 40px rgba(108, 99, 255, 0.4)",
        "glow-secondary": "0 0 20px rgba(0, 217, 166, 0.3)",
        card: "0 8px 30px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #6C63FF 0%, #5048E5 100%)",
        "gradient-hero": "linear-gradient(135deg, #0F0F1A 0%, #141428 100%)",
        "gradient-text": "linear-gradient(135deg, #8B85FF 0%, #00D9A6 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(0,217,166,0.05) 100%)",
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease forwards",
        "fade-in": "fade-in 0.4s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 99, 255, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(108, 99, 255, 0.4), 0 0 60px rgba(108, 99, 255, 0.2)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
