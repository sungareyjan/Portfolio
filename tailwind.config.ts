import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        darkCharcoal:"var(--darkCharcoal)",
        deepSlateBlue:"var(--deepSlateBlue)",
        subTitle:"var(--subTitle)",
        skyBlue:"var(--skyBlue)",
        softLavender:"var(--softLavender)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        paleGreen: "var(--paleGreen)",
      }
    },
  },
  plugins: [],
} satisfies Config;


// EF6B73: Light Coral Pink
// C3A6FF: Soft Lavender
// FFD580: Light Peach
// FFAE57: Soft Orange
// BAE67E: Pale Green
// 5CCFE6: Sky Blue
// FFCC66: Pale Yellow
// D7DCE2: Light Gray Blue
// A2AABC: Cool Gray
// 8695B7: Slate Gray
// 6679A4: Dusty Blue
// 2F3B54: Deep Slate Blue
// 1D2433: Midnight Blue
// 171C28: Dark Charcoal Green
