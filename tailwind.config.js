/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    extend: {
      fontSize: {
        22: '22px',
      },
      spacing: {
        '_8': '-8px',
      },
      colors: {
        app: '#384E5B',
        bg_pswd_g_box2 : '#0F076A',
        bg_pswd_g_box3 : '#060047',
        bg_pswd_g_hover: '#140d61',
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
