import { configureStore } from "@reduxjs/toolkit";
import { PhotoSlice } from "../feature/photos/PhotoSlide";
import { FavoriteSlice } from "../feature/favorite/FavoriteSlice";

export const store = configureStore({
  reducer: {
    Myphoto: PhotoSlice.reducer,
    favorite: FavoriteSlice.reducer,
  },
});
