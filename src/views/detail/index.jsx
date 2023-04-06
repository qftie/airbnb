import { changeDetailInfoAction } from "@/store/modules/detail";
import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DetailPictures from "./detail-pictures";
import { DetailWrapper } from "./style";
import AppHeader from "@/components/app-header";

const Detail = memo((props) => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  return (
    <DetailWrapper>
      <AppHeader isFixed={false} isHome={false} />
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
    </DetailWrapper>
  );
});

Detail.propTypes = {};

export default Detail;
