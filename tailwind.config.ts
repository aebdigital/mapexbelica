import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0057ff",
          navy: "#00205c",
          ink: "#182944",
          muted: "#5f6e89",
          panel: "#f5f7fb"
        }
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Nunito", "system-ui", "sans-serif"],
        heading: ["var(--font-raleway)", "Raleway", "system-ui", "sans-serif"],
        accent: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
        lift: "0 24px 70px rgba(0, 32, 92, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
