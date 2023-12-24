import { configureStore } from "@reduxjs/toolkit";
import targetingSlice from "./targetingSlice";
import checkboxReducer from "./checkboxSlice";
import pathReducer from "./path";
import chipsStoreReducer from './chipsStore';

export const store = configureStore({
  reducer: {
    targeting: targetingSlice,
    chips: chipsStoreReducer,
    checkbox: checkboxReducer,
    path: pathReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
