"use client";

import { PrimaryButton, SecondaryButton } from "@/app/components/Button/Button";
import Modal from "@/app/components/Modal/Modal";
import { StepNavButton } from "@/app/components/Button/StepNavButton";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import { RootState } from "@/store/store";
import { Container, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import LetterRoot from "./LetterWhiteRoot";
import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import RDButton from "@/app/components/RDButton/RDButton";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
    "내 취미 생활은 ?",
    "이런 연애를 지향해요",
    "잊지 못할 일생일대의 경험은?",
    "연인이 생기면 하고싶은 일은?",
    "내가 인생에서 가장 잘한 일은?",
    "자유편지",
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
        <Typography variant="h3">
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
                  <Typography variant="body3" sx={{ fontWeight: "bold" }}>
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
                      padding: "16px",
                      height: "160px",
                      minHeight: "140px",
                    }}
                    onChange={handleTextChange(index)}
                    readOnly={readOnlyStates[index]}
                  />
                  <Container className="letter-box-values">
                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          lettertexts[index].length > 0 ? "primary" : "primary",
                      }}
                    >
                      글자 수 /{lettertexts[index].length}자
                    </Typography>

                    {lettertexts[index].length > 0 ? (
                      <>
                        <RDButton
                          variant="contained"
                          size="small"
                          color="primary"
                          onClick={toggleEditMode(index)}
                        >
                          {readOnlyStates[index] ? "수정하기" : "저장하기"}
                        </RDButton>
                      </>
                    ) : (
                      <RDButton
                        variant="contained"
                        size="small"
                        disabled={true}
                      >
                        저장하기
                      </RDButton>
                    )}
                  </Container>
                </div>
              )
          )}
        </Container>
        <RDStepNavButton
          prevText="이전"
          nextText="신청서 제출하기"
          prevHref="LetterSelect/"
          nextType="button"
          onClick={handleOpenModal}
          checkedStates={checkedStates}
        />
      </Container>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Typography sx={{ fontWeight: "bold" }}>매칭 신청서 완성</Typography>
        <Typography>
          정말 제출 하시겠어요?
          <br />
          매칭신청서는 내정보 탭에서 언제든 수정할 수 있어요.
        </Typography>
        <SecondaryButton buttonName={"다시작성하기"} />
        <PrimaryButton buttonName={"제출하기"} />
      </Modal>
    </LetterRoot>
  );
};
export default Index;
