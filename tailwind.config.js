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
      },
      width: {
        'custom': 'calc(100% - 21px)',
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.box-shadow-inset': {
          'box-shadow': 'inset 0 0 0 1px #E4E6F1',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

