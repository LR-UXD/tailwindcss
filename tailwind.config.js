/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css}", // 处理 src 目录下的 HTML、JS、TSX 文件
    "./index.html" // 处理根目录中的 HTML 文件
  ],
  theme: {
    extend: {
      fontFamily: {
        "body-en-regular-font-family": "Arial-Regular, sans-serif",
        en: "Arial-Regular, sans-serif",
      },
      fontSize: {
        "body-en-regular-font-size": "14px",
        14: "14px",
      },
      fontWeight: {
        "body-en-regular-font-weight": "400",
      },
      lineHeight: {
        "body-en-regular-line-height": "22px",
        22: "22px",
      },
      letterSpacing: {},
      borderRadius: {
        "radius-button-radius-small": "2px",
      },
      colors: {
        "component-button-primary-normal": "#992e8a",
        "semantic-text-other-white-back": "#ffffff",
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [],
};
