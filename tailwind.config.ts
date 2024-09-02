import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        'sans-secondary': [
          'var(--font-dm-sans)',
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [],
};

export default config;
