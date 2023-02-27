import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const scrollRef = useRef();

  useEffect(() => {
    // 1. 获取selectIndex对应的item
    const selectItemEl = scrollRef.current?.children[selectIndex];
    const selectItemWidth = selectItemEl.clientWidth;
    const selectItemOffset = selectItemEl.offsetLeft;

    // 2. content的宽度
    const scrollElWidth = scrollRef.current?.clientWidth;
    const scrollElScroll = scrollRef.current?.scrollWidth;

    // 3. 获取selectIndex要滚动的距离
    let distance =
      selectItemWidth * 0.5 + selectItemOffset - scrollElWidth * 0.5;

    if (distance < 0) distance = 0; // 0，1不需要移动：确保永远只移动正值
    if (distance > scrollElScroll - scrollElWidth)
      distance = scrollElScroll - scrollElWidth; // 最右边元素也不需要移动
    scrollRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="scroll" ref={scrollRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {};

export default Indicator;
