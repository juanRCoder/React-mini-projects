/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      },
      screens: {
        vxs: "360px",
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
