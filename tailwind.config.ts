import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],


  //todo: FINALIZE COLORS, IMPLEMENT BUTTON, GRID 
  theme: {
    extend: {
      colors: {
        richBlack: "#001524",
        onyx: "#35373d",
        parchment: "#f0ead2",
        carribean:'#15616D',
        papaya:'#FFECD1',
        orange:'#FF7D00',
        sienna:'#78290F',
        test1: "pink",
        test2: "lightgreen",
        teal: "teal",
      },
    },
  },
  plugins: [],
}
export default config
