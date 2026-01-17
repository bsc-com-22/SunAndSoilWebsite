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
          DEFAULT: '#2E7D32', // Deep agricultural green
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        earth: {
          DEFAULT: '#795548', // Soil/Land
          light: '#A1887F',
          dark: '#5D4037',
        },
        solar: {
          DEFAULT: '#FBC02D', // Sun/Energy
          light: '#FDD835',
          dark: '#F9A825',
        },
        neutral: {
          light: '#F5F5F5', // Background
          DEFAULT: '#E0E0E0',
          dark: '#9E9E9E',
        },
        muted: {
          DEFAULT: '#757575', // Secondary text
          light: '#9E9E9E',
          dark: '#616161',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
