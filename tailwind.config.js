const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        subtle: '#d1e1ef',
        lightest: '#bdd4e6',
        lighter: '#a6c5dd',
        light: '#81acce',
        DEFAULT: '#6f9abc',
        dark: '#4f7898',
        darker: '#355269',
        darkest: '#283c4c'
      },
      gray: {
        darkest: '#2C2F33',
        dark: '#23272A',
        DEFAULT: '#9CA3AF',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

