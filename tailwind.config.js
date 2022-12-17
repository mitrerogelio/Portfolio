/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
