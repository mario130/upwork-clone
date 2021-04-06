module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": '#37a000',
        "dark": '#008329',
        "light": '#6fda44',
        "complementary": '#1d4354',
        "twilight": '#2b5468',
        "navBorder": '#336278',
        "bodyGray": '#f1f2f4'
      },
      fontFamily: {
        nuni: ["Nunito Sans"],
        play: ["Playfair Display"]
      }
    },
    boxShadow: {
      categ: '0 0 20px hsl(0deg 0% 40% / 12%)'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
