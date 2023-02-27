import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";

// 通过rtk和普通reducer方式都可以正常传入reducer
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  },
});

export default store;
