import RoomItem from "@/components/room-item";
import { changeDetailInfoAction } from "@/store/modules/detail";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoomsWrapper } from "./style";

const EntireRooms = memo((props) => {
  /* 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  /* 事件处理 */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandler = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );
  return (
    <RoomsWrapper>
      <div className="title">{totalCount}多处住所</div>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              key={item._id}
              itemWidth="20%"
              itemClick={itemClickHandler}
            />
          );
        })}
      </div>
      {/* 发送网络请求时（点击完页码之后）将还未刷新的元素用蒙版遮住 */}
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {};

export default EntireRooms;
