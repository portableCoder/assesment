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
        "col": "#272D37",
        "primary": "#2B63D9",
        "primary-btn": "#437EF7",
        "secondary": "#3971E7",
        "primary-2": "#648EF7",
        "alt": "#151B28",
        "alt2": "#FAFBFC"
      }
    },
  },
  plugins: [],
}
export default config
