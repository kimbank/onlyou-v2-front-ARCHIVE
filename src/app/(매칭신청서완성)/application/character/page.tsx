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
  const radioGroups: RadioGroup[] = useMemo(
    () => [
      {
        title: "외향/내향",
        options: [
          { value: "0", label: "외향적이에요" },
          { value: "1", label: "외향적인 편이에요" },
          { value: "2", label: "내향적인 편이에요" },
          { value: "3", label: "내향적이에요" },
        ],
      },
      {
        title: "직관/현실",
        options: [
          { value: "0", label: "상상력이 풍부해요" },
          { value: "1", label: "상상력이 풍부한 편이에요" },
          { value: "2", label: "현실적인 편이에요" },
          { value: "3", label: "현실적이에요" },
        ],
      },
      {
        title: "감성/이성",
        options: [
          { value: "0", label: "감성이 풍부해요" },
          { value: "1", label: "감성이 풍부한 편이에요" },
          { value: "2", label: "이성적인 편이에요" },
          { value: "3", label: "이성적이에요" },
        ],
      },
      {
        title: "즉흥/계획",
        options: [
          { value: "0", label: "즉흥적이에요" },
          { value: "1", label: "즉흥적인 편이에요" },
          { value: "2", label: "계획적인 편이에요" },
          { value: "3", label: "계획적이에요" },
        ],
      },
      {
        title: "성격/매력",
        options: [
          { value: "0", label: "책임감 강함" },
          { value: "1", label: "즉흥적인 편이에요" },
          { value: "2", label: "계획적인 편이에요" },
          { value: "3", label: "계획적이에요" },
        ],
      },
    ],
    []
  );

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
        <Typography variant="subtitle2">3/6</Typography>
        <Typography variant="h3">성격 정보 입력하기</Typography>
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
