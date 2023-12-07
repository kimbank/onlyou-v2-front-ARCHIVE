"use client";

import { MainMiniButton } from "@/app/components/Button/Button";
import { StepNavButton } from "@/app/components/NavBars/NavButton";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import { RootState } from "@/store/store";
import { Button, Container, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import LetterRoot from "./LetterWhiteRoot";

const Index = () => {
  const checkedStates = useSelector(
    (state: RootState) => state.checkbox.checkedItems
  );
  const [lettertexts, setLetterTexts] = useState<string[]>(
    checkedStates.map(() => "")
  );
  const [lettertext, setLetterText] = useState("");
  const checkboxNames = [
    "지금 어떤 일을 하고 있나요?",
    "인생의 목표가 있다면?",
    "내가 연인에게 해줄 수 있는 것은?",
    "주변인이 말하는 내 매력은?",
    "내 취미 생활은?",
  ];
  const handleTextChange =
    (index: number) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newTextValues = [...lettertexts];
      newTextValues[index] = event.target.value;
      setLetterTexts(newTextValues);
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
                      border: "1px solid #B2B0AE",
                      borderRadius: "10px",
                    }}
                    onChange={handleTextChange(index)}
                  />
                  <Container className="letter-box-values">
                    <Typography>
                      글자수 : {lettertexts[index].length}
                    </Typography>
                    <MainMiniButton buttonName="저장하기" />
                  </Container>
                </div>
              )
          )}
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
