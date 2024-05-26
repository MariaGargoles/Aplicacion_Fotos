import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
  name: "search",
  initialState: {
    status: "idle",
    data: [{ placeholderValue: "" }],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetImagesThunk.pending, (state) => {
        state.status = "pending";
        state.error = false;
      })
      .addCase(GetImagesThunk.rejected, (state) => {
        state.status = "rejected";
        state.error = true;
      })
      .addCase(GetImagesThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = false;
        state.data = action.payload;
      });
  },
});
