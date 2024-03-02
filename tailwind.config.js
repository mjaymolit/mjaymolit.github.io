/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#F1B434',
        secondary: '#181818',
        accent: '#BC4700'
      }
    }
  },
  plugins: []
}
