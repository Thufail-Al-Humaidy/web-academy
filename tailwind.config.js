/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        'home-title': '68px',           // Judul Home
        'section-title': '35px',        // Judul Section
        'card-title': '26px',           // Judul Card
        'testi-title': '28px',   // Judul Testimonials
        'faq-title': '22px',            // Judul FAQ
        'base': '18px',                 // Text Base
      },
      colors: {
        ijo: {
          40: '#80E100',
          50: '#9EFF00',
          60: '#B1FF33',
          70: '#C5FF66',
          80: '#D8FF99',
          90: '#ECFFCC',
        },
        abuabu: {
          10: '#191919',
          15: '#262626',
          20: '#333333',
          30: '#4C4C4D',
          35: '#59595A',
          40: '#656567',
          45: '#98989A', // Perbaiki dari grey/35 menjadi grey/45
        },
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'], // Menambahkan font Barlow dengan fallback
      },
    },
  },
  plugins: [],
}

