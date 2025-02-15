/** @type {import('tailwindcss').Config} */
module.exports = {
  eslint: {
    // Add the rules you want to disable
    rules: {
      'react/jsx-no-undef': 'off',
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
