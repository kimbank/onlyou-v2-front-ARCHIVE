"use client";

import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Button, Container, Typography, styled } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { ValueRadioGroups } from "../data/valueData";
import BottomButton from "@/components/BottomButton/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { targetingCategories } from "@/constants/me";
const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const router = useRouter();

  const radioGroups = useMemo(() => targetingCategories.values, []);

const handleRadioChange = (groupTitle: string, value: string) => {
  setSelectedValues((prevValues) => ({
    ...prevValues,
    [groupTitle]: value,
  }));
  const nextIndex =
    radioGroups.options.findIndex((group) => group.name === groupTitle) + 1;

  if (nextIndex > activeGroupIndex && nextIndex < radioGroups.options.length) {
    setActiveGroupIndex(nextIndex);
  }
};
  const allGroupsSelected = radioGroups.options.every(
    (group) => selectedValues[group.name] != null
  );
  const handleNext = ()=> {
  if (allGroupsSelected) {
    router.push('life/'); 
  } else {
    alert('모든 그룹을 선택하세요.');
  }
}

useEffect(()=>{
  console.log(selectedValues);
})

  return (
    <ValueRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">
          <strong>1</strong>/6
        </Typography>
        <Typography variant="h1">가치관 정보 입력하기</Typography>
      </Box>
      {radioGroups.options.map((group, index) => {
  if ("options" in group && group.options) {
    const options = group.options as { [key: string]: string };
    return (
      <Container
        key={group.label}
        className={
          index <= activeGroupIndex ? "value-radio visible" : "value-radio"
        }
      >
        <Typography variant="subtitle2">
          {index + 1}.{group.label}
        </Typography>
        <RDRadioInput
          onChange={(id: string) => handleRadioChange(group.name, id)}
          options={Object.keys(options).map((key) => ({
            value: key,
            label: options[key],
          }))}
        />
      </Container>
    );
  }
      })}
      {/* <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="LetterSelect/"
        nextHref="life/"
        nextType="button"
        checkedStates={allGroupsSelected}
      /> */}

      <BottomButton sx={{ gap: "18px" }}>
        <Button size="large" variant="outlined">이전</Button>
        <Button onClick={handleNext} variant="contained" size="large" fullWidth>
          다음
        </Button>
      </BottomButton>
    </ValueRoot>
  );
};
export default Index;

const ValueRoot = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: " 0 24px",
    ".title-box": {
      gap: "0px",
    },
    ".value-radio": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      padding: "0",
      gap: "12px",
      margin: 0,
      opacity: 0,
      transform: "translateY(20px)",
      visibility: "hidden",
      transition:
        "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.5s",
    },
    ".value-radio.visible": {
      opacity: 1,
      transform: "translateY(0)",
      visibility: "visible",
    },
  };
});
