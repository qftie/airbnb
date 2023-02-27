import React, { useCallback } from "react";
import { useEffect } from "react";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { memo } from "react";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils";
import HomeLongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  /* 内部数据顺序：定义数据 -》从redux获取数据-》 数据转换和数据处理 -》副作用代码 */

  /* 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  /* 从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longForInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual // 一个浅比较函数，用于比较前后两个状态对象是否相等。当传入 shallowEqual 时，useSelector 内部会对前后两个状态对象进行浅比较，只有在前后两个状态对象不相等时，才会触发组件的重新渲染。
  );

  /* 拓展：如果服务器动态发送各个区块的顺序要求动态展示，只需要把其中一块打包然后动服务器拿到区块顺序打包展示即可，这反应了react的灵活性，vue的template则较难做到 */

  return (
    <HomeWrapper>
      <div>
        <HomeBanner />
        <div className="content">
          {/* 折扣数据 */}
          {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
          {isEmptyO(hotRecommendInfo) && (
            <HomeSectionV2 infoData={hotRecommendInfo} />
          )}
          {isEmptyO(longForInfo) && <HomeLongFor infoData={longForInfo} />}
          {isEmptyO(goodPriceInfo) && (
            <HomeSectionV1 infoData={goodPriceInfo} />
          )}
          {isEmptyO(highScoreInfo) && (
            <HomeSectionV1 infoData={highScoreInfo} />
          )}
          <HomeSectionV3 infoData={plusInfo} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
