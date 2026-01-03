/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5276C',
        secondary: '#000000',
        light: '#ffffff',
        dark: '#1a1a1a',
      },
      fontFamily: {
        hero: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}