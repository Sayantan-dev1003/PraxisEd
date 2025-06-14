/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': { 'raw': '(min-width: 1024px)' },
        'tablet': { 'raw': '(min-width: 768px) and (max-width: 1023px)' },
        'mobile': { 'raw': '(max-width: 767px)' }
      },
      colors: {
        'praxised-blue': '#2255A1',
        'praxised-teal': '#4ECDC4',
        'praxised-sky': '#38bdf8'
      }
    },
  },
  plugins: [],
}

