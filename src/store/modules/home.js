import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHomeDicountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeLongForData,
  getHotRecommendData,
  getHomePlusData,
} from "@/service";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    // const res = await getHomeGoodPriceData();
    // const res2 = await getHomeHighScoreData();
    // return [res, res2]
    // 优化代码：因为await会执行完再执行下一个，但这里拿数据的先后顺序其实没有影响，
    // 优化总体思路是使用没有先后顺序的promise，直接在这里传入store参数，然后dispatch使用reducer发送更改请求
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPirceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHomeDicountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHotRecommendData().then((res) => {
      dispatch(changeHotRecommendInfoAction(res));
    });
    getHomeLongForData().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    // 高性价比房源数据
    highScoreInfo: {},
    goodPriceInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPirceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});

export const {
  changeGoodPirceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
