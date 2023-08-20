/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        leftImage:"url(../assests/leaf.avif)"
      }
    },
    fontFamily: {
      'cairo':['cairo', 'serif']
    }
  },
  plugins: [],
}

