"use client";
import { RDStepNavButton } from "@/components/Button/RDStepButton";
import { RDChip } from "@/components/RDChip";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Container, Divider, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import { conditionChipGroups } from "../../data/conditionData";
import DetailRoot from "./DetailRoot";
import RDButton from "@/components/RDButton/RDButton";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";


const Index = () => {

 
  return (
    <DetailRoot>
      <Box className="title-box">
        <Typography variant="h1">각 조건을 상세히 지정해 주세요.</Typography>
        <Typography variant="body1">
          상세한 설정에 따라 예상 매칭 주기를 알려드려요
        </Typography>
      </Box>
      <Box className="button-container">
        <RDButton
          className="button"
          variant="contained"
          color="light"
          size="large"
        >
          <Typography className="buttonText" variant="body1">
            기본 반영 상세 조건
          </Typography>
          <ArrowForwardIosRoundedIcon className="buttonText" />
        </RDButton>
        <RDButton
          className="button"
          variant="contained"
          color="light"
          size="large"
        >
          <Typography className="buttonText" variant="body1">
            1순위 상세 조건
          </Typography>
          <ArrowForwardIosRoundedIcon className="buttonText" />
        </RDButton>
        <RDButton
          className="button"
          variant="contained"
          color="light"
          size="large"
        >
          <Typography className="buttonText" variant="body1">
            2순위 상세 조건
          </Typography>
          <ArrowForwardIosRoundedIcon className="buttonText" />
        </RDButton>
        <RDButton
          className="button"
          variant="contained"
          color="light"
          size="large"
        >
          <Typography className="buttonText" variant="body1">
            3순위 상세 조건
          </Typography>
          <ArrowForwardIosRoundedIcon className="buttonText" />
        </RDButton>
      </Box>

      <Box>
        <Typography variant="subtitle2">예상 매칭 주기</Typography>
        <Box className="period-box">
          <Typography variant="subtitle2">
            예상 매칭 주기를 계산 중이에요
          </Typography>
          <Divider />
          <Box className="skeleton-box">
            <Skeleton width="70%" />
            <Skeleton width="50%" />
          </Box>
        </Box>
        <Box className="info-box">
          <Typography variant="subtitle2">예상 매칭 주기란?</Typography>
          <Typography variant="body2">
            ONLYou는 회원님의 인기도와 조건 설정에 따라 매칭 주기를 조절하고 있
            <br />
            습니다. 많은 분들께서 회원 님과 매칭받기를 원할 수록, 회원님의 조건
            상
            <br />세 설정이 느슨할 수록, 매칭이 짧은 주기로 자주 이루어집니다.
          </Typography>
        </Box>
      </Box>
      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="value/"
        nextHref="character/"
        nextType="button"
      />
    </DetailRoot>
  );
};

export default Index;
