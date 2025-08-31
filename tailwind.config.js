/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(37, 99, 235, 0.35)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
