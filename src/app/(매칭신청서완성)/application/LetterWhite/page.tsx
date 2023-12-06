"use client";

import { Checkbox } from "@/app/components/CheckBox/CheckBox";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";

import { Container, Input, Typography } from "@mui/material";
import { useState } from "react";
import LetterRoot from "./LetterWhiteRoot";

const Index = () => {
  const [checkedStates, setCheckedStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const checkboxNames = [
    "지금 어떤 일을 하고 있나요?",
    "인생의 목표가 있다면?",
    "내가 연인에게 해줄 수 있는 것은?",
    "주변인이 말하는 내 매력은?",
    "내 취미 생활은 ?",
  ];

  const handleCheckboxClick = (index: any) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  return (
    <LetterRoot>
      <Container className="letter-container">
        <Typography variant="h5" sx={{ color: "black", fontWeight: "bold" }}>
          📝 <br />
          이제 편지를 작성해 볼까요?
        </Typography>
        <InfoText
          title="편지를 정성스레 쓸 수록 성사율이 올라가요!"
          alertMessage=""
        />
        <Input />
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
      </Container>
    </LetterRoot>
  );
};
export default Index;
