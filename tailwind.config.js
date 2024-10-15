/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005A9E",
        secondary: "#e5eff5",
        themeBorder: "#E5EEF5",
        themeBlack: "#032A47",

        // extra colors
        secondaryLight: "#FEF1E0",
        themeGray: {
          200: "#f3f2ff",
          300: "#DFDFDF",
          500: "#637381",
        },
        themeOrange: "#FF6B00",
      },
    },
  },
  plugins: [],
};
