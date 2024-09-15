/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        white: "var(--white-bg)",
      },

      container: {
        padding: '160px',
        center: true
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}