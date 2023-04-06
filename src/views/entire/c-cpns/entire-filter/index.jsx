import React, { memo } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import { useState } from "react";
import classNames from "classnames";
const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  /* 多选操作使用列表存储 */
  const itemClickHandler = (item) => {
    // 浅拷贝
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      // 移除操作
      const index = newItems.indexOf(item);
      newItems.splice(index,1)
    } else {
      newItems.push(item);
    }

    setSelectItems(newItems);
  };

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandler(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
