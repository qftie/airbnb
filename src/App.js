import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

import AppFooter from "@/components/app-footer";
const App = memo(() => {
  return (
    <div className="app">
      {/* <AppHeader /> */}
      <div className="page">
        {/* 在此配置路由，使用router中的配置文件 */}
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  );
});

export default App;
