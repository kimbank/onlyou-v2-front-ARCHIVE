import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./home/modalSlice";

import targetingSlice from "./targetingSlice";
import LetterValueSlice from "./letterValueSlice";
import pathReducer from "./path";
import chipsStoreReducer from "./chipsStore";


export const store = configureStore({
  reducer: {
    // Home components
    modal: modalSlice,

    //
    targeting: targetingSlice,
    chips: chipsStoreReducer,
    letter: LetterValueSlice,
    path: pathReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
