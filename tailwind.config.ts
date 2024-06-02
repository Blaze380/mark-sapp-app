/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iblue: "#0F87BF",
      },
      fontSize: {
        text: "16px",
        title: "18px"
      }
    },
  },
  plugins: [],
};
