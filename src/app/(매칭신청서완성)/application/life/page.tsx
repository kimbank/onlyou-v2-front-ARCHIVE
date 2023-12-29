"use client";

import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Container, Typography, Button, styled, Chip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import BottomButton from "@/components/BottomButton/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { targetingCategories } from "@/constants/me";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [selectedChips, setSelectedChips] = useState<Record<string, string[]>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
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
  };

const handleChipClick = (groupName: string, optionValue: string) => {
    console.log("handleChipClick called", groupName, optionValue); 
  setSelectedChips((prevChips) => {
    const currentChips = prevChips[groupName] || [];
    let updatedChips;

    if (currentChips.includes(optionValue)) {
      updatedChips = currentChips.filter((chip) => chip !== optionValue);
    } else {
      updatedChips = [...currentChips, optionValue];
    }

    return {
      ...prevChips,
      [groupName]: updatedChips,
    };
  });
};

  const allSelectedValue = {
    ...selectedValues,
    ...selectedChips,
  };

  const allGroupsSelected = Object.values(allSelectedValue).every((value) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    } else {
      return value !== "";
    }
  });

    const handleNext = () => {
       if (allGroupsSelected) {
         router.push("character/");
       } else {
        alert("모든 그룹을 선택하세요.");
      }      
    };
      
    // useEffect(() => {
    //   console.log("selectedValues", selectedValues);
    //   // console.log("allGroupsSelected", allGroupsSelected);
    //   console.log("allSelectedValue", allSelectedValue);
    //   console.log("selectedChips", selectedChips);
    //   console.log(selectedValues);
    // }, [selectedValues, selectedChips]);
  return (
    <LifeRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">
          <strong>2</strong>/6
        </Typography>
        <Typography variant="h1">생활 정보 입력하기</Typography>
      </Box>
      {radioGroups.options.map((group, index) => {
        const isLastIndex = index === radioGroups.options.length - 1;
        const isVisible = index <= activeGroupIndex;
        if ("options" in group && group.options) {
          const options = group.options as { [key: string]: string };

          if (!isLastIndex) {
            return (
              <Box
                key={group.label}
                className={
                  index <= activeGroupIndex
                    ? "value-radio visible"
                    : "value-radio"
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
              </Box>
            );
          } else {
            if (isLastIndex) {
              return (
                <Box
                  key={group.label}
                  className={isVisible ? "chip visible" : "chip"}
                >
                  {Object.keys(options).map((option: string) => (
                    <Chip
                      key={option}
                      label={options[option]}
                      variant="filled"
                      color={
                        selectedChips[group.name]?.includes(option)
                          ? "primary"
                          : "default"
                      }
                      onClick={() => handleChipClick(group.name, option)}
                    />
                  ))}
                </Box>
              );
            }
          }
        }
      })}
      <BottomButton sx={{ gap: "18px" }}>
        <Link href={"value/"} style={{ width: "100%" }} passHref>
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




const LifeRoot = styled(Container)(({ theme }) => {
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
    ".chip": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "8px",
      paddingTop: "12px",
      opacity: 0,
      transform: "translateY(20px)",
      visibility: "hidden",
      transition:
        "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.5s",
    },
    ".chip.visible": {
      opacity: 1,
      transform: "translateY(0)",
      visibility: "visible",
    },
  };
});
