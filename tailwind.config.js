/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(124, 58, 237)",
        dark: "#1A1A2E",
        darkBackground: "#1a1a2ebf",
        darkHeader: "000000c2",
        cardHover: "to right, #833ab4, #fd1d1d, #fcb045",
        darkBg: "",
      },
      colors: {
        buttonPrimary: "rgb(255, 255, 255)",
        dark: "#CCCCCC",
      },
      boxShadow: {
        darkShadow: "0px 1px 18px 2px #00000047",
        cardShadow: "0px 10px 30px #000",
        cardDetailShadow: "0 0 10px 1px rgb(0 0 0 / 35%)",
      },
      borderColor: {
        borderPrimary: "#CCCCCC",
      },
      outlineColor: {
        primaryOutline: "rgb(124, 58, 237)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
