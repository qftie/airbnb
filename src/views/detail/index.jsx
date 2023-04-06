import React, { memo} from "react";
import { shallowEqual, useSelector } from "react-redux";
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

export default Detail;
