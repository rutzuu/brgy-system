const colors = require('tailwindcss/colors')
 
module.exports = {
    mode: 'jit',
    theme: {
      extend: {
        colors: {
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('@tailwindcss/forms'),
    ]
  }