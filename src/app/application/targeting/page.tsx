"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { InfoText } from "@/components/Notification/InfoText/InfoText";
import { Box, Typography, Button } from "@mui/material";
import TargetingRoot from "./TargetingRoot";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";

import { useSelector, useDispatch } from "react-redux";
import {
  setStep,
  setTargetingPriority,
  setTargetingDataField,
  setTargetingRangeField,
} from "@/store/targetingSlice";

import useModal from "@/hooks/useModal";
import OptionModal from "./OptionModal";

import OptionCard from "./OptionCard";
import { StepButton } from "@/components/Button/StepButton";

import useTargeting from "@/api/hooks/useTargeting";
import Loading from "@/components/loading";

import BottomNextButton from "@/components/BottomButton/Next";


const TargetingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const {
    isModalOpen: isOptionOpen,
    openModal: openOptionModal,
    closeModal: closeOptionModal,
  } = useModal();

  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);
  const { targetingData, isLoading } = useTargeting();

  React.useEffect(() => {
    if (isLoading) return;

    if (typeof targetingData?.fillStatus === "number") {
      const dataKeys = Object.keys(targetingData);
      // console.log("targetingData", targetingData);
      for (const key of Object.keys(targetingState)) {
        const value = targetingData[key];
        if (dataKeys.includes(key)) {
          if (key === "birthYear" || key === "height" || key === "salary") {
            dispatch(
              setTargetingRangeField({
                field: key,
                from: value?.from,
                to: value?.to,
              })
            );
          }
          dispatch(setTargetingDataField({ field: key, data: value?.data }));
          if (value?.priority >= 1 && value?.priority <= 3) {
            dispatch(
              setTargetingPriority({ field: key, priority: value?.priority })
            );
          }
        }
      }
    }
  }, [isLoading]);

  const isTargetingEmpty = Object.keys(targetingState).every(
    (field: string) => {
      const targetingField = targetingState[field];
      if (targetingField.priority === null || targetingField.priority === 0) {
        return true;
      }
    }
  );

  return (
    <>
      {isLoading && <Loading />}
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
                <Typography variant="subtitle2">
                  이상형 조건 추가하기
                  <span style={{ fontSize: "18px", marginLeft: "8px" }}>+</span>
                </Typography>
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
                <Typography variant="subtitle2">
                  이상형 조건 변경하기
                </Typography>
              </Button>
            </>
          )}
        </Box>
      </TargetingRoot>
      <BottomNextButton>
        <Button
          size="large"
          variant="outlined"
          onClick={() => router.push("/application/me/etc?type=init")}
        >
          이전
        </Button>
        <Button
          size="large"
          disabled={isTargetingEmpty}
          onClick={() => {
              dispatch(setStep(1));
              router.push("/application/targeting/details?type=init");
            }
          }
        >
          다음
        </Button>
      </BottomNextButton>
      {/* <StepButton
        prevText="이전"
        nextText="다음"
        prevHref="/application/me/etc"
        nextHref="/application/targeting/details"
        nextType="button"
        checkedStates={!isTargetingEmpty}
      /> */}
    </>
  );
};

export default TargetingPage;
