/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E86524',
        secondary: '#262973',
        white_bg: '#FCFCFC',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

