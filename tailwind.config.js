/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0D0D0D',
        surface: '#1A1A1A',
        border: '#2E2E2E',
        yellow: '#F5C400',
        teal: '#00D4C8',
        offwhite: '#F0F0F0',
        muted: '#888888',
        ember: '#E03E2D',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
