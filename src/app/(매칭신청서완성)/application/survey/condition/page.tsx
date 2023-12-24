'use client';
import { RDStepNavButton } from "@/components/Button/RDStepButton";
import { RDChip } from "@/components/RDChip";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import RDButton from "@/components/RDButton/RDButton";
import { conditionChipGroups } from '../../data/conditionData';
import ConditionRoot from "./ConditionRoot";
import RDCheckButton from "@/components/Button/RDCheckButton";
import colors from "@/assets/theme/base/colors";

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
const titles = ["1순위 조건", "2순위 조건", "3순위 조건"];
const descriptions = [
  "꼭 맞춰줬으면 하는 조건을 <strong>'최대 2개'</strong> 골라주세요.",
  "꼭 맞춰줬으면 하는 조건을 <strong>'최대 4개'</strong> 골라주세요.",
  "꼭 맞춰줬으면 하는 조건을 <strong>'최대 4개'</strong> 골라주세요."
];

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
      if ((selectedTab === 0 && newOptions[selectedTab].length < 2) || 
        ((selectedTab === 1 || selectedTab === 2) && newOptions[selectedTab].length < 4)) {
      newOptions[selectedTab].push(value);
    }
  }
  
  setSelectedOptions(newOptions);


};
  useEffect(()=>{
    console.log(selectedOptions)
  },[selectedOptions])

  const allGroupsSelected = Object.values(selectedOptions).every(
    (optionsArray) => optionsArray.length > 0
  );
  return (
    <ConditionRoot>
      <Box className="title-box">
      <Typography variant="h1">{titles[selectedTab]}</Typography>
         <Typography variant="body1" dangerouslySetInnerHTML={{ __html: descriptions[selectedTab] }}></Typography>
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
              <Typography variant="subtitle1">{group.title}</Typography>
              <Box className="chip">
              {group.options.map((option, index) => {
                const isChecked = Object.values(selectedOptions).flat().includes(option.value);
                const optionTabIndex = Object.keys(selectedOptions).findIndex(
                      (key) => selectedOptions[parseInt(key)].includes(option.value)
                      );
                const {primary , gray,white } =colors
                const buttonStyle = isChecked && optionTabIndex !== selectedTab ? 
                    { backgroundColor:white.main, border: `1px solid ${primary.main}`, color: primary.main, fontWeight:"bold" } :
                    { backgroundColor: isChecked ? primary.main : gray["500"] };
                return (
                  <Box key={option.value}>
                    <RDCheckButton
                    size="small"
                    variant="contained"
                      label={option.label}
                      checked={isChecked}
                      onClick={() => handleChipClick(option.value)}
                      style={buttonStyle}
                    >
                     {isChecked && optionTabIndex !== selectedTab && (
                      <Typography style={{ fontWeight: "bold"}}>
                      {`${optionTabIndex + 1} | `}{option.label}
                     </Typography>
                    )}
                    </RDCheckButton>
                  </Box>
                );
              })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <RDStepNavButton prevText="이전" nextText="다음" prevHref="/application/survey" nextHref="character/" nextType="button" checkedStates={allGroupsSelected}/>
    </ConditionRoot>
  );
};

export default Index;