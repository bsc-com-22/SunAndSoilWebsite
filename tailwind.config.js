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
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        solar: {
          DEFAULT: 'rgb(var(--solar) / <alpha-value>)',
          light: 'rgb(var(--solar-light) / <alpha-value>)',
          dark: 'rgb(var(--solar-dark) / <alpha-value>)',
        },
        earth: 'rgb(var(--earth) / <alpha-value>)',
        neutral: {
          light: 'rgb(var(--neutral-light) / <alpha-value>)',
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
