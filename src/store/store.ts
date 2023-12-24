import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./checkboxSlice";
import pathReducer from "./path";
import chipsStoreReducer from './chipsStore';

export const store = configureStore({
  reducer: {
    chips: chipsStoreReducer,
    checkbox: checkboxReducer,
    path: pathReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
