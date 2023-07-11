/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cv-primary-color': '#1A1A1A',
        'cv-secondary-color': '#151515',
        'cv-tertiary-color': '#BDBDBD',
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

