/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#5F35F5',
      },
      maxWidth: {
        'container': '1060px',
      },
    },
  },
  plugins: [],
}