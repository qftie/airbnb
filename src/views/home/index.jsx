import React from 'react';
import hyRequest from '@/service';
import { useEffect, useState } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';


const Home = () => {
    return (
        <HomeWrapper>
            <div>
                <HomeBanner />
            </div>
        </HomeWrapper>
    );
}

export default Home;
