// 设置全局通用的主题色，使用themeProvider将theme注入子组件
const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a",
    textColor: "#484848",
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 250ms ease; // 要过渡的属性 花费时间 运动曲线 何时开始
    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
    }
    `,
  },
};

// TODO 定义夜间模式
// const nightTheme = {

// }

export default theme;
