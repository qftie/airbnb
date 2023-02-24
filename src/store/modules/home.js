import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/service";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async ()=>{
    const res = await getHomeGoodPriceData();
    // getHomeGoodPriceData().then(res=> {
    //     console.log(res);
    // })}
    return res;
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        // 高性价比房源数据
        goodPriceInfo: {
        }
    },
    reducers: {
        changeGoodPirceInfoAction(state, {payload}) {
            state.goodPriceInfo = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomeDataAction.fulfilled, (state,{payload})=>{
            state.goodPriceInfo = payload;
        })
    }
    
})

export const {changeGoodPirceInfoAction} = homeSlice.actions
export default homeSlice.reducer