/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'searchShadow': '0 3px 6px #00000029',
        'addButton':'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
      },
      transitionProperty: {
        'custom': 'background-color, box-shadow, border',
      },
      transitionDuration: {
        '250': '250ms',
        '225': '225ms',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDelay: {
        '0': '0ms',
      },
    },
  },
  plugins: [],
}
