const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: { 40: "40%" },
      fontSize: {
        tiny: "0.688rem",
        13: "0.813rem",
      },
      lineHeight: {
        tiny: "0.813rem",
      },
      width: {
        26: "26rem",
      },
      colors: {
        redPall: "#E71D25",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        redPall: "#E71D25",
        dark: "rgba(0, 0, 0, 0.7)",
      }),
      container: {
        sm: "640px",
        md: "768px",
        lg: "1170px",
      },
      screens: {
        lg: "1300px",
        md: { min: "1040px", max: "1300px" },
        sm: { min: "300px", max: "1100px" },
        xs: { min: "240px", max: "935px" },
        xxs: { min: "200px", max: "650px" },
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
