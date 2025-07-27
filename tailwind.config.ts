import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#0f0f11",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeInDelay: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.6s ease-in-out forwards",
        slideUp: "slideUp 0.6s ease-in-out forwards",
        progressBar: "progressBar 1s ease-in-out forwards delay-200ms",
        fadeInDelay: "fadeInDelay 0.5s ease-out 1.2s forwards",
      },
    },
  },
  plugins: [],
};

export default config;
