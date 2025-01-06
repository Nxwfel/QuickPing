/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        textfont : ['Poppins', 'serif'],
        textfont2 : ['Bebas Neue', 'serif'],
      },
    },
  },
  plugins: [],
}

