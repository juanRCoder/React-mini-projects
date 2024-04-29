/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      screens: {
        vxs: "360px",
        vs: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
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
