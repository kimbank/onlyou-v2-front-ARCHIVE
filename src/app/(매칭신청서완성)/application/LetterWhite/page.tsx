"use client";

import { RDStepNavButton } from "@/components/Button/RDStepButton";
import { LetterModal } from "@/components/Modal/LetterModal";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import RDButton from "@/components/RDButton/RDButton";
import { RootState } from "@/store/store";
import { Container, TextareaAutosize, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LetterRoot from "./LetterWhiteRoot";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const checkedStates = useSelector(
      (state: RootState) => state.checkbox.checkedItems
    );
  const checkedItems = checkedStates
    .map((checkbox, index) =>
      checkbox.checked ? { index, name: checkbox.name } : null
    )
    .filter((item) => item !== null);
  const [lettertexts, setLetterTexts] = useState<string[]>(
      checkedItems.map(() => "")
    );
  const [readOnlyStates, setReadOnlyStates] = useState<boolean[]>(
      checkedItems.map(() => false)
    );

const toggleEditMode = (checkedIndex: number) => () => {
  if (lettertexts[checkedIndex].length > 0) {
    const newReadOnlyStates = [...readOnlyStates];
    newReadOnlyStates[checkedIndex] = !newReadOnlyStates[checkedIndex];
    setReadOnlyStates(newReadOnlyStates);
  }
};
const handleTextChange =
  (checkedIndex: number) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextValues = [...lettertexts];
    newTextValues[checkedIndex] = event.target.value;
    setLetterTexts(newTextValues);
  };
  const isAllChecked = readOnlyStates.every((state) => state === true);

    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

  return (
    <LetterRoot>
      <Container className="letter-container">
        <Typography variant="h1">
          📝 <br />
          이제 편지를 작성해 볼까요?
        </Typography>
        <InfoText bgColor="primary">
          <InfoOutlinedIcon color="primary" />
          <Typography variant="body2" className="caption">
            편지를 정성스레 쓸 수록 성사율이 올라가요!
          </Typography>
        </InfoText>

        <Container className="letter-box">
          {checkedItems.map((item, index) => (
            <div key={index}>
              <Typography variant="subtitle2">
                {index+1}.{item?.name}
              </Typography>
              <TextareaAutosize
                aria-label="textarea"
                minRows={3}
                placeholder="답변을 작성해주세요"
                style={{
                  width: "100%",
                  border: "1px solid #B2B0AE",
                  borderRadius: "10px",
                  color: readOnlyStates[index] ? "gray" : "black",
                  padding: "16px",
                  height: "210px",
                  minHeight: "140px",
                }}
                onChange={handleTextChange(index)}
                readOnly={readOnlyStates[index]}
              />
              <Container className="letter-box-values">
                <Typography variant="caption">
                  글자 수 /
                  <Typography
                    variant="caption"
                    color={
                      lettertexts[index].length > 30 ? "primary" : "inherit"
                    }
                  >
                    {lettertexts[index].length}
                  </Typography>
                  자
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
                  <RDButton variant="contained" size="small" disabled={true}>
                    저장하기
                  </RDButton>
                )}
              </Container>
            </div>
          ))}
        </Container>
        <RDStepNavButton
          prevText="이전"
          nextText="신청서 제출하기"
          prevHref="LetterSelect/"
          nextType="button"
          onClick={handleOpenModal}
          checkedStates={isAllChecked}
        />
      </Container>
      <LetterModal open={modalOpen} onClose={handleCloseModal} />
    </LetterRoot>
  );
};
export default Index;
