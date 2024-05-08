/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    extend: {
      boxShadow: {
        'colorPallet': '0 0 17px 0 rgb(226,232,240,0.7)',
        'tipAmount': '0 0 17px 0 rgb(207,250,254,0.7)',
        'pswdGenerator': '0 0 17px 0 rgb(190,24,93,0.7)',
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
