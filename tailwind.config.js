/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cv-tertiary-color': '#ededed',
        'cv-borders-color': '#612937',
        'cv-color-1': '#ededed',
        'cv-color-2': '#ffffff',
        'cv-color-3': '#030712',
        'cv-color-4': '#030712',
        'cv-color-5': '#1A1A1A',
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

