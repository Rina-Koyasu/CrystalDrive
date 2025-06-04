/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["CrystalDrive"], // ここを忘れずに！
  },
};
