/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2x": { raw: "(min-resolution: 192dpi)" },
      },
      colors: {
        desertSand: "#D8C8A6",
        royalMaroon: "#9B1B30",
        turquoiseBlue: "#1F8A70",
        goldenYellow: "#F6C33D",
        deepIndigo: "#2F3A6A",
        ivoryWhite: "#F9F3E4",
        earthyRust: "#D16D4F",
        charcoalGray: "#333333",
      },
    },
  },
  plugins: [],
};
