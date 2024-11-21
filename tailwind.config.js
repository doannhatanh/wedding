/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chỉ định nơi Tailwind tìm file cần xử lý
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        bounce: "bounce 2s infinite",
      },
    },
    fontFamily: {
      bellota: ['"Bellota Text"', "cursive"],
      texturina: ['"Texturina"', "serif"],
      montagu: ["Montagu Slab"],
      petit: ["Petit Formal Script", "cursive"],
      genos: ["Genos", "sans-serif"],
      greatvibes: ["Great Vibes", "cursive"],
      alexbrush: ["Alex Brush", "cursive"],
      windsong: ["Alex Brush", "cursive"],
    },
  },
  plugins: [],
};
