/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#5431ad",
      },
      fontFamily: {
        mont: ["var(--font-montserrat)"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,1) 3px, #f5f5f5 6px, #f5f5f5 100px)",
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 3px, #1b1b1b  6px, #1b1b1b 100px)",
      },
    },
  },
  plugins: [],
};
