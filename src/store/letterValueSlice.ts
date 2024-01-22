import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LetterStore {
  letterValue: string[];
  step: number;
}

const initialState: LetterStore = {
  letterValue: [],
  step: 0,
};

export const LetterValueSlice = createSlice({
  name: "letterValue",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      const index = state.letterValue.indexOf(key);
      if (index === -1) {
        state.letterValue.push(key);
      } else {
        state.letterValue.splice(index, 1);
      }
      state.step = state.letterValue.length >= 3 ? 1 : 0;
    },
    setLetterValues: (state, action: PayloadAction<string[]>) => {
      state.letterValue = action.payload;
      state.step = state.letterValue.length >= 3 ? 1 : 0;
    },
  },
});

export const { toggle, setLetterValues } = LetterValueSlice.actions;
export default LetterValueSlice.reducer;

export const SelectedItemCount = (state: RootState) =>
  Object.values(state.letterValue).filter(Boolean).length;

//스텝이라는 키값 0은 셀렉트 1은 write
//셀렉트 페이지는 스텝 0 write페이지는 스텝 1
//셀렉트 페이지에서는 3개이상 클릭시 조건 완성 -> 스텝1을 리덕스로 보내서 보관
//write 스텝을 받아와서 스텝 1인지 확인해서 아니면 스텝이 0이면 이전페이지로
