/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#000000',
        'secondary': '#141416',
        'accent': '#FFEA00',
        'light': '#F0F0F0',
        'white': '#FFFFFF',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #141416 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(10, 10, 11, 0.8) 0%, rgba(20, 20, 22, 0.95) 100%)',
      },
      boxShadow: {
        'premium': '0 4px 30px rgba(232, 135, 110, 0.15)',
        'golden': '0 4px 30px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
}
