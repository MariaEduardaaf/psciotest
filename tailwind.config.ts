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
        // Paleta Elegancia
        primary: {
          DEFAULT: "#6B5B95",
          light: "#8B7FB5",
          dark: "#524175",
        },
        secondary: {
          DEFAULT: "#F7F3F0",
          dark: "#EBE5DF",
        },
        accent: {
          DEFAULT: "#C9A86C",
          light: "#D4BC8A",
          dark: "#A8894F",
        },
        text: {
          DEFAULT: "#3D3D3D",
          light: "#6B6B6B",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        soft: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
