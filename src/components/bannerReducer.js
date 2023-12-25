import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: [],
  reducers: {
    setbanner: (state, action) => action.payload,
  },
});

export const { setbanner } = bannerSlice.actions;

export default bannerSlice.reducer;
