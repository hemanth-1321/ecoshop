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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        marquee: "marquee 10s linear infinite", // Add custom animation for marquee
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)", // Start off-screen from the right
          },
          "100%": {
            transform: "translateX(-100%)", // Move to the left, off-screen
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
