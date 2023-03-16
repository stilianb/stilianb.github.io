/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: 'macchiato'
    }),
    require('@tailwindcss/forms'),
  ],
}
