/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'sun-yellow': '#ffe954',
        'nav-yellow': '#ffde00',
        'light-green': "#44ae1a",
        'grey': '#bababa'
      }
    },
  },
  plugins: [],
}

