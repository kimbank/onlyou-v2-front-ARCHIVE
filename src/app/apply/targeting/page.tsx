"use client"

import Link from "next/link";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import ProgressHeader from "@/components/Header/ProgressHeader";
import { Box, Typography, Button } from "@mui/material";
import TargetingRoot from "./TargetingRoot";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import BottomButtonContainer from "@/components/BottomButton/BottomButtonRoot";

import { useSelector, useDispatch } from 'react-redux';
// import { setTargetingField } from "@/store/targetingSlice";


import useModal from "@/hooks/useModal";
import OptionModal from "./OptionModal";

import OptionCard from "./OptionCard";
import { StepButton } from "@/components/Button/StepButton";
import { useEffect } from "react";


const TargetingPage = () => {
  const { isModalOpen: isOptionOpen, openModal: openOptionModal, closeModal: closeOptionModal } = useModal();

  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  console.log(targetingState);

  const isTargetingEmpty = Object.keys(targetingState).every((field: string) => {
    return targetingState[field].priority === null;
  });

  useEffect(()=>{
    console.log("isTargetingEmpty", isTargetingEmpty);
  })

  return (
    <>
      <OptionModal open={isOptionOpen} onClose={closeOptionModal} />
      <TargetingRoot id="content">
        <Box className="title-box">
          <Typography variant="h1">매칭에 반영될 조건을 선택해요!</Typography>
          <Typography variant="body1">
            우선순위에 따라 최대 10개 조건을 선택할 수 있어요.
          </Typography>
        </Box>
        <Box className="content-box">
          <Box className="subtitle-box">
            <Typography variant="subtitle1">기본 반영 조건</Typography>
            <Typography variant="body2">
              선택하지 않아도 기본으로 반영되는 조건이에요.
            </Typography>
          </Box>
          <Box>
            <InfoText>
              <Box className="check-icon">
                <SquareRoundedIcon className="box" />
                <CheckRoundedIcon className="check" />
              </Box>
              <Typography color="primary" variant="subtitle2">
                나이 | 거주지 | 관심사 | 성격적 매력 | 외적 매력
              </Typography>
            </InfoText>
          </Box>
        </Box>
        <Box className="content-box">
          {isTargetingEmpty ? (
            <>
              <Box className="subtitle-box">
                <Typography variant="subtitle1">
                  1~3순위 조건 선택하기
                </Typography>
                <Typography variant="body2">
                  우선순위가 높을 수록 반영될 확률이 높아져요.
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{ minHeight: "34px", maxHeight: "34px" }}
                onClick={openOptionModal}
              >
                이상형 조건 추가하기 +
              </Button>
            </>
          ) : (
            <>
              <Box className="subtitle-box">
                <Typography variant="subtitle1">
                  1~3순위 조건 선택하기
                </Typography>
                <Typography variant="body2">
                  꼭 반영되었으면 하는 이상형 조건을 선택해 주세요.
                </Typography>
              </Box>
              <OptionCard />
              <Button
                variant="outlined"
                sx={{ minHeight: "34px", maxHeight: "34px" }}
                onClick={openOptionModal}
              >
                이상형 조건 변경하기
              </Button>
            </>
          )}
        </Box>
      </TargetingRoot>
      <StepButton
        prevText="이전"
        nextText="다음"
        prevHref="/apply/me/other"
        nextHref="/apply/targeting/details"
        nextType="button"
      />
    </>
  );
}

export default TargetingPage;
