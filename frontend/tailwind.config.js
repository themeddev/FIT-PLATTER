/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        myOrange: '#FC6212',
        myBlue : '#475569',
        headersBlue : '#274C5B',
        InputBg : '#FFF6F4',
      },
      fontFamily: {

        'Outfit': ['Outfit', ' sans-serif'],
        'Poppins': ['Poppins', ' sans-serif'],
      }  
    },
  },
  plugins: [require("daisyui")],
}



