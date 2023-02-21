import React from 'react';
import hyRequest from '@/service';
import { useEffect, useState } from 'react';

const Home = () => {
    const [highScore, setHighScore] = useState({});

    useEffect(() => {
        hyRequest.get({url:"/home/highscore"}).then(res => {
            setHighScore(res)
        })
    }, []); // 传入空数组依赖，保证代码只执行一次
    return (
        <div>
            <h2>{highScore.title}</h2>
            <h4>{highScore.subtitle}</h4>
            <ul>
                {/* 使用可选链时，我们可以在对象的属性或方法名后面添加 ?. 来避免错误。
                如果对象的属性或方法不存在，则返回 undefined 而不是引发错误。 */}
                {highScore?.list?.map((item) => {
                    return <li key={item.id}>
                        {item.name}
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Home;
