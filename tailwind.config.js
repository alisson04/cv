/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cv-tertiary-color': '#BDBDBD',
        'cv-borders-color': 'rgb(15 118 110)',
        'cv-color-1': '#BDBDBD',
        'cv-color-2': 'rgb(15 118 110)',
        'cv-color-3': 'rgb(17 24 39)',
        'cv-color-4': 'rgb(3 7 18)',
      },
      fontFamily: {
        'main': ['Arial'],
      },
      height: {
        'screen-10': '10vh',
        'screen-90': '90vh',
      }
    }
  },
  plugins: [],
});

