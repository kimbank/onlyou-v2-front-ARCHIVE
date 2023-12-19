"use client";

import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import RDInput from "@/app/components/RDInput";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Box, Container, Input, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { datingRadioGroups } from "../data/datingData";
import { otherRadioGroups } from "../data/otherData";
import OtherRoot from "./OtherRoot";
import DatingRoot from "./OtherRoot";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const radioGroups = useMemo(() => otherRadioGroups, []);

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
    <OtherRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">5/6</Typography>
        <Typography variant="h3">연애스타일 정보 입력하기</Typography>
      </Box>
      {radioGroups.map((group, index) => (
        <Container
          key={group.title}
          className={
            index <= activeGroupIndex ? "other-radio visible" : "other-radio"
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
      <Box>
        <RDInput
          label="카카오톡 아이디"
          placeholder="카카오톡 아이디를 입력해주세요"
        />
        <Typography variant="body2">
          *매칭 성사 시, 카카오톡 아이디가 교환되어요.
          <br />꼭 카카오톡에서 카카오톡 아이디를 ‘검색 허용’으로 설정해 주세요.
        </Typography>
      </Box>

      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="LetterSelect/"
        nextHref="life/"
        nextType="button"
        checkedStates={allGroupsSelected}
      />
    </OtherRoot>
  );
};
export default Index;
