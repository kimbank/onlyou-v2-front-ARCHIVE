"use client";

import { StepButton } from "@/components/Button/StepButton";
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

  const selectComplete = checkedStates.filter(Boolean).length >= 3;

  return (
    <LetterRoot id="content">
      <Typography variant="h1">편지 질문 선택하기</Typography>
      <Typography variant="body1">
        질문을 고르고 선택한 질문에 답변하며 <br />
        편지를 완성해보아요!
      </Typography>
      <InfoText bgColor="primary">
        <InfoOutlinedIcon color="primary" />
        <Typography variant="body2" className="caption">
          질문을 <strong>최소 3개 </strong>
          골라주세요.
        </Typography>
      </InfoText>
      <Container className="letter-box">
        {checkedStates.map((checkbox, index) => (
          <Checkbox
            key={index}
            buttonName={checkbox.name}
            onClick={() => handleCheckboxClick(index)}
            checked={checkbox.checked}
          />
        ))}
      </Container>
      <StepButton
        prevText="이전"
        nextText="다음"
        prevHref="LetterSelect/"
        nextHref="write/"
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
    "& > :nth-child(1)": {
      marginBottom: "8px",
    },
    "& > :nth-child(2)": {
      marginBottom: "16px",
    },
    ".letter-box": {
      marginTop: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      padding: "0",
    },
  };
});
