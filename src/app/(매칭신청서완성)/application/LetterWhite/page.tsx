"use client";

import { Checkbox } from "@/app/components/CheckBox/CheckBox";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import { useSelector } from "react-redux";
import { Container, Input, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";
import LetterRoot from "./LetterWhiteRoot";
import { RootState } from "@/store/store";
import { MainButton, SubButton } from "@/app/components/Button/Button";
import Link from "next/link";

const Index = () => {
  const checkedStates = useSelector(
    (state: RootState) => state.checkbox.checkedItems
  );

  const checkboxNames = [
    "지금 어떤 일을 하고 있나요?",
    "인생의 목표가 있다면?",
    "내가 연인에게 해줄 수 있는 것은?",
    "주변인이 말하는 내 매력은?",
    "내 취미 생활은?",
  ];

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

        <Container className="letter-box">
          {checkedStates.map(
            (isChecked, index) =>
              isChecked && (
                <div key={index}>
                  <Typography sx={{ color: "black" }}>
                    {checkboxNames[index]}
                  </Typography>
                  <TextareaAutosize
                    aria-label="textarea"
                    minRows={3}
                    placeholder="답변을 작성해주세요"
                    style={{
                      width: "100%",
                      border: "1px solid black",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )
          )}
          <Link href={`LetterWhite/`}>
            <MainButton buttonName="다음 단계" />
          </Link>
          <Link href={`LetterSelect`}>
            <SubButton buttonName="이전 단계" />
          </Link>
        </Container>
      </Container>
    </LetterRoot>
  );
};
export default Index;
