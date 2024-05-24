import { configureStore } from "@reduxjs/toolkit";
import { PhotoSlice } from "../feature/photos/PhotoSlide";

export const store = configureStore({
  reducer: {
    Myphoto: PhotoSlice.reducer,
  },
});
