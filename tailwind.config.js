/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#a51010",
        slate800: "#1e293b",
      },
      screens: {
        vs: "450px",
      },
      inset: {
        '-65': '-65px',
      },
    },
  },
  plugins: [],
};
