"use client";

import { RDStepNavButton } from "@/components/Button/RDStepButton";
import { Checkbox } from "@/components/CheckBox/CheckBox";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { toggle } from "@/store/checkboxSlice";
import { RootState } from "@/store/store";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styled } from "@mui/material";

const Index = () => {
  const dispatch = useDispatch();
  const checkedStates = useSelector(
    (state: RootState) => state.checkbox.checkedItems
  );

  const handleCheckboxClick = (index: number) => {
    dispatch(toggle(index));
  };

  const checkboxNames = [
    "지금 어떤 일을 하고 있나요?",
    "인생의 목표가 있다면?",
    "내가 연인에게 해줄 수 있는 것은?",
    "주변인이 말하는 내 매력은?",
    "내 취미 생활은 ?",
    "이런 연애를 지향해요",
    "잊지 못할 일생일대의 경험은?",
    "연인이 생기면 하고싶은 일은?",
    "내가 인생에서 가장 잘한 일은?",
    "자유편지",
  ];
  const selectComplete = checkedStates.filter(Boolean).length >= 3;

  return (
    <LetterRoot>
        <Typography variant="h1">
          편지 질문 선택하기
        </Typography>
        <Typography variant="body1">
          질문을 고르고 선택한 질문에 답변하며 <br />
          편지를 완성해보아요!
        </Typography>
        <InfoText bgColor="primary">
          <InfoOutlinedIcon color="primary"/>
          <Typography variant="body2" className="caption">
            질문을 <strong>최소 3개 </strong>
            골라주세요
          </Typography>
        </InfoText>
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
        <RDStepNavButton
          prevText="이전"
          nextText="다음"
          prevHref="LetterSelect/"
          nextHref="LetterWhite/"
          nextType="button"
          checkedStates={selectComplete}
        />
    </LetterRoot>
  );
};
export default Index;



const LetterRoot = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    ".letter-box": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      padding: "0",
    },
  };
});
