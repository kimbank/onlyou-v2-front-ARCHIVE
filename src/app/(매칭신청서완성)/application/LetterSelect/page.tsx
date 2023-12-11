"use client";

import { Checkbox } from "@/app/components/CheckBox/CheckBox";
import { StepNavButton } from "@/app/components/NavBars/StepNavButton";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import { toggle } from "@/store/checkboxSlice";
import { RootState } from "@/store/store";
import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LetterRoot from "./LetterSelectRoot";

const Index = () => {
  const dispatch = useDispatch();
  const checkedStates = useSelector(
    (state: RootState) => state.checkbox.checkedItems
  );

  const handleCheckboxClick = (index: number) => {
    dispatch(toggle(index));
  };
  // const [checkedStates, setCheckedStates] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  const checkboxNames = [
    "지금 어떤 일을 하고 있나요?",
    "인생의 목표가 있다면?",
    "내가 연인에게 해줄 수 있는 것은?",
    "주변인이 말하는 내 매력은?",
    "내 취미 생활은 ?",
  ];

  // const handleCheckboxClick = (index: any) => {
  //   const newCheckedStates = [...checkedStates];
  //   newCheckedStates[index] = !newCheckedStates[index];
  //   setCheckedStates(newCheckedStates);
  // };

  return (
    <LetterRoot>
      <Container className="letter-container">
        <Typography variant="h5" sx={{ color: "black", fontWeight: "bold" }}>
          편지 질문 선택하기
        </Typography>
        <Typography className="heading2" sx={{ color: "black" }}>
          질문을 고르고 선택한 질문에 답변하며 <br />
          편지를 완성해보아요!
        </Typography>
        <InfoText title="질문을 최소 3개 골라주세요" alertMessage="" />
        <Container className="letter-box">
          {checkedStates.map((isChecked, index) => (
            <Checkbox
              key={index}
              buttonName={checkboxNames[index]}
              onClick={() => handleCheckboxClick(index)}
              checked={isChecked}
              width={"100%"}
            />
          ))}
        </Container>
        <StepNavButton
          prevText="이전"
          nextText="다음"
          prevHref="LetterSelect/"
          nextHref="LetterWhite/"
          nextType="button"
        />
      </Container>
    </LetterRoot>
  );
};
export default Index;
