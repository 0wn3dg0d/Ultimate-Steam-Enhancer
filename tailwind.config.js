/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dx-bg': '#0A0A0A',
        'dx-bg-secondary': '#121212',
        'dx-gold': '#BFA65A',
        'dx-gold-light': '#D7C589',
        'dx-text': '#C7C7C7',
        'dx-text-dark': '#8A8A8A',
        'dx-border': '#3A3A3A',
      },
      fontFamily: {
        'exo': ['"Exo 2"', 'sans-serif'],
      }
    }
  }
}