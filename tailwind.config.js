/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-grey': '#D9E7FF',
        'custom-dark': '#252A32',
        'custom-blue-grey': '#97AACD',
        'custom-blue': '#4368E0',
        'custom-white': '#F6F9FE',
        'custom-light-grey': '#E4E6F1'
      },
      boxShadow: {
        'custom': '0px 2px 2px 0px rgba(211, 214, 215, 0.20), 0px 4px 4px 0px rgba(211, 214, 215, 0.20), 0px 16px 16px 0px rgba(211, 214, 215, 0.20), 0px 32px 32px 0px rgba(211, 214, 215, 0.20), 0px 64px 64px 0px rgba(211, 214, 215, 0.20)',
      },
      spacing: {
        '5': '5px',
        '25': '25px',
      },
    },

  },
  plugins: [],
}

