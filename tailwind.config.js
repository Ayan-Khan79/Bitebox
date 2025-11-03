module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
  extend: {
  colors: {
  'brand-dark': '#1f1f1f',
  'brand-darker': '#121212',
  'brand-muted': '#2b2b2b'
  },
  fontFamily: {
  display: ['"Cormorant Garamond"', 'serif'],
  body: ['"Inter"', 'sans-serif']
  }
  }
  },
  plugins: []
  }