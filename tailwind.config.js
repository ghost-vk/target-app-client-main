const path = require('path');

module.exports = {
  purge: [path.resolve(__dirname, './src/layout/*.html')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
      },
    },
    extend: {
      minHeight: {
        '3/4': '75%'
      },
      height: {

      }
    },
  },
  variants: {
    extend: {
      blur: ['hover', 'group-hover'],
    },
  },
  plugins: [],
};