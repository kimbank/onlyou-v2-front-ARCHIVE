"use client";
import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import { RDChip } from "@/app/components/RDChip";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Box, Container, Divider, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import { conditionChipGroups } from "../../data/conditionData";
import DetailRoot from "./DetailRoot";
import RDButton from "@/app/components/RDButton/RDButton";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroup {
  title: string;
  options: RadioOption[];
}

interface SelectedOptionsType {
  [key: string]: string[];
}
const Index = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string[];
  }>({
    0: [],
    1: [],
    2: [],
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    console.log("selectedTab", selectedTab);
    console.log("selectedOptions", selectedOptions);
  };

  const handleChipClick = (value: string) => {
    const newOptions: SelectedOptionsType = { ...selectedOptions };
    let isOptionInOtherTab = false;

    // 다른 탭에서 이미 선택된 옵션 제거
    Object.keys(newOptions).forEach((tab) => {
      if (tab !== selectedTab.toString() && newOptions[tab].includes(value)) {
        newOptions[tab] = newOptions[tab].filter((option) => option !== value);
        isOptionInOtherTab = true;
      }
    });

    // 현재 탭에서 해당 값이 있는 경우 제거
    if (newOptions[selectedTab].includes(value)) {
      newOptions[selectedTab] = newOptions[selectedTab].filter(
        (option) => option !== value
      );
    }
    // 현재 탭에서 해당 값이 없고, 다른 탭에서도 제거된 상태라면 추가
    else if (!isOptionInOtherTab) {
      newOptions[selectedTab].push(value);
    }

    setSelectedOptions(newOptions);
  };
  return (
    <DetailRoot>
      <Box className="title-box">
        <Typography className="title-text" variant="h1">
          각 조건을 상세히 지정해 주세요.
        </Typography>
        <Typography variant="body1">
          상세한 설정에 따라 예상 매칭 주기를 알려드려요
        </Typography>
      </Box>
      <Box className="button-box">
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
