import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "mainslice",
  initialState: [],
  reducers: {
    addtomain: (state, action) => action.payload,
  },
});

export const { addtomain } = MainSlice.actions;

export default MainSlice.reducer;
