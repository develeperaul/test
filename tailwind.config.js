/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    // colors: {
    // },
    extend: {
      screens: {
        d: "1440px",
        // 1920: "1920px",
      },
      borderRadius: {
        sm: "0.3125rem",
        md: "0.625rem",
        DEFAULT: "0.9375rem",
        lg: "1.25rem",
      },
      spacing: {
        0.75: "0.1875rem",
        1.5: "0.375rem",
        2.75: "0.6875rem",
        3.25: "0.8125rem",
        3.75: "0.9375rem",
        4.25: "1.0625rem",
        4.5: "1.125rem",
        5.25: "1.375rem",
        5.75: "1.4375rem",
        6.25: "1.5625rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        7.75: "2.1875rem",
        8.25: "2.1875rem",
        9.75: "2.375rem",
        11.25: "2.8125rem",
        12.25: "3.125rem",
        13.5: "3.375rem",
        15: "3.75rem",
        17.25: "4.25rem",
        17.5: "4.375rem",
        19.5: "4.875rem",
        24.75: "6.5625rem",
        25: "6.25rem",
        29: "7.5rem",
        desktop: "7.5rem",
        mobile: "0.9375rem",
        "d-section": "7.5rem",
        "m-section": "3.125rem",
        "d-f-section": "2.5rem",
        "m-f-section": "1.875rem",
        "d-header-t": "2.1444rem",
        "m-header-t": "1.2944rem",
        "footer-m-t": "0.9375rem",
        "footer-m-b": "2.5rem",
        "footer-d-t": "5.1875rem",
        "footer-d-b": "1.875rem",
      },
      colors: {
        primary: "#7945F3",
        "primary-light": "#A584F1",
        "primary-light-0.5": "#DAE5FF",
        invalid: "#E74646",
        grey: "#CCCCCC",
        black: "#0C0C0C",
        white: "#FFFFFF",
        blue: "#1E66FF",
        border: "#D7D7D7",
        nav: "#2c2c2c",
        gradient: "linear-gradient(87.19deg, #2C6FFF 13.2%, #9D1CF7 82.38%)",
        // secondary: "#006DCC",
        // valid: "#4AD66D",
        // dark: "#0A1E3E",
        // "deep-dark": "#001538",
        // "dark-blue": "#003870",
        // "blue-hover": "#0083F5",
        // "dark-blue-cover": "#001233",
      },
    },
    fontFamily: {
      gothampro: "GothamPro",
      bitter: "Bitter",
    },
    fontSize: {
      xxs: ["0.5rem", "130%"], //8
      xs: ["0.625rem", "100%"], //10
      xs2: ["0.625rem", "130%"], //10
      xs3: ["0.75rem", "0.6875rem"], //12, 11
      xs4: ["0.75rem", "100%"], //12
      "xs4-1": ["0.75rem", "120%"], //12
      xs5: ["0.875rem", "0.8125rem"], //14, 13
      xs6: ["0.875rem", "100%"], //14
      xs7: ["0.875rem", "130%"], //14
      xs8: ["0.875rem", "140%"], //14
      sm: ["1rem", "120%"], //16
      sm2: ["1rem", "130%"], //16
      sm3: ["1rem", "140%"], //16
      sm4: ["1rem", "150%"], //16
      sm5: ["1.125rem", "1.0625rem"], //18, 17
      sm6: ["1.125rem", "120%"], //18
      sm7: ["1.125rem", "130%"], //18
      sm8: ["1.125rem", "140%"], //18
      sm9: ["1.25rem", "120%"], //20
      sm10: ["1.25rem", "130%"], //20

      md: ["1.75rem", "2.125rem"], //28, 34
      md2: ["1.75rem", "120%"], //28
      md3: ["1.75rem", "130%"], //28
      md4: ["1.75rem", "140%"], //28
      md5: ["1.975rem", "2rem"], //31, 32
      lg: ["2rem", "2.375rem"], //32, 38
      lg2: ["2.5rem", "3rem"], //40, 48
      lg3: ["2.625rem", "2.5rem"], //42, 40
      lg4: ["3rem", "3.625rem"], //48, 58
      xl: ["3.25rem", "3.8125rem"], //52, 61
      xl2: ["3.875rem", "130%"], //62
    },
    container: {
      DEFAULT: "100%",
      center: true,
      xl: "1230px",
      sm: "100%",
      padding: {
        DEFAULT: "0.9375rem",
        xl: "7.5rem",
        sm: "0.9375rem",
      },
    },
  },
  plugins: [],
};

//second color #7945F3
//color text black #0C0C0C
//background: linear-gradient(87.19deg, #2C6FFF 13.2%, #9D1CF7 82.38%);
// background: linear-gradient(84.31deg, #0E94FF 4.26%, #6F32EF 35.18%, #7F4CD1 57.68%, #9D1CF7 85.15%);
