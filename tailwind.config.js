/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      width:{
        'grid-6x2': 'calc((100% - 24px)/2)',
        'grid-4x3-1': 'calc((100% - 48px)* 1/3)',
        'grid-4x3-2': 'calc((100% - 48px)* 2/3 + 24px)',
      },
    },
    screens: {
      'dt-l' : '1000px',
      'dt' : '768px'
    }
  },
  plugins: [],
}

