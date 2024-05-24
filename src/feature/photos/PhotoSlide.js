import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "photo",
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
      return state.filter((character) => character.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetTaskListThunk.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(GetTaskListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(GetTaskListThunk.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});
