import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckboxState {
  checkedItems: boolean[];
}

const initialState: CheckboxState = {
  checkedItems: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.checkedItems[index] = !state.checkedItems[index];
    },
  },
});

export const { toggle } = checkboxSlice.actions;
export default checkboxSlice.reducer;
