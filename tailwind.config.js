/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: "rgb(21, 105, 99)",
        brandShadow: "rgba(21, 105, 99, 0.3)", 
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        secondary: ["nunito", "sans-serif"],
      },
      flexBasis: {
        "customBasisLargeScreen": "calc((100% - 32px * 3) / 4)",
        "customBasisMediumScreen": "calc((100% - 32px) / 2)",
      },
      boxShadow: {
        "customBoxShadow": "0px 0px 15px 0px rgba(21, 105, 99, 0.3)",
      },
    },
  },
  plugins: [],
}

