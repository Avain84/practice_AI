/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      width:{
        'grid-2item': 'calc((100% - 24px)/2)',
      },
    },
    screens: {
      'dt-l' : '1000px',
      'dt' : '768px'
    }
  },
  plugins: [],
}

