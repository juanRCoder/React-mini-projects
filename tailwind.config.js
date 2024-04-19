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
        vss: "360",
        vs: "480px",
      },
      inset: {
        "-65": "-65px",
      },
      letterSpacing: {
        tightestt: ".3rem",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
