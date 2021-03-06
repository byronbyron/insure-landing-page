module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['DM Serif Display', 'sans'],
        'sans-serif': ['Karla', 'sans-serif']
      },
      colors: {
        'dark-violet': 'hsl(256, 26%, 20%)',
        'grayish-blue': 'hsl(216, 30%, 68%)',
        'very-dark-violet': 'hsl(270, 9%, 17%)',
        'dark-grayish-violet': 'hsl(273, 4%, 51%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
