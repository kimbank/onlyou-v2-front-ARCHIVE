"use client";

import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import { RDChip } from "@/app/components/RDChip";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Box, Chip, Container, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { interestRadioGroups, lifeRadioGroups } from "./data";
import ValueRoot from "./ValueRoot";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [checked, setChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = () => {
    setChecked(!checked);
  };
  const radioGroups1 = useMemo(() => lifeRadioGroups, []);
  const radioGroups2 = useMemo(() => interestRadioGroups, []);

  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
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
  const allGroupsSelected = radioGroups1.every(
    (group) => selectedValues[group.title] != null
  );

  useEffect(() => {
    console.log("selectedValues", selectedValues);
    console.log("radioGroups", radioGroups1);
    console.log("allGroupsSelected", allGroupsSelected);
  }, [selectedValues, radioGroups1, allGroupsSelected]);

  return (
    <ValueRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">2/6</Typography>
        <Typography variant="h3">생활 정보 입력하기</Typography>
      </Box>
      {radioGroups1.map((group, index) => (
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
      {radioGroups2.map((group, index) => (
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
      <Box>
        {radioGroups2.map((group) => (
          <Box key={group.title}>
            <Typography variant="h6">{group.title}</Typography>
            <Box className="chip-box">
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
