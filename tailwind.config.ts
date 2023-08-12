import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2B63D9",
        "secondary": "#3971E7",
        "primary-2": "#648EF7",
        "alt": "#151B28"
      }
    },
  },
  plugins: [],
}
export default config
