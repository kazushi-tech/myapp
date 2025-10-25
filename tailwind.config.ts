import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff3df5",
        neonCyan: "#00e8ff",
        neonYellow: "#f5ff3d",
        neonPurple: "#9b5cff",
      },
      boxShadow: {
        // 控えめのネオン
        neon: "0 0 20px rgba(0,232,255,0.35), 0 0 40px rgba(155,92,255,0.20)",
      },
      dropShadow: {
        neon: "0 0 6px rgba(0,232,255,0.40)",
      },
      backgroundImage: {
        "cp-grid":
          "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
        "cp-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(0,232,255,.15), rgba(155,92,255,.08) 40%, transparent 70%)",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(0.5px, -0.5px)" },
          "40%": { transform: "translate(-0.5px, 0.5px)" },
          "60%": { transform: "translate(0.3px, 0.3px)" },
          "80%": { transform: "translate(-0.3px, -0.3px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        glitch: "glitch 1.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
