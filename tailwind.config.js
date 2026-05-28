/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mp-black': '#0A0A0A',
        'mp-dark':  '#111111',
        'mp-card':  '#1A1A1A',
        gold: {
          light:   '#E4C97B',
          DEFAULT: '#C9A84C',
          dark:    '#A07832',
        },
        tangaft: {
          light:   '#D4849A',
          DEFAULT: '#C06878',
          dark:    '#A05060',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        raleway:  ['Raleway', 'sans-serif'],
        pinyon:   ['"Pinyon Script"', 'cursive'],
        cairo:    ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
