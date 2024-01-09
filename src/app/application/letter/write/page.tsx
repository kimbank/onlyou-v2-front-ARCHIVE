"use client";

import { StepButton } from "@/components/Button/StepButton";
import { LetterModal } from "@/components/Modal/LetterModal";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { RootState } from "@/store/store";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import {
  Box,
  Button,
  Container,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const checkedStates = useSelector(
    (state: RootState) => state.checkbox.checkedItems
  );
  useEffect(() => console.log("pathname", pathname));
  //리덕스에서 불러온 checkedStates중 true만 반환
  const checkedItems = checkedStates
    .map((checkbox, index) =>
      checkbox.checked ? { index, name: checkbox.name } : null
    )
    .filter((item) => item !== null);

  //인풋박스 텍스트 갯수
  const [lettertexts, setLetterTexts] = useState<string[]>(
    checkedItems.map(() => "")
  );

  //조건 만족시 읽기 전용모드
  const [onlyRead, setOnlyRead] = useState<boolean[]>(
    checkedItems.map(() => false)
  );
  //텍스트 박스 글자 30자이하 유효성검사
  const [textVaild, setTextValid] = useState<boolean[]>(
    checkedItems.map(() => false)
  );

  // 텍스트박스 하단 저장하기 토글함수
  const toggleEditMode = (checkedIndex: number) => () => {
    if (lettertexts[checkedIndex].length >= 30) {
      const newReadOnlyStates = [...onlyRead];
      newReadOnlyStates[checkedIndex] = !newReadOnlyStates[checkedIndex];
      setOnlyRead(newReadOnlyStates);
      setTextValid((prev) =>
        prev.map((val, idx) => (idx === checkedIndex ? false : val))
      );
    } else {
      setTextValid((prev) =>
        prev.map((val, idx) => (idx === checkedIndex ? true : val))
      );
    }
  };

  const handleTextChange =
    (checkedIndex: number) =>
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newTextValues = [...lettertexts];
      newTextValues[checkedIndex] = event.target.value;
      setLetterTexts(newTextValues);
    };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  //true 반환시 다음페이지 활성화
  const isAllChecked = onlyRead.every((state) => state === true);

  return (
    <LetterRoot id="content">
      <Typography variant="h1">
        📝 <br />
        이제 편지를 작성해 볼까요?
      </Typography>
      <InfoText bgColor="primary">
        <ReportGmailerrorredIcon color="primary" />
        <Typography variant="body2" className="caption">
          편지를 정성스레 쓸 수록 성사율이 올라가요!
        </Typography>
      </InfoText>

      <Container className="letter-box">
        {checkedItems.map((item, index) => (
          <Box key={index}>
            <Typography className="letter-title" variant="subtitle2">
              {index + 1}.{item?.name}
            </Typography>
            <TextareaAutosize
              className="text-area"
              aria-label="textarea"
              minRows={3}
              placeholder="답변을 작성해주세요"
              style={{
                width: "100%",
                borderRadius: "10px",
                padding: "16px",
                height: "210px",
                minHeight: "140px",
                border: "1px solid " + (textVaild[index] ? "red" : "#B2B0AE"),
                color: onlyRead[index] ? "gray" : "black",
                resize: "none",
              }}
              onChange={handleTextChange(index)}
              readOnly={onlyRead[index]}
            />
            <Container className="letter-box-values">
              <Typography variant="caption">
                글자 수 /
                <Typography
                  variant="caption"
                  color={textVaild[index] ? "red" : "inherit"}
                >
                  {lettertexts[index].length}
                </Typography>
                자
              </Typography>

              {lettertexts[index].length > 0 ? (
                <>
                  <Button variant="contained" onClick={toggleEditMode(index)}>
                    <Typography color="white" variant="subtitle2">
                      {onlyRead[index] ? "수정하기" : "저장하기"}
                    </Typography>
                  </Button>
                </>
              ) : (
                <Button variant="contained" disabled>
                  <Typography variant="subtitle2">저장하기</Typography>
                </Button>
              )}
            </Container>
          </Box>
        ))}
      </Container>
      <StepButton
        prevText="이전"
        nextText="신청서 제출하기"
        prevHref="LetterSelect/"
        nextType="button"
        onClick={handleOpenModal}
        checkedStates={isAllChecked}
      />
      <LetterModal open={modalOpen} onClose={handleCloseModal} />
    </LetterRoot>
  );
};

export default Index;

const LetterRoot = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    ".letter-box": {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%",
      padding: "0",
      paddingBottom: "60px",
      ".letter-title": {
        paddingBottom: "6px",
      },
    },
    ".letter-box-values": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      padding: "0",
    },
  };
});
