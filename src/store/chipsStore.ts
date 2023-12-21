

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChipStoreState {
  selectedTab: number; 
  selectedOptions1: string[];
  selectedOptions2: string[];
  selectedOptions3: string[];
}

const initialState: ChipStoreState = {
  selectedTab: 0,
  selectedOptions1: [],
  selectedOptions2: [],
  selectedOptions3: [],
};

const chipsStore = createSlice({
  name: 'chips',
  initialState,
  reducers: {
    toggleOption: (
      state,
      action: PayloadAction<{ selectedTab: number; value: string }>
    ) => {
      const { selectedTab, value } = action.payload;
      let selectedOptionsKey: keyof ChipStoreState;

      if (selectedTab === 0) {
        selectedOptionsKey = 'selectedOptions1';
      } else if (selectedTab === 1) {
        selectedOptionsKey = 'selectedOptions2';
      } else {
        selectedOptionsKey = 'selectedOptions3';
      }

      if (!state[selectedOptionsKey].includes(value)) {
        state[selectedOptionsKey].push(value);
      } else {
        state[selectedOptionsKey] = state[selectedOptionsKey].filter(
          (option) => option !== value
        );
      }
    },
  },
});


export const { toggleOption } = chipsStore.actions;
export default chipsStore.reducer;