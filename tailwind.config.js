const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: { 40: "40%", 60: "60%" },
      fontSize: {
        tiny: "11px",
        13: "13px",
        xs: "14px",
      },
      lineHeight: {
        md: "20px",
        tiny: "13px",
        14: "14px",
        md: "19px",
        sm: "18px",
      },
      // height: {
      //   sm: "120px",
      //   40: "40px",
      //   30: "30px",
      //   540: "540px",
      //   400: "400px",
      //   lg: "1180px",
      //   22: "22rem",
      // },
      width: {
        26: "26rem",
      },
      padding: {
        40: "40px",
        30: "30px",
        5: "5px",
        10: "10px",
        20: "20px",
      },
      margin: {
        10: "10px",
        20: "20px",
      },
      borderRadius: {
        4: "4px",
      },
      colors: {
        lightGray: "#808080",
        whitePall: " #B2B2B2",
        redPall: "#E71D25",
        gray: "#E6EAF0",
        grayPall: "#575F6F",
        grayPall2: "#98A0AF",
        grayLine: "#D9D9D9",
        dark: "rgba(0, 0, 0, 0.7)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        gray: "#E6EAF0",
        redPall: "#E71D25",
        lightGray: "#808080",
        lightGray: "#F5F8FA",
        darkGray: "rgba(46, 46, 46)",
        grayPall: "#575F6F",
        grayLine: "#D9D9D9",
        dark: "rgba(0, 0, 0, 0.7)",
      }),
      screens: {
        lg: { min: "1100px", max: "2500px" },
        md: { min: "1040px", max: "1300px" },
        sm: { min: "300px", max: "1100px" },
        xs: { min: "240px", max: "935px" },
        xxs: { min: "200px", max: "650px" },
        videoRes: { min: "1045px", max: "1117px" },
        videoResSm: { min: "680px", max: "1040px" },
      },
      gridTemplateColumns: {
        // 1: "repeat(auto-fill, minmax(200px, 1fr))",
        // 2: "repeat(auto-fill, minmax(150px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
