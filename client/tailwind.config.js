// const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#081727',
        'secondary-dark': '#0B1E2C',
        'ternary-dark': '#162B3D',
      },
      container: {
        padding: {
          DEFAULT: '0.5rem',
          '3xsm': '0.4rem',
          '2xsm': '1rem',
          '2sm': '0.5rem',
          xsm: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
          'xmd': '1rem'
        },
      },
      screens: {
        '5xsm':'198px',
        '4xsm':'220px',
        '3xsm': '240px',
        '2xsm': '320px',
        'xsm':'412px',
        '2sm': '576px',
        'sm': '640px',
        'md': '768px',
        'xmd': '840px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        "3xl": '1600px'
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: ['@tailwindcss/forms'],
};
