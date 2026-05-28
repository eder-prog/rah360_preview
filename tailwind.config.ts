import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        // RAH360 brand tokens
        ink: "#1A1A1A",
        cream: "#FAF5EC",
        burnt: { DEFAULT: "#D85E1F", hover: "#C24E12", press: "#A8420C" },
        oak: "#B5824A",
        stone: "#D9CFC0",
        forest: "#3E4C3A",
        charcoal: "#404040",
        success: "#3F7A4E",
        danger: "#B83C2E",
        // Warm-tinted gray
        gray: {
          50: "#F7F4ED", 100: "#EEE9DD", 200: "#DDD6C7", 300: "#BFB7A6",
          400: "#9A9182", 500: "#73685B", 600: "#574E43", 700: "#3F382F",
          800: "#2A2520", 900: "#1A1714",
        },
      },
      fontFamily: {
        display: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        accent: ["Fraunces", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: { display: "-0.02em", tightest: "-0.035em", label: "0.05em" },
      boxShadow: {
        warm: "0 8px 24px rgba(181, 130, 74, 0.22)",
        cta: "0 4px 14px rgba(216, 94, 31, 0.32)",
        "cta-hover": "0 14px 30px rgba(216, 94, 31, 0.36)",
        focus: "0 0 0 3px rgba(216, 94, 31, 0.40)",
      },
      keyframes: {
        ctaBounce: {
          "0%, 100%": { transform: "translateY(0) scale(1)", boxShadow: "0 4px 14px rgba(216,94,31,0.32)" },
          "50%": { transform: "translateY(-6px) scale(1.04)", boxShadow: "0 16px 32px rgba(216,94,31,0.55)" },
        },
        revealIn: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "cta-bounce": "ctaBounce 1.6s ease-in-out infinite",
        "reveal-in": "revealIn 750ms cubic-bezier(.4, 0, .2, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
