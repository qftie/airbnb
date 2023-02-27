import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/Indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  const sliderRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  /* 事件处理函数 */
  const controlClickHandler = (isRight = true) => {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();

    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  };

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandler(false)}>
          <IconArrowLeft width="30" height="30" />
        </div>

        <div className="btn right" onClick={(e) => controlClickHandler(true)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <span className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </span>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="预览图" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureElement : sliderElement}
        {/* <div className="slider">
          <div className="control">
            <div
              className="btn left"
              onClick={(e) => controlClickHandler(false)}
            >
              <IconArrowLeft width="30" height="30" />
            </div>

            <div
              className="btn right"
              onClick={(e) => controlClickHandler(true)}
            >
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {itemData?.picture_urls.map((item, index) => {
                return (
                  <span className="item" key={item}>
                    <span
                      className={classNames("dot", {
                        active: selectIndex === index,
                      })}
                    ></span>
                  </span>
                );
              })}
            </Indicator>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="预览图" />
                </div>
              );
            })}
          </Carousel>
        </div> */}
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
      </div>
      <div className="bottom">
        <Rating
          readOnly
          value={itemData.star_rating ?? 5} // ||会使得评分为0时，也赋值为5，所以用??判断前面是undefined或null时才使用后面的值
          precision={0.1}
          size="small"
          sx={{ fontSize: "14px", color: "#00848a", marginRight: "-2px" }}
        />
        <span className="count">{itemData.reviews_count}</span>
        {itemData.bottom_info && <span>·{itemData.bottom_info.content}</span>}
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
