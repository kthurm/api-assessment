/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffa600",
        primary: "#003f5c",
        secondary: "#955196",
        tertiary: "#ff6e54",
        dark: "#444e86",
      },
    },
  },
  plugins: [],
};
