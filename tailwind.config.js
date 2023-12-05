
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet' : {'max': '767px'},
      'laptop' : {'min': '768px', 'max': '991.98px'},
      'desktop': {'min': '1440px'}
    },
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