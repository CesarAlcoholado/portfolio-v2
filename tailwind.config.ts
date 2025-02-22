/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "var(--background-dark)",
        backgroundLight: "var(--background-light)",
        cardDark: "var(--card-dark)",
        cardLight: "var(--card-light)",
        borderDark: "var(--border-dark)",
        borderLight: "var(--border-light)",
      },
    },
  },
  plugins: [],
} satisfies Config;