"use client";

import { RDStepNavButton } from "@/components/Button/RDStepButton";
import { RDChip } from "@/components/RDChip";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Container, Typography, Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
  characterchipGroups,
  characterRadioGroups,
} from "../data/characterData";
import CharacterRoot from "./CharacterRoot";
import BottomButton from "@/components/BottomButton/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const radioGroups1 = useMemo(() => characterRadioGroups, []);
  const radioGroups2 = useMemo(() => characterchipGroups, []);
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

  const allChipsSelected = radioGroups2.every((group) =>
    group.options.some((option) => selectedOptions.includes(option.value))
  );
  const allGroupsSelected = allRadiosSelected && allChipsSelected;

  useEffect(() => {
    console.log("selectedValues", selectedValues);
    console.log("radioGroups", radioGroups1);
    console.log("allGroupsSelected", allGroupsSelected);
  }, [selectedValues, radioGroups1, allGroupsSelected]);

    const handleNext = () => {
      if (allGroupsSelected) {
        router.push("appearance/");
      } else {
        alert("모든 그룹을 선택하세요.");
      }
    };


  return (
    <CharacterRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">
          <strong>3</strong>/6
        </Typography>
        <Typography variant="h1">성격 정보 입력하기</Typography>
      </Box>
      {radioGroups1.map((group, index) => (
        <Container
          className={
            index <= activeGroupIndex
              ? "character-radio visible"
              : "character-radio"
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
      {showChipGroups && (
        <Box className={`character-chip ${showChipGroups ? "show-chip" : ""}`}>
          {radioGroups2.map((group) => (
            <Box key={group.title}>
              <Typography variant="subtitle2">{group.title}</Typography>
              <Box className="chip">
                {group.options.map((option) => (
                  <RDChip
                    key={option.value}
                    label={option.label}
                    checked={selectedOptions.includes(option.value)}
                    onClick={() => handleChipClick(option.value)}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      )}
      <BottomButton sx={{ gap: "18px" }}>
        <Link href={"/matching"} style={{ width: "100%" }} passHref>
          <Button variant="outlined">이전</Button>
        </Link>

        <Button onClick={handleNext} variant="contained" size="large" fullWidth>
          다음
        </Button>
      </BottomButton>
{/* 
      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="life/"
        nextHref="appearance/"
        nextType="button"
        checkedStates={allGroupsSelected}
      /> */}
    </CharacterRoot>
  );
};
export default Index;
