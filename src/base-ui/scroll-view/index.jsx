import React, { memo, useEffect, useRef } from "react";
import { ViewWrapper } from "./style";
import { useState } from "react";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [positionIndex, setPositionIndex] = useState(0);
  /* 使用useRef是为了因为totalDistance只需要记录下来，而不希望他每次改变时造成组件重新渲染 */
  const totalDistanceRef = useRef();

  /* 组件渲染完毕后，判断是否显示右侧按钮 */
  /* 这里使用useRef记录DOM，注意确保ref引用了真实存在的dom元素！！！ */
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current?.scrollWidth;
    const clientWidth = scrollContentRef.current?.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  /* 事件处理的逻辑 */
  const controlClickHandler = (isRight) => {
    const newIndex = isRight ? positionIndex + 1 : positionIndex - 1;
    const scrollLeft = scrollContentRef.current.children[newIndex].offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${scrollLeft}px)`;
    // if (scrollLeft>totalDistanceRef) {
    //   setShowRight(false)
    // }
    setPositionIndex(newIndex);
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > scrollLeft);
    setShowLeft(scrollLeft > 0);
  };

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandler(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandler(true)}
        >
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div >
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
