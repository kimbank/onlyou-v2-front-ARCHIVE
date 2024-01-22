"use client";

import { StepButton } from "@/components/Button/StepButton";
import { LetterModal } from "@/components/Modal/LetterModal";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { letterValue } from "@/constants/letter";
import useModal from "@/hooks/useModal";
import { RootState } from "@/store/store";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {
  Box,
  Button,
  Container,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLetterValues, toggle } from "@/store/letterValueSlice";
import { FullDivider } from "@/components/Dividers/FullDivider";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.letter.step);
  const letterValues = useSelector(
    (state: RootState) => state.letter.letterValue
  );
  const questions = letterValue.options;
  const { isModalOpen, openModal, closeModal } = useModal();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";

  const mockLetterValues = ["0", "3", "4"];
  const mockAnswers = [
    "현재 책을 읽고 있어요.",
    "친구들과의 즐거운 순간들이 매력적이라고 해요.",
    "주말마다 등산을 즐깁니다.",
  ];

  useEffect(() => {
    console.log("letterValues", letterValues);
    if (!isInit) {
      dispatch(setLetterValues(mockLetterValues));
      setLetterTexts(mockAnswers);
    } else if (isInit && step < 1) {
      alert("잘못된 접근입니다.");
      router.push("/application/letter/select?type=init");
    }
  }, [step, router, isInit, dispatch]);

  //인풋박스 텍스트 갯수
  const [lettertexts, setLetterTexts] = useState<string[]>(
    letterValues.map(() => "")
  );

  //조건 만족시 읽기 전용모드
  const [onlyRead, setOnlyRead] = useState<boolean[]>(
    letterValues.map(() => false)
  );
  //텍스트 박스 글자 30자이하 유효성검사
  const [textVaild, setTextValid] = useState<boolean[]>(
    letterValues.map(() => false)
  );
  const updateTextValid = (index: number, newText: string) => {
    const isValid = newText.length <= 30;
    setTextValid((prevTextValid) =>
      prevTextValid.map((item, idx) => (idx === index ? !isValid : item))
    );
  };

  // 텍스트박스 하단 저장하기 토글함수
  const toggleEditMode = (checkedIndex: number) => () => {
    updateTextValid(checkedIndex, lettertexts[checkedIndex]);

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

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newText = event.target.value;
    const newTextValues = [...lettertexts];
    newTextValues[index] = newText;
    setLetterTexts(newTextValues);

    if (newText.length > 30) {
      setTextValid((prev) =>
        prev.map((val, idx) => (idx === index ? false : val))
      );
    }
  };

  //true 반환시 다음페이지 활성화
  const isAllChecked = onlyRead.every((state) => state === true);

  const handleDelete = (index: number) => {
    setLetterTexts(lettertexts.map((text, idx) => (idx === index ? "" : text)));
  };
  const handleSelect = () => {
    mockLetterValues.forEach((value) => {
      dispatch(toggle(value));
    });

    // select/ 페이지로 이동
    router.push("select/");
  };
  return (
    <LetterRoot id="content">
      {isInit ? (
        <Typography variant="h1">
          📝 <br />
          이제 편지를 작성해 볼까요?
        </Typography>
      ) : (
        <Typography variant="h1">
          편지 수정하기
          <br />
          <Typography variant="body1">
            질문과 답변을 추가하거나 삭제할 수 있어요
          </Typography>
        </Typography>
      )}
      <InfoText bgColor="primary">
        <ReportGmailerrorredIcon color="primary" />
        {isInit ? (
          <Typography variant="body2" className="caption">
            편지를 정성스레 쓸 수록 성사율이 올라가요!
          </Typography>
        ) : (
          <Typography variant="body2">
            <strong>최소 3개</strong> 이상의 편지를 필수로 작성하셔야해요.
          </Typography>
        )}
      </InfoText>

      <Container className="letter-box">
        {isInit ? (
          <div></div>
        ) : (
          <Button
            sx={{ width: "100% !important" }}
            variant="outlined"
            color="primary"
            onClick={handleSelect}
          >
            <AddRoundedIcon
              sx={{ width: "18px", height: "18px", marginRight: "8px" }}
            />
            <Typography variant="subtitle2">질문 추가하기</Typography>
          </Button>
        )}
        {!isInit && <FullDivider />}
        {letterValues.map((key, index) => (
          <Box className="letter-write" key={index}>
            <Typography className="letter-title" variant="subtitle2">
              {index + 1}.{questions[key]}
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
              onChange={(e) => handleTextChange(e, index)}
              readOnly={onlyRead[index]}
              value={lettertexts[index] || ""}
            />
            <Box className="caption-box">
              <Typography variant="caption">
                글자 수 /&nbsp;
                <Typography
                  variant="caption"
                  color={textVaild[index] ? "red" : "inherit"}
                >
                  {lettertexts[index]?.length || 0}
                </Typography>
                자
              </Typography>
            </Box>
            <Container className="letter-box-values">
              {isInit ? (
                <div></div>
              ) : (
                <Button color="secondary" onClick={() => handleDelete(index)}>
                  삭제하기
                </Button>
              )}
              {lettertexts[index]?.length > 0 ? (
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
            {!isInit && (
              <Box sx={{ marginTop: "16px" }}>
                <FullDivider />
              </Box>
            )}
          </Box>
        ))}
      </Container>
      {isInit && (
        <StepButton
          prevText="이전"
          nextText="신청서 제출하기"
          prevHref="select/"
          nextType="button"
          onClick={openModal}
          checkedStates={isAllChecked}
        />
      )}

      <LetterModal open={isModalOpen} onClose={closeModal} />
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
    ".letter-write": {
      position: "relative",
      "& .caption-box": {
        position: "absolute",
        bottom: 76,
        marginLeft: "16px",
      },
    },
    ".letter-box-values": {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      padding: "0",
      gap: "16px",
    },
  };
});
