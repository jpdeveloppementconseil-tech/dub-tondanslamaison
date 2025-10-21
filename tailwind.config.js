/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        beton: '#b0b0b0',
        anthracite: '#2b2b2b',
        cuivre: '#b87333'
      }
    }
  },
  plugins: []
}
