/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js jsx}",
    "./content/**/*.mdx",
    "./public/**/*.svg",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        border: "border 4s linear infinite",
        tilt: "tilt 10s infinite linear",
        borderAnimation: "animateBorder 3s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
        animateBorder: {
          "0%": { borderColor: "#262626" },
          "100%": { borderColor: "theme(colors.slate.600/.48)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        tilt: {
          "0%, 100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
};
