/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
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