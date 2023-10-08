import plugins from "./plugins/addVariants"

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [...plugins, require("tailwind-scrollbar-hide")],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      spacing: {
        0: "0",
        1: "2px",
        2: "4px",
        3: "8px",
        4: "12px",
        5: "16px",
        6: "24px",
        7: "32px",
        8: "40px",
        9: "48px",
        10: "64px",
        11: "80px",
        12: "96px",
        13: "112px",
        14: "160px",
        15: "208px",
        16: "314px",
        17: "474px"
      },
      colors: {
        "vue-green": "#41e015;",
        "vue-green-light": "#A6FF96",
        "army-green": "#31511f;",
        "kahlua-green": "#f5fff5;",
        "autumn-beige": "#F9DEC9",
        "blossom-pink": "#F78CA2",
        "atomic-red": "#D80032",
        "grape-purple": "#B931FC"
      },
      fontFamily: {
        sans: ['Roboto', 'Noto Sans KR', 'sans-serif']
      }
    },
  },
}

