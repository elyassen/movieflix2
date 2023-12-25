import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./MainSlice";
import bannerSlice from "./bannerReducer";
import searchSlice from "./searchSlice";

import moviedeSlice from "./moviedes";
import collectionSlice from "./collectionSlice";

const store = configureStore({
  reducer: {
    main: MainSlice,
    banner: bannerSlice,
    search: searchSlice,

    moviedes: moviedeSlice,
    collections: collectionSlice,
  },
});

export default store;
