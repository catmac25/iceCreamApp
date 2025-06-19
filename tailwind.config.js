/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', 'sans-serif'],
        margarine: ['Margarine', 'sans-serif']
      },
    },
  },
  plugins: [],
}

