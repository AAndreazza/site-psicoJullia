/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'fundoGeral': '#e5e7eb',
        'fundoEspecifico+': '#047857',
        'fundoEspecifico-': '#047857',
      }
    },
  },
  plugins: [],
}