import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0; // 不允许压缩，不然会自动缩小然后挤在一起
  width: 20%;

  .inner {
    position: relative;
    padding: 8px;
  }

  .cover {
    width: 100%;
    border-radius: 3px;
  }

  .bg-cover {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    height: 60%;
    border-radius: 3px 3px;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
  }

  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;
