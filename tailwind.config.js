module.exports = {
  extends: "./tsconfig.extend.json",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      "-90": "-90deg",
      "270": "270deg",
    },
    extend: {
      gridTemplateColumns: {
        'exchange-panel': 'min-content 1fr min-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
