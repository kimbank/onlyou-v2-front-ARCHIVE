'use client';
import { RDStepNavButton } from "@/components/Button/RDStepButton";
import { RDChip } from "@/components/RDChip";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import { conditionChipGroups } from '../../data/conditionData';
import ConditionRoot from "./ConditionRoot";
import RDButton from "@/components/RDButton/RDButton";

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
    console.log('selectedTab', selectedTab);
    console.log('selectedOptions', selectedOptions);
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
    newOptions[selectedTab] = newOptions[selectedTab].filter((option) => option !== value);
  }
  // 현재 탭에서 해당 값이 없고, 다른 탭에서도 제거된 상태라면 추가
  else if (!isOptionInOtherTab) {
    newOptions[selectedTab].push(value);
  }

  setSelectedOptions(newOptions);
};
  return (
    <ConditionRoot>
      <Box className="title-box">
        <Typography variant="h3">1순위 조건</Typography>
        <Typography variant="subtitle2">
          꼭 맞춰줬으면 하는 조건을 <strong>&apos;최대 2개&apos;</strong> 골라주세요
        </Typography>
      </Box>
      <Box>
        <Tabs variant="fullWidth" className="tab-box" value={selectedTab} onChange={handleTabChange}>
          <Tab className="tab" label="1순위" />
          <Tab className="tab" label="2순위" />
          <Tab className="tab" label="3순위" />
        </Tabs>
        <Box className="content-box">
          <Typography>*다른 회원 분들은 평균 6개의 조건을 설정했어요.</Typography>
          {conditionChipGroups.flatMap((group) => (
            <Box className="chip-box">
              <Typography variant="h6">{group.title}</Typography>
              <Box className="chip">
                {group.options.map((option) => (
                  <Box key={option.value}>
                    <RDChip label={option.label} checked={Object.values(selectedOptions).flat().includes(option.value)} onClick={() => handleChipClick(option.value)} />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="content-box">
          <Typography>*다른 회원 분들은 평균 6개의 조건을 설정했어요.</Typography>
          {conditionChipGroups.flatMap((group) => (
            <Box className="chip-box">
              <Typography variant="h6">{group.title}</Typography>
              <Box className="chip">
                {group.options.map((option) => (
                  <Box key={option.value}>
                    <RDButton color="secondary" size="small" variant="contained">
                      <Typography variant="body2" color="black">{option.label}</Typography>
                    </RDButton>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <RDStepNavButton prevText="이전" nextText="다음" prevHref="value/" nextHref="character/" nextType="button" />
    </ConditionRoot>
  );
};

export default Index;