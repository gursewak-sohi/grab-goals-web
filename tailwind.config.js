/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'primary': {
                900: '#01B763', //brand
            },
        },
    },
},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
