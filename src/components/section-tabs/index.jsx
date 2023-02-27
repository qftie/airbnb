import PropTypes from "prop-types";
import React, { memo } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";
import { useState } from "react";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemClickHandler = (index, item) => {
    setCurrentIndex(index);
    tabClick(index, item);
  };
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              // { active: index === currentIndex } 表示后面的表达式为true时才给标签加入active这个类
              className={classNames("item", { active: index === currentIndex })}
              // 用回调函数才能传参，否则只能传函数名字而不能传递函数调用的形式
              onClick={(e) => itemClickHandler(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
