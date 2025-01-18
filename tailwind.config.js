/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: {
        50: "#fefcf2",
        100: "#fdf5d7",
        200: "#fcf1c4",
        300: "#fbeaa9",
        400: "#fae699",
        500: "#f9e07f",
        600: "#e3cc74",
        700: "#b19f5a",
        800: "#897b46",
        900: "#695e35",
      },
      blue: {
        50: "#f8fbfb",
        100: "#e9f2f4",
        200: "#dfebee",
        300: "#d0e2e7",
        400: "#c7dde2",
        500: "#b9d4db",
        600: "#a8c1c7",
        700: "#83979b",
        800: "#667578",
        900: "#4e595c",
      },
      green: {
        50: "#f7fcfa",
        100: "#e7f4f1",
        200: "#dcefea",
        300: "#cce8e0",
        400: "#c2e4da",
        500: "#b3ddd1",
        600: "#a3c9be",
        700: "#7f9d94",
        800: "#627a73",
        900: "#4b5d58",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}