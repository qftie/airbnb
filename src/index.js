import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import "antd/dist/reset.css";
import "normalize.css";
import "./assets/css/reset.css"
import store from "./store";
import theme from "./assets/theme";

// 配置别名 @ => src webpack配置
// 方法：craco => create-react-app config
// 安装：npm install @craco/craco@alpha -D
// 新建craco.config.js
// d

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>

  <Suspense fallback="loading">
    {/* 在渲染 懒加载的 组件时，我们需要使用 <Suspense> 组件来包装它，这个组件会在组件加载时显示一个加载中的占位符。
    在 fallback 属性中定义了一个加载中的占位符"loading"。这个占位符将在 MyComponent 组件加载完成之前显示。*/}
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  //   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
