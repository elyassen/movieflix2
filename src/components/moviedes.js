import { createSlice } from "@reduxjs/toolkit";

const moviedeSlice = createSlice({
  name: "moviedes",
  initialState: [],
  reducers: {
    addtodes: (state, action) => action.payload,
  },
});

export const { addtodes } = moviedeSlice.actions;

export default moviedeSlice.reducer;
