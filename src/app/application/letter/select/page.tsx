"use client";

import { StepButton } from "@/components/Button/StepButton";
import { Checkbox } from "@/components/CheckBox/CheckBox";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { toggle } from "@/store/letterValueSlice";
import { RootState } from "@/store/store";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { styled } from "@mui/material";
import { letterValue } from "@/constants/letter";
import { useEffect, useState } from "react";

const MockupLetter = {
  "0": "0번 편지입니다.",
  "5": "5번 편지입니다.",
  "9": "9번 편지입니다.",
};

const Index = () => {
  const dispatch = useDispatch();

  const letterValues = useSelector(
    (state: RootState) => state.letter.letterValue
  );

  const letterOptions = Object.entries(letterValue.options);
  const [disabledLetters, setDisabledLetters] = useState<
    Record<string, boolean>
  >({});

  const [letter, setLetter] = useState({});

  useEffect(() => {
    const res = MockupLetter;
    const newDisabledLetters = { ...disabledLetters };

    Object.keys(res).forEach((item) => {
      dispatch(toggle(item));
      newDisabledLetters[item] = true;
    });

    setDisabledLetters(newDisabledLetters);
  }, []);

  // 수정하기기능 구현 첫 렌더링 시 (MockupLetter --> 서버에서 입력되어있는 값을 렌더링해서
  // select에 체크가 되어있어야됨  )

  const handleCheckboxClick = (key: string) => {
    if (!disabledLetters[key]) {
      dispatch(toggle(key));
    }
  };
  const selectComplete =
    Object.values(letterValues).filter(Boolean).length >= 3;

  return (
    <LetterRoot id="content">
      <Typography variant="h1">편지 질문 선택하기</Typography>
      <Typography variant="body1">
        질문을 고르고 선택한 질문에 답변하며 <br />
        편지를 완성해보아요!
      </Typography>
      <InfoText bgColor="primary">
        <ReportGmailerrorredIcon color="primary" />
        <Typography variant="body2" className="caption">
          질문을 <strong>최소 3개 </strong>
          골라주세요.
        </Typography>
      </InfoText>
      <Container className="letter-box">
        {letterOptions.map(([key, name]) => (
          <Checkbox
            key={key}
            buttonName={name}
            onClick={() => handleCheckboxClick(key)}
            checked={letterValues.includes(key)}
            disabled={disabledLetters[key]}
          />
        ))}
      </Container>
      <StepButton
        prevText="이전"
        nextText="다음"
        prevHref="/application/targeting/details"
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
