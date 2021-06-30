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
        grayLine: "#D9D9D9",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        redPall: "#E71D25",
        grayLine: "#D9D9D9",
        dark: "rgba(0, 0, 0, 0.7)",
      }),
      container: {
        sm: "640px",
        md: "768px",
        lg: "1170px",
      },
      screens: {
        // sm: '640px',
        // md: "768px",
        lg: "1300px",
        // lg: { min: "1100px", max: "2500px" },
        md: { min: "1040px", max: "1300px" },
        sm: { min: "300px", max: "1100px" },
        xs: { min: "240px", max: "935px" },
        xxs: { min: "200px", max: "650px" },
        videoRes: { min: "1045px", max: "1117px" },
        videoResSm: { min: "680px", max: "1040px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

//delete to much things
//add maxos screen size
//change colors
//input icon and placholder did not shown in newIndex.html
