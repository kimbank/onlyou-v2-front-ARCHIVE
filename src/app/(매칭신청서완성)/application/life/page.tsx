"use client";

import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import ValueRoot from "./ValueRoot";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroup {
  title: string;
  options: RadioOption[];
}

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );

  const radioGroups = useMemo(() => lifeRadioGroups, []);

  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
  };
  const allGroupsSelected = radioGroups.every(
    (group) => selectedValues[group.title] != null
  );

  useEffect(() => {
    console.log("selectedValues", selectedValues);
    console.log("radioGroups", radioGroups);
    console.log("allGroupsSelected", allGroupsSelected);
  }, [selectedValues, radioGroups, allGroupsSelected]);

  return (
    <ValueRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">2/6</Typography>
        <Typography variant="h3">생활 정보 입력하기</Typography>
      </Box>
      {radioGroups.map((group, index) => (
        <Container className="value-radio" key={index}>
          <Typography variant="h6">
            {index + 1}.{group.title}
          </Typography>
          <RDRadioInput
            onChange={(value: string) => handleRadioChange(group.title, value)}
            options={group.options}
          />
        </Container>
      ))}
      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="LetterSelect/"
        nextHref="LetterWhite/"
        nextType="button"
        checkedStates={allGroupsSelected}
      />
    </ValueRoot>
  );
};
export default Index;
