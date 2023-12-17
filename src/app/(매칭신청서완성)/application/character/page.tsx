"use client";

import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import { RDChip } from "@/app/components/RDChip";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
  characterchipGroups,
  characterRadioGroups,
} from "../data/characterData";
import CharacterRoot from "./CharacterRoot";

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

  return (
    <CharacterRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">3/6</Typography>
        <Typography variant="h3">성격 정보 입력하기</Typography>
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
          <Typography variant="h6">
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
              <Typography variant="h6">{group.title}</Typography>
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

      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="value/"
        nextHref="appearance/"
        nextType="button"
        checkedStates={allGroupsSelected}
      />
    </CharacterRoot>
  );
};
export default Index;
