/** @type {import('tailwindcss').Config} */


export default {
  darkMode:[
    'class','[data-theme="dark"]',
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs' : '425px',
        '2xs' : '375px',
        '3xs' : '320px',
        "xlq" : '1372px',
        'sm-2' : '520px',

      },
      fontFamily: {
        'logo' : ['Lovers Quarrel','cursive'],
        'bebas' : ['Bebas Neue', 'sans-sherif'],
        'open' : ['Open Sans', 'sans-sherif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

