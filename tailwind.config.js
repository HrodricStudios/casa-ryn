/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
      },
      colors: {
        lila: "#e9d5ff",
        violeta: "#6b21a8",
        violetaClaro: "#a855f7",
        violetaOscuro: "#4c1d95",
        fondoClaro: "#f0f0f0",
        fondoClaro2: "#e5e5e5",
      },
      animation: {
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
      keyframes: {
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};