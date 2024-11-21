/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chỉ định nơi Tailwind tìm file cần xử lý
  ],
  theme: {
    extend: {},
    fontFamily: {
      bellota: ['"Bellota Text"', "cursive"],
      texturina: ['"Texturina"', "serif"],
    },
  },
  plugins: [],
};
