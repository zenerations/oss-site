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
        beau1: '#d1e1ef',
        beau2: '#bdd4e6',
        paleCeru: '#a6c5dd',
        iceberg: '#81acce',
        ceruFrost: '#6f9abc',
        steel: '#4f7898',
        sapphire: '#355269',
        charcoal: '#283c4c'
      },
      gray: {
        jet: '#2C2F33',
        charles: '#23272A',
        manatee: '#9CA3AF',
      }
    },
    fontFamily: {
      DEFAULT: ['Montserrat'],
      body: ['Montserrat']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}