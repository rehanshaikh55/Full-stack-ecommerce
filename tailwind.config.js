/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins']
    },
    keyframes: {
    righttoleft:{
      'from':{
        transform: 'translateX(0%)'
      },
      'to':{
        transform: 'translateX(-50%)'
    }}
  },
  animation: {
    'right': 'righttoleft 10s linear infinite',
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}}}