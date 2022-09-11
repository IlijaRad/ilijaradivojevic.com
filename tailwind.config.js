const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.*",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["0.8125rem", "1.5rem"],
      sm: ["0.875rem", "1.5rem"],
      base: ["1rem", "1.75rem"],
      "4xl": ["2rem", "2.5rem"],
      "5xl": ["3rem", "3.5rem"],
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
