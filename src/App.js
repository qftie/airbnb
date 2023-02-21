import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
const App = memo(() => {
    return (
        <div className='app'>
            <div className="header">
                header
            </div>
            <div className="page">
                {/* 在此配置路由，使用router中的配置文件 */}
                {useRoutes(routes)}
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    );
})

export default App;
