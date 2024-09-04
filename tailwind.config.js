/** @type {import('tailwindcss').Config} */

/* adding google font in tailwaind theme */
const necroFont = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        necro: ['"Nerko One"', ...necroFont.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

