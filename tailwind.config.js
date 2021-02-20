// eslint-disable-next-line no-undef
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-jerr": "#3B82F6",
      },
      fontFamily: {
        Raleway: [
          "Raleway",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      gridTemplateColumns: {
        18: "repeat(18, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
