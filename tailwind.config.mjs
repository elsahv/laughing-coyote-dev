/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      testWidth: {
        testCustomSm: "598px",
      },
      colors: {
        lavender: "#CDD1E2",
        onyx: "#35373d",
        parchment: "#f0ead2",
        munsell: "#0792a5",
        cerulean: "#007ba5",
        carribean: "#15616D",
        papaya: "#FFECD1",
        orange: "#FB923C",
        sienna: "#78290F",
        test1: "pink",
        test2: "lightgreen",
        teal: "teal",
        coral: "#FF7F50",
      },
    },
  },
  plugins: [],
};
