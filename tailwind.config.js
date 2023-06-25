/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: ['hover'],
      colors: {
        primary: "#2d2e32",
        secondary: "#767676",
        blue: "#147efb",
        bgColor1 : "#f9f9f9"
      }
    },
  },
  plugins: [],
}