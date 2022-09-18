/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'top-down': {
          '0%': { top: '-500px'},
          '100%': { top: '0px'},
        }
      },
      animation: {
        'top-down': 'top-down 0.2s linear'
      }
    }
  },
  plugins: []
}
