import { changeDetailInfoAction } from "@/store/modules/detail";
import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DetailPictures from "./detail-pictures";
import { DetailWrapper } from "./style";

const Detail = memo((props) => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
    </DetailWrapper>
  );
});

Detail.propTypes = {};

export default Detail;
