/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      colors: {
        primary: "#0D28A6",
        secondary: "#5CB85F",
        background: "#F1F3FF",
        list: "#CFD4ED",
        neutral: "#D0D0D0",
        warning: "#F9CC00",
        danger: "#FA2C5A",
      },
    },
  },
  plugins: [],
};

