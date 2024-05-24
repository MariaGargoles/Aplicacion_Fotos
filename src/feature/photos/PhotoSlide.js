import { createSlice } from "@reduxjs/toolkit";

export const PhotoSlice = createSlice({
  name: "Myphoto",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {
    addPhoto: (state, action) => {
      state.data.push(action.payload);
    },
    removePhoto: (state, action) => {
      state.data = state.data.filter((image) => image.id !== action.payload.id);
    },
  },
});

export const { addPhoto, removePhoto } = PhotoSlice.actions;
