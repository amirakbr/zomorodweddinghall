/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens : {
      'xl': '1400px',
      'lg' : '1000px' , 
      'sls' : '800px' , 
      'md' : '600px' , 
      'sm' : '460px' , 
    }
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
