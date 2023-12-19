"use client";

import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { datingRadioGroups } from "../data/datingData";
import DatingRoot from "./DatingRoot";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const radioGroups = useMemo(() => datingRadioGroups, []);

  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
    const nextIndex =
      radioGroups.findIndex((group) => group.title === groupTitle) + 1;
    if (nextIndex < radioGroups.length) {
      setActiveGroupIndex(nextIndex);
    }
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
    <DatingRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">5/6</Typography>
        <Typography variant="h3">연애스타일 정보 입력하기</Typography>
      </Box>
      {radioGroups.map((group, index) => (
        <Container
          key={group.title}
          className={
            index <= activeGroupIndex ? "dating-radio visible" : "dating-radio"
          }
        >
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
        nextHref="life/"
        nextType="button"
        checkedStates={allGroupsSelected}
      />
    </DatingRoot>
  );
};
export default Index;
