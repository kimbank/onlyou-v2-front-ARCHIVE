import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckboxState {
  checkedItems: { name: string; checked: boolean }[];
}

const initialState: CheckboxState = {
  checkedItems: [
    { name: "지금 어떤 일을 하고 있나요?", checked: false },
    { name: "인생의 목표가 있다면?", checked: false },
    { name: "내가 연인에게 해줄 수 있는 것은?", checked: false },
    { name: "주변인이 말하는 내 매력은?", checked: false },
    { name: "내 취미 생활은?", checked: false },
    { name: "이런 연애를 지향해요", checked: false },
    { name: "잊지 못할 일생일대의 경험은?", checked: false },
    { name: "연인이 생기면 하고싶은 일은?", checked: false },
    { name: "내가 인생에서 가장 잘한 일은?", checked: false },
    { name: "자유편지", checked: false },
  ],
};

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const index = action.payload;
     state.checkedItems[index].checked = !state.checkedItems[index].checked;
    },
  },
});

export const { toggle } = checkboxSlice.actions;
export default checkboxSlice.reducer;
