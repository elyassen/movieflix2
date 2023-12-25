import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    addtosearch: (state, action) => {
      return action.payload;
    },
  },
});

export const { addtosearch } = searchSlice.actions;

export default searchSlice.reducer;
