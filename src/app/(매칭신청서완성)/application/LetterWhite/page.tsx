"use client";

import {
  MainMiniButton,
  PrimaryButton,
  SecondaryButton,
} from "@/app/components/Button/Button";
import { StepNavButton } from "@/app/components/NavBars/NavButton";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import { RootState } from "@/store/store";
import { Container, TextareaAutosize, Typography } from "@mui/material";
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
  const checkboxNames = [
    "지금 어떤 일을 하고 있나요?",
    "인생의 목표가 있다면?",
    "내가 연인에게 해줄 수 있는 것은?",
    "주변인이 말하는 내 매력은?",
    "내 취미 생활은?",
  ];
  const [readOnlyStates, setReadOnlyStates] = useState<boolean[]>(
    new Array(checkedStates.length).fill(false)
  );
  const toggleEditMode = (index: number) => () => {
    if (lettertexts[index].length > 0) {
      const newReadOnlyStates = [...readOnlyStates];
      newReadOnlyStates[index] = !newReadOnlyStates[index];
      setReadOnlyStates(newReadOnlyStates);
    }
  };

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
                      color: readOnlyStates[index] ? "grey" : "black",
                    }}
                    onChange={handleTextChange(index)}
                    readOnly={readOnlyStates[index]}
                  />
                  <Container className="letter-box-values">
                    <Typography>
                      글자수 : {lettertexts[index].length}
                    </Typography>

                    {lettertexts[index].length > 0 ? (
                      <PrimaryButton
                        buttonName={
                          readOnlyStates[index] ? "수정하기" : "저장하기"
                        }
                        onClick={toggleEditMode(index)}
                      />
                    ) : (
                      <SecondaryButton
                        buttonName="저장하기"
                        onClick={() => console.log("클릭")}
                      />
                    )}
                  </Container>
                </div>
              )
          )}
        </Container>
        <StepNavButton
          prevText="이전"
          nextText="신청서 제출하기"
          prevHref="LetterSelect/"
          nextHref="LetterWhite/"
          nextType="submit"
        />
      </Container>
    </LetterRoot>
  );
};
export default Index;
