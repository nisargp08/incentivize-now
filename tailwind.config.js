/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#eff9ff',
          '100': '#daf1ff',
          '200': '#bee7ff',
          '300': '#91d9ff',
          '400': '#5ec1fc',
          '500': '#41a8f9',
          '600': '#2287ee',
          '700': '#1a70db',
          '800': '#1c5ab1',
          '900': '#1c4d8c',
          '950': '#163055',
        },      
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
