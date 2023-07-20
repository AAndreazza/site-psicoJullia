/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'fundoGeral': '#fff9f',
        'fundoEspecifico+': '#b37e6c',
        'fundoEspecifico-': '#d7a493',
      }
    },
  },
  plugins: [],
}