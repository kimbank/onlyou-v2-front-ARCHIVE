import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./checkboxSlice";

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
