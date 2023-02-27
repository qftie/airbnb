import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <RoomWrapper>
      <ul className="room-list">
        {roomList?.slice(0, 8).map((item) => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
          );
        })}
      </ul>
    </RoomWrapper>
  );
});

SectionRooms.propTypes = {};

export default SectionRooms;
