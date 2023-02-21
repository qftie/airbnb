import React from "react";
import { Navigate } from "react-router-dom";

// 实现页面懒加载, 使用了 React.lazy() 方法来动态导入，这个方法接受一个返回 import() 方法的函数作为参数。
// 这样做的好处是，当应用程序加载时，它不会加载 MyComponent 组件，只有当我们尝试使用它时才会加载
const Home = React.lazy(()=>import('@/views/home'))
const Entire = React.lazy(()=>import('@/views/entire'))
const Detail = React.lazy(()=>import('@/views/detail'))

const routes = [
    {
        // 实现首次进入即进入home
        path:"/",
        element: <Navigate to="/home" />
    },
    {
        path:"/home",
        element: <Home/>
    },
    {
        path:"/entire",
        element: <Entire/>
    },
    {
        path:"/detail",
        element: <Detail/>
    },


]

export default routes;