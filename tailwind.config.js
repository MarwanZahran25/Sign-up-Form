/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        leftImage:"url(../assests/leaf.avif)"
      }
    },
    fontFamily: {
      'cairo':['Cairo', 'serif']
    }
  },
  plugins: [],
}

