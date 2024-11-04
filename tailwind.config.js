/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color) / 1)',
        accent: 'rgb(var(--accent-color) / 1)',
        secondary: 'rgb(var(--secondary-dark) / 1)',
        gray: {
          100: 'rgb(var(--gray-color-1) / 1)',
          200: 'rgb(var(--gray-color-2) / 1)'
        },
        light: 'rgb(var(--light-color) / 1)',
        red: {
          DEFAULT: 'rgb(var(--red-color) / 1)'
        },
        "off-white": 'rgb(var(--off-white) / 1)'
      }
    },
  },
  plugins: [],
}

