import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import { useState, useCallback } from "react";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  const initialName = infoData?.dest_address[0]?.name;
  /* 数据的转换 */
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const [name, setName] = useState(initialName);

  /* tabClickHandler: 从子组件向父组件发信息 */
  const tabClickHandler = useCallback((index, item) => {
    setName(item);
  }, []);

  return (
    <SectionV2Wrapper>
      <div className="content">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandler} />
        <SectionRooms
          roomList={infoData?.dest_list?.[name]}
          itemWidth="33.3333%"
        />
        <SectionFooter name={name}/>
      </div>
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {};

export default HomeSectionV2;
