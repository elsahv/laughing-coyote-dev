import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#35373d",
        parchment: "#f0ead2",
        test1: "pink",
        test2: "lightgreen",
        teal: "teal",
      },
    },
  },
  plugins: [],
}
export default config
