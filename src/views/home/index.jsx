import React from 'react';
import { useEffect, useState } from 'react';
import { Rating } from '@mui/material';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/store/modules/home';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';

const Home = () => {
    /* 派发异步的事件: 发送网络请求 */
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch]);

    /* 从redux中获取数据 */
    const {goodPriceInfo} = useSelector((state)  => ({
        goodPriceInfo: state.home.goodPriceInfo
    }), shallowEqual)


    return (
        <HomeWrapper>
            <div>
                <HomeBanner />
                <div className="content">
                    <div className="section-header">
                        <SectionHeader title={goodPriceInfo.title}>
                        </SectionHeader>
                    </div>
                    <SectionRooms goodPriceInfo={goodPriceInfo} />
                    {/* <ul className='room-list'>
                        {
                            goodPriceInfo.list?.slice(0,8).map(item => {
                                return <RoomItem itemData={item} key={item.id} />
                            })
                        }
                    </ul> */}
                </div>
            </div>
        </HomeWrapper>
    );
}

export default Home;
