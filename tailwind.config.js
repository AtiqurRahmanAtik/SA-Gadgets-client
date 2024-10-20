/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
  
    extend: {
      
     animation: ['hover', 'focus'],
    }
     
  },
  plugins: [
    require('daisyui'),
  ],
}

