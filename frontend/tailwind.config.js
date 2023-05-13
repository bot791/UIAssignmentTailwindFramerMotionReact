/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        "fontone":["'Nunito'", "sans-serif"],
        "fonttwo":[ "'Josefin Sans'", "sans-serif"],
        "fontthree":["'Alice'", "serif"],
        "playball":["'Playball'", "cursive"],
        "sourcecodepro":["'Source Code Pro'", "monospace"],
        "robotomono":[ "'Roboto Mono'", "monospace"]
      }
    },
  },
  plugins: [],
}

