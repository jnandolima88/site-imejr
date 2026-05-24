import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#101010",
        "bg-deep": "#000000",
        surface: "#1A1A1A",
        "surface-raised": "#222222",
        border: "#2E2E2E",
        yellow: "#FFDA33",
        red: "#D62839",
        blue: "#357DED",
        gray: "#5E5E5E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
