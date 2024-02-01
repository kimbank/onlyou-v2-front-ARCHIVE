import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LetterStore {
  index: number;
  status: number;
  content: string;
}

interface LetterListStore {
  letterValue: LetterStore[];
  step: number;
}

const initialState: LetterListStore = {
  letterValue: [
    { index: 0, status: 0, content: "" },
    { index: 1, status: 0, content: "" },
    { index: 2, status: 0, content: "" },
    { index: 3, status: 0, content: "" },
    { index: 4, status: 0, content: "" },
    { index: 5, status: 0, content: "" },
    { index: 6, status: 0, content: "" },
    { index: 7, status: 0, content: "" },
    { index: 8, status: 0, content: "" },
    { index: 9, status: 0, content: "" },
  ] as LetterStore[],
  step: 0 as number,
};

export const LetterValueSlice = createSlice({
  name: "letterValue",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const curStatus = state.letterValue[index].status;
      state.letterValue[index].status = curStatus === 0 ? 1 : 0;

      state.step = state.letterValue.length >= 3 ? 1 : 0;
    },

    setLetterValues: (state, action: PayloadAction<LetterStore>) => {
      const index = action.payload.index;
      const status = action.payload.status;
      const content = action.payload.content;
      state.letterValue[index].content = content;
      state.letterValue[index].status = status;

      state.step = state.letterValue.length >= 3 ? 1 : 0;
    },

    updateLetterContent: (
      state,
      action: PayloadAction<{ index: number; content: string }>
    ) => {
      const index = action.payload.index;
      const content = action.payload.content;
      state.letterValue[index].content = content;
    },
  },
});

export const { toggle, setLetterValues, updateLetterContent } =
  LetterValueSlice.actions;
export default LetterValueSlice.reducer;

export const SelectedItemCount = (state: RootState) =>
  Object.values(state.letterValue).filter(Boolean).length;

//스텝이라는 키값 0은 셀렉트 1은 write
//셀렉트 페이지는 스텝 0 write페이지는 스텝 1
//셀렉트 페이지에서는 3개이상 클릭시 조건 완성 -> 스텝1을 리덕스로 보내서 보관
//write 스텝을 받아와서 스텝 1인지 확인해서 아니면 스텝이 0이면 이전페이지로
