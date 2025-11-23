/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "#00ff37",
        bgDark: "#131313",
        borderDark: "#2a2a2a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        logo: ["'Orbitron'", "sans-serif"],
      },
    },
  },
  plugins: [],
};