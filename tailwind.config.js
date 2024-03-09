/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      screens: {
        'sm': '375px'
      }
    },
  },
  plugins: [],
}

