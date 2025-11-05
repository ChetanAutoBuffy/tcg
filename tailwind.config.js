/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tcg: {
          black: '#0D0D0D',
          dark: '#1E1E1E',
          gray: '#D1D5DB',
          white: '#FFFFFF',
          blue: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [],
}
