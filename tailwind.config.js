const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: "14px",
      },
      fontSize: {
        tiny: "12px",
      },
      lineHeight: {
        md: "20px",
        tiny: "13px",
        md: "19px",
      },
      height: {
        sm: "120px",
        40: "40px",
        30: "30px",
        540: "540px",
        400: "400px",
      },
      width: {
        216: "216px",
        lg: "1250px",
        md: "1100px",
        sm: "1000px",
        175: "175px",
        40: "40px",
        xs: "630px",
        30: "30px",
        570: "570px",
        510: "510px",
      },
      padding: {
        40: "40px",
        5: "5px",
        10: "10px",
        20: "20px"
      },
      margin: {
        10: "10px",
        20: "20px",
      },
      borderRadius: {
        4: "4px",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        lightGray: "#F5F8FA",
        darkGray: "rgba(46, 46, 46)",
      }),
      screens: {
        lg: { min: "1100px", max: "2500px" },
        md: { min: "1100px", max: "1300px" },
        sm: { min: "300px", max: "1100px" },
        xs: { min: "240px", max: "935px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// display: grid;
//     -ms-grid-columns: (minmax(240px, 1fr))[auto-fill];
//     grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
//     grid-gap: 2rem;
//     -webkit-box-align: start;
//     -ms-flex-align: start;
//     align-items: flex-start;
//     grid-auto-columns: minmax(260px, 1fr);
//     height: initial;
