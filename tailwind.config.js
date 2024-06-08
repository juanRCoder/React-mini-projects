/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    extend: {
      colors: {
        blue: "#07589f",
        white: "#ffffff",
        orange: "#ff7849",
        red: "#a70e0e",
        brow1: "#654D3E",
        brow2: "#433831",
        cream: "#FFDBB9",
        black: "#00000096",
      },
      fontSize: {
        22: '22px',
      },
      spacing: {
        '_8': '-8px',
      },
      screens: {
        vxs: "360px",
        vs: "480px",
        vm: "620px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      letterSpacing: {
        tightestt: ".3rem",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
        InriaSans: ["Inria Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};
