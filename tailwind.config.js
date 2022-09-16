/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./*/*.html"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      main: 'hsl(233, 47%, 7%)',
      card: 'hsl(244, 38%, 16%)',
      accent: 'hsl(277, 64%, 61%)',
      paragraph: 'hsla(0, 0%, 100%, 0.75',
      stat: 'hsla(0, 0%, 100%, 0.6)'
    },
    screens:{
      sm: '375px',
      lg : '1440px'
      // => @media (min-width: 1440px) { ... } width 1440px and up
    },
    extend: {
      margin:{
        'm': '71px',
        'mr-h1': '95px',
        'mar': '25px',
        'mar-2': '72px',
        'pr': '124.5px',
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif']
      },
      height:{
        'card-height': '446px',
        'h1-height': '88px',
        'p-height': '75px'
      },
      width:{
        'card-width': '1110px',
        'h1-width': '403px',
        'p-width': '374px',
        'content-width': '540px',
        'sm-width': '327px'
      },

    },
  },
  plugins: [],
}
