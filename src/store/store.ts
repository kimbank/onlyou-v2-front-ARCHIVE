import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./checkboxSlice";
import chipsStoreReducer from './chipsStore';

export const store = configureStore({
  reducer: {
    chips: chipsStoreReducer,
    checkbox: checkboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
