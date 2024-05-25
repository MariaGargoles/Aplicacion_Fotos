import { createSlice } from "@reduxjs/toolkit";

export const PhotoSlice = createSlice({
  name: "Myphoto",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {
    addFavoritesPhoto: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.data));
    },
    removeFavoritesPhoto: (state, action) => {
      state.data = state.data.filter((image) => image.id !== action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.data));
    },
    modifyPhotoDescription: (state, action) => {
      state.data = state.data.map((image) => {
        if (image.id === action.payload.id) {
          image.description = action.payload.description;
        }
        return image;
      });
      localStorage.setItem("favorites", JSON.stringify(state.data));
    },
  },
});

export const {
  addFavoritesPhoto,
  removeFavoritesPhoto,
  modifyPhotoDescription,
} = PhotoSlice.actions;

export default PhotoSlice.reducer;
