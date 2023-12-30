"use client";

import { RDChip } from "@/components/RDChip";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Container, Typography,Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
  AppearanceManchipGroups,
  appearanceRadioGroups,
  AppearanceWomanchipGroups,
} from "../data/appearanceData";
import AppearanceRoot from "./AppearanceRoot";
import BottomButton from "@/components/BottomButton/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StepButton } from "@/components/Button/StepButton";

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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [showChipGroups, setShowChipGroups] = useState(false);
  const radioGroups1 = useMemo(() => appearanceRadioGroups, []);
  // 추후 유저 성별에 따라 구분
  const radioGroups2 = useMemo(() => AppearanceManchipGroups, []);
  const radioGroups3 = useMemo(() => AppearanceWomanchipGroups, []);
   const router = useRouter();

  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
    const nextIndex =
      radioGroups1.findIndex((group) => group.title === groupTitle) + 1;
    if (nextIndex < radioGroups1.length) {
      setActiveGroupIndex(nextIndex);
    }
    if (nextIndex >= radioGroups1.length) {
      setShowChipGroups(true);
    }
  };

  const handleChipClick = (value: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        return prev.filter((option) => option !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const allRadiosSelected = radioGroups1.every(
    (group) => selectedValues[group.title] != null
  );

  const allGroupsSelected = allRadiosSelected ;

  useEffect(() => {
    console.log("selectedValues", selectedValues);
    console.log("radioGroups", radioGroups1);
    console.log("allGroupsSelected", allGroupsSelected);
  }, [selectedValues, radioGroups1, allGroupsSelected]);

      const handleNext = () => {
        if (allGroupsSelected) {
          router.push("dating/");
        } else {
          alert("모든 그룹을 선택하세요.");
        }
      };


  return (
    <AppearanceRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">
          <strong>4</strong>/6
        </Typography>
        <Typography variant="h1">외모 정보 입력하기</Typography>
      </Box>
      {radioGroups1.map((group, index) => (
        <Container
          className={
            index <= activeGroupIndex
              ? "appearance-radio visible"
              : "appearance-radio"
          }
          key={index}
        >
          <Typography variant="subtitle2">
            {index + 1}.{group.title}
          </Typography>
          <RDRadioInput
            onChange={(value: string) => handleRadioChange(group.title, value)}
            options={group.options}
          />
        </Container>
      ))}
      {/* <BottomButton sx={{ gap: "18px" }}>
        <Link href={"/matching"} style={{ width: "100%" }} passHref>
          <Button variant="outlined">이전</Button>
        </Link>

        <Button onClick={handleNext} variant="contained" size="large" fullWidth>
          다음
        </Button>
      </BottomButton> */}
      <StepButton
        prevText="이전"
        nextText="다음"
        prevHref="character/"
        nextHref="dating/"
        nextType="button"
        checkedStates={allGroupsSelected}
      />
    </AppearanceRoot>
  );
};
export default Index;
