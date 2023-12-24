import { createSlice } from "@reduxjs/toolkit";

export const path = createSlice({
  name: "path",
  initialState: {
    previousPath: "",
  },
  reducers: {
    setPreviousPath: (state, action) => {
      state.previousPath = action.payload;
    },
  },
});

export const { setPreviousPath } = path.actions;

export default path.reducer;
