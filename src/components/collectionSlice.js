import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "collections",
  initialState: [],
  reducers: {
    ADD_TO_COLLECTIONS: (state, action) => {
      state.push(action.payload);
    },
    REMOVE_FROM_COLLECTIONS: (state, action) => {
      const newstate = state.filter((items) => items.id !== action.payload);
      return newstate;
    },
  },
});

export const { ADD_TO_COLLECTIONS, REMOVE_FROM_COLLECTIONS } =
  collectionSlice.actions;

export default collectionSlice.reducer;
