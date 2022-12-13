/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    purge: {
      enabled: true,
      options: {
        safelist: ['dark'], //specific classes
      },
    },
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin'),
      require('@tailwindcss/typography')
    ],
  }
  
  