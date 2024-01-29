"use client";

import React from "react";
import { Box, Chip, Container, Typography } from "@mui/material";
import { StepButton } from "@/components/Button/StepButton";
import { Checkbox } from "@/components/CheckBox/CheckBox";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { styled } from "@mui/material";
import { letterOptions } from "@/constants/letter";
import { useRouter, useSearchParams } from "next/navigation";
import BottomButton from "../../me/BottomButton";

import { useDispatch, useSelector } from "react-redux";
import { toggle, setLetterValues } from "@/store/letterValueSlice";
import { useLetterList } from "@/api/hooks/useLetterList";
import Loading from "@/components/loading";


const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const { letterList, isLoading, isError } = useLetterList();
  const letterValues = useSelector(
    (state: RootState) => state.letter.letterValue
  );
  const questions = Object.entries(letterOptions.options);
  const [disabledLetters, setDisabledLetters] = React.useState<
    Record<string, boolean>
  >({});
  
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
        )
      }
    });
  }, [isLoading, isError]);

  const handleCheckboxClick = (key: number) => {
    dispatch(toggle(key));
  }

  async function handleNext() {
    if (isInit) {
      router.push("write?type=init");
    }
  }
  async function handleSave() {
    if (!isInit) {
      router.push("write");
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/application/targeting/details?type=init");
    }
  }

  return (
    <>
      {(isLoading) && <Loading />}
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
          {questions.map(([key, value], index) => (
            <Checkbox
              key={index}
              buttonName={value}
              onClick={() => handleCheckboxClick(Number(key))}
              checked={letterValues[Number(key)].status > 0}
              disabled={disabledLetters[key]}
            />
          ))}
        </Container>
      </LetterRoot>
      <BottomButton
        onNext={isInit ? handleNext : handleSave}
        onPrev={handlePrev}
        nextText={isInit ? "다음" : "저장하기"}
        // isNextDisabled={!isCompleteFillData}
        isPrevDisabled={!isInit}
      />
    </>
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
