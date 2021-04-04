module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": '#37a000',
        "dark": '#008329',
        "complementary": '#1d4354'
      },
      fontFamily: {
        nuni: ["Nunito Sans"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
