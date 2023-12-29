"use client";

import { RDStepNavButton } from "@/components/Button/RDStepButton";
import { RDChip } from "@/components/RDChip";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Container, Typography, Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { interestRadioGroups, lifeRadioGroups } from "../data/lifeData";
import LifeRoot from "./LifeRoot";
import BottomButton from "@/components/BottomButton/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { targetingCategories } from "@/constants/me";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [showChipGroups, setShowChipGroups] = useState(false);
  const radioGroups1 = useMemo(() => lifeRadioGroups, []);
  const radioGroups2 = useMemo(() => interestRadioGroups, []);
  const radioGroups = useMemo(() => targetingCategories.lifestyle, []);

    const router = useRouter();

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
    // if (nextIndex >= radioGroups1.length) {
    //   setShowChipGroups(true);
    // }
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
    (group) => selectedValues[group.value] != null
  );

  const allChipsSelected = radioGroups2.every((group) =>
    group.options.some((option) => selectedOptions.includes(option.id))
  );
  const allGroupsSelected = allRadiosSelected && allChipsSelected;

  useEffect(() => {
    console.log("selectedValues", selectedValues);
    console.log("radioGroups", radioGroups1);
    console.log("allGroupsSelected", allGroupsSelected);
  }, [selectedValues, radioGroups1, allGroupsSelected]);

      const handleNext = () => {
        if (allGroupsSelected) {
          router.push("character/");
        } else {
          alert("모든 그룹을 선택하세요.");
        }
      };
useEffect(() => {
  console.log(selectedValues);
});
  return (
    <LifeRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">
          <strong>2</strong>/6
        </Typography>
        <Typography variant="h1">생활 정보 입력하기</Typography>
      </Box>
      {radioGroups.options.map((group, index) => {
        if ("options" in group && group.options) {
          const options = group.options as { [key: string]: string };
          return (
            <Container
              key={group.label}
              className={
                index <= activeGroupIndex
                  ? "value-radio visible"
                  : "value-radio"
              }
            >
              <Typography variant="h6">
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
      {showChipGroups && (
        <Box className={`life-chip ${showChipGroups ? "show-chip" : ""}`}>
          {radioGroups2.map((group) => (
            <Box key={group.title}>
              <Typography variant="subtitle2">{group.title}</Typography>
              <Box className="chip">
                {group.options.map((option) => (
                  <RDChip
                    key={option.id}
                    label={option.label}
                    checked={selectedOptions.includes(option.id)}
                    onClick={() => handleChipClick(option.id)}
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
      {/* <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="value/"
        nextHref="character/"
        nextType="button"
        checkedStates={allGroupsSelected}
      /> */}
    </LifeRoot>
  );
};
export default Index;
