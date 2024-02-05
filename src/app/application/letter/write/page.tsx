"use client";

import { theme } from "@/assets";
import { StepButton } from "@/components/Button/StepButton";
import { FullDivider } from "@/components/Dividers/FullDivider";
import { LetterModal } from "@/components/Modal/LetterModal";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { letterOptions } from "@/constants/letter";
import useModal from "@/hooks/useModal";
import { setLetterValues, updateLetterContent } from "@/store/letterValueSlice";
import { RootState } from "@/store/store";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import {
  Box,
  Button,
  Container,
  styled,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLetterList } from "@/api/hooks/useLetterList";
import { putLetter } from "@/api/putLetter";
import Loading from "@/components/loading";

const Index = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const dispatch = useDispatch();
  const { letterList, isLoading, isError, mutate } = useLetterList();
  const letterValues = useSelector(
    (state: RootState) => state.letter.letterValue
  );
  const step = useSelector((state: RootState) => state.letter.step);
  const [isPutLetterLoading, setIsPutLetterLoading] =
    React.useState<boolean>(false);

  const questions = letterOptions.options;
  const { isModalOpen, openModal, closeModal } = useModal();

  //인풋박스 텍스트 갯수
  const [lettertexts, setLetterTexts] = React.useState<string[]>(
    letterValues.map(() => "")
  );

  //조건 만족시 읽기 전용모드
  const [onlyRead, setOnlyRead] = React.useState<boolean[]>(
    letterValues.map(() => false)
  );
  //텍스트 박스 글자 30자이하 유효성검사
  const [textVaild, setTextValid] = React.useState<boolean[]>(
    letterValues.map(() => false)
  );
  const updateTextValid = (index: number, newText: string) => {
    const isValid = newText.length <= 30;
    setTextValid((prevTextValid) =>
      prevTextValid.map((item, idx) => (idx === index ? !isValid : item))
    );
  };

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newText = event.target.value;
    const newTextValues = [...lettertexts];
    newTextValues[index] = newText;
    setLetterTexts(newTextValues);
    dispatch(
      updateLetterContent({
        index: index,
        content: newText,
      })
    );

    if (newText.length > 30) {
      setTextValid((prev) =>
        prev.map((val, idx) => (idx === index ? false : val))
      );
    }
  };

  const isCompleteFillData = letterValues
    .filter((letter) => letter.status > 0)
    .every((letter) => letter.content?.length >= 30);
  const handleSelect = () => {
    router.push("select/");
  };

  const handleNext = async () => {
    setIsPutLetterLoading(true);
    const letterListData = letterValues.filter((letter) => letter.status > 0);
    const res = await putLetter(letterListData);

    if (res.status >= 200 && res.status < 300) {
      setIsPutLetterLoading(false);
      mutate();
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      setIsPutLetterLoading(false);
      return;
    }

    if (isInit) {
      openModal();
    }
  };

  // 텍스트박스 하단 저장하기 토글함수
  const toggleEditMode = (checkedIndex: any) => () => {
    updateTextValid(checkedIndex, lettertexts[checkedIndex]);

    if (lettertexts[checkedIndex].length >= 30) {
      const newReadOnlyStates = [...onlyRead];
      newReadOnlyStates[checkedIndex] = !newReadOnlyStates[checkedIndex];
      setOnlyRead(newReadOnlyStates);
      setTextValid((prev) =>
        prev.map((val, idx) => (idx === checkedIndex ? false : val))
      );

      if (newReadOnlyStates[checkedIndex]) {
        handlePutLetter(checkedIndex);
      }
    } else {
      setTextValid((prev) =>
        prev.map((val, idx) => (idx === checkedIndex ? true : val))
      );
    }
  };
  const handlePutLetter = async (index: any) => {
    setIsPutLetterLoading(true);

    const updatedLetter = { ...letterValues[index], status: 1 };

    const existingLetters = letterValues.filter(
      (letter) =>
        letter.status === 1 && letter.index !== index && letter.content
    );

    const lettersToUpdate = [updatedLetter, ...existingLetters];
    const res = await putLetter(lettersToUpdate);
    if (res.status >= 200 && res.status < 300) {
      mutate();
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
    }

    setIsPutLetterLoading(false);
  };

  const handleDelete = async (index: number) => {
    setIsPutLetterLoading(true);

    const deleteLetter = { ...letterValues[index], status: 0 };

    const remainingLetters = letterValues.filter(
      (letter) => letter.status === 1 && letter.index !== index
    );

    const lettersToUpdate = [deleteLetter, ...remainingLetters];

    try {
      const res = await putLetter(lettersToUpdate);
      if (res.status >= 200 && res.status < 300) {
        dispatch(
          setLetterValues({
            index: index,
            status: 0,
            content: deleteLetter.content,
          })
        );
        mutate();
      } else {
        // 실패 시 알림
        alert("업데이트에 실패했습니다. 관리자에게 문의해주세요.");
      }
    } catch (error) {
      console.error("Error updating letter:", error);
      alert("오류가 발생했습니다. 관리자에게 문의해주세요.");
    } finally {
      setIsPutLetterLoading(false);
    }
  };

  React.useEffect(() => {
    if (isLoading || isError) return;

    letterList.map((letter: any) => {
      if (
        letter?.index === undefined ||
        letter?.status === undefined ||
        letter?.content === undefined
      ) {
        return false;
      }

      if (letter?.status > 0) {
        dispatch(
          setLetterValues({
            index: letter?.index,
            status: letter?.status,
            content: letter?.content,
          })
        );
      }
    });

    if (isInit && step < 1) {
      alert("잘못된 접근입니다.");
      router.push("/application/letter/select?type=init");
    }
  }, [step, router, isInit, dispatch, isLoading, isError]);
  return (
    <>
      {isPutLetterLoading && <Loading />}
      <LetterRoot id="content">
        {isInit ? (
          <Box className="title">
            <Typography variant="h1">📝</Typography>
            <Typography variant="h1">이제 편지를 작성해 볼까요?</Typography>
          </Box>
        ) : (
          <Box className="title">
            <Typography variant="h1">편지 수정하기</Typography>
            <Typography variant="body1">
              질문과 답변을 추가하거나 삭제할 수 있어요
            </Typography>
          </Box>
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
          {letterValues.map(
            (letter, index) =>
              letter.status > 0 && (
                <Box className="letter-write" key={index}>
                  <Typography className="letter-title" variant="subtitle2">
                    {questions[letter.index]}
                  </Typography>
                  <Box className="textarea-container">
                    <TextareaAutosize
                      className="text-area"
                      aria-label="textarea"
                      minRows={3}
                      placeholder="질문에 대한 답변을 30자 이상 입력해주세요"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        padding: "16px",
                        height: "210px",
                        minHeight: "140px",
                        border:
                          "1px solid " + (textVaild[index] ? "red" : "#B2B0AE"),
                        color: onlyRead[index] ? "gray" : "black",
                        resize: "none",
                        ...theme.typography.body1,
                      }}
                      onChange={(e) => handleTextChange(e, index)}
                      readOnly={onlyRead[index]}
                      value={letterValues[index].content || ""}
                    />
                    <Box className="caption-box">
                      <Typography variant="caption">
                        글자 수 /&nbsp;
                        <Typography
                          variant="caption"
                          color={textVaild[index] ? "red" : "inherit"}
                        >
                          {letterValues[index].content?.length || 0}
                        </Typography>
                        자
                      </Typography>
                    </Box>
                  </Box>
                  <Container className="letter-box-values">
                    {isInit ? (
                      <div></div>
                    ) : (
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(index)}
                      >
                        삭제하기
                      </Button>
                    )}
                    {lettertexts[index]?.length > 0 ? (
                      <>
                        <Button
                          variant="contained"
                          onClick={toggleEditMode(index)}
                        >
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
              )
          )}
        </Container>
        {isInit && (
          <StepButton
            prevText="이전"
            nextText="신청서 제출하기"
            prevHref="select/"
            nextType="button"
            onClick={handleNext}
            checkedStates={isCompleteFillData}
          />
        )}

        <LetterModal open={isModalOpen} onClose={closeModal} />
      </LetterRoot>
    </>
  );
};

export default Index;

const LetterRoot = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    ".title h1:first-of-type": {
      marginBottom: "8px",
    },
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
    ".textarea-container": {
      position: "relative",
      "& .caption-box": {
        position: "absolute",
        bottom: 20,
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
