import { configureStore } from "@reduxjs/toolkit";
import targetingSlice from "./targetingSlice";
import LetterValueSlice from "./letterValueSlice";
import pathReducer from "./path";
import chipsStoreReducer from "./chipsStore";

export const store = configureStore({
  reducer: {
    targeting: targetingSlice,
    chips: chipsStoreReducer,
    letter: LetterValueSlice,
    path: pathReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
