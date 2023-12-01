
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aladin': ['Aladin', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}