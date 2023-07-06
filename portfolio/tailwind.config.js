/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        xbounce: {
          '0%, 100%': { transform: 'translateX(-15%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        xbounce: 'xbounce 2s infinite',
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'mocha'
    }),
  ],
}

