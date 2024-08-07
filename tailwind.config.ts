import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xll': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xll': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: '#103E75',
        secondary: '#57CCF3',
      },
    },
  },
  plugins: [],
};
export default config;
