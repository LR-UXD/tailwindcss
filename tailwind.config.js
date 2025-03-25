/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"], // 监测你的 HTML 和 JS 文件
    theme: {
      extend: {
        colors: {
          primary: "#1DA1F2", // 自定义颜色
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // 自定义字体
        },
      },
    },
    plugins: [],
  };
  