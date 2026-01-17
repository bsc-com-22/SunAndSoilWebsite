/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',
          dark: '#1E3D1A',
        },
        solar: {
          DEFAULT: '#F4B400',
          dark: '#D9A000',
        },
        earth: '#8B4513',
        neutral: {
          light: '#F9FAFB',
          DEFAULT: '#F3F4F6',
          dark: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
