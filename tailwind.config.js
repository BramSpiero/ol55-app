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
        whiskey: {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d8bc',
          300: '#e9bc8f',
          400: '#de9860',
          500: '#d47d42',
          600: '#c66537',
          700: '#a44f2f',
          800: '#84412c',
          900: '#6b3727',
        },
        midnight: {
          50: '#f4f6f7',
          100: '#e3e7ea',
          200: '#c9d1d8',
          300: '#a4b1bc',
          400: '#778999',
          500: '#5c6e7e',
          600: '#4f5d6b',
          700: '#444e5a',
          800: '#3c444d',
          900: '#1a1f24',
        },
      },
    },
  },
  plugins: [],
}
