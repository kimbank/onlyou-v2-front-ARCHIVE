"use client";
import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import {
    Box,
    Divider,
    Skeleton,
    Slider,

    Typography
} from "@mui/material";
import { useState } from "react";

import DetailSelectRoot from "./DetailSelectRoot";
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { tooltipTitle } from "./tooltipData";

const Index = () => {
  const [value, setValue] = useState([1980, 2004]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const [open, setOpen] = useState(false); 

   const handleTooltipToggle = () => {
     setOpen(!open); 
   };


  return (
    <DetailSelectRoot>
      <Box className="title-box">
        <Typography variant="h1">각 조건을 상세히 지정해 주세요.</Typography>
      </Box>
      <Box>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={1980}
          max={2004}
        />
        <Box className="range-text">
          <Typography variant="h6">{value[0]}</Typography>
          <Typography variant="h6">{value[1]}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Typography variant="subtitle2">
          선호하는 거주지를 모두 설정해 주세요.
        </Typography>

        <Tooltip
          className="tooltlp"
          title={tooltipTitle()}
          open={open}
          onClick={handleTooltipToggle}
          arrow
          placement="bottom-start"
        >
          <Typography>지역 상세 설명 보기</Typography>
        </Tooltip>
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
    </DetailSelectRoot>
  );
};

export default Index;
