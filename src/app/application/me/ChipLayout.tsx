"use client";

import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import {
  Box,
  Container,
  Typography,
  styled,
  Chip,
  Button,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Option, RangeOption } from "@/constants/application_option";
import { StepButton } from "@/components/Button/StepButton";
import BottomButton from "@/components/BottomButton/Next";
interface ChipLayoutProps {
  title: string;
  stepNumber: string;
  radioGroupsData: {
    name: string;
    label: string;
    options: (Option | RangeOption)[];
  };
  nextHref: string;
  prevHref: string;
}

const ChipLayout = ({
  title,
  stepNumber,
  radioGroupsData,
  nextHref,
  prevHref,
}: ChipLayoutProps) => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [selectedChips, setSelectedChips] = useState<Record<string, string[]>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const radioGroups = useMemo(() => radioGroupsData, [radioGroupsData]);
  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
    const nextIndex =
      radioGroups.options.findIndex((group) => group.name === groupTitle) + 1;

    if (
      nextIndex > activeGroupIndex &&
      nextIndex < radioGroups.options.length
    ) {
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

  const allRadioGroupsSelected = Object.values(selectedValues).every(
    (value) => value !== ""
  );

  const allChipGroupsSelected =
    Object.keys(selectedChips).length > 0 &&
    Object.values(selectedChips).every((chips) => chips.length > 0);

  const allGroupsSelected = allRadioGroupsSelected && allChipGroupsSelected;

  return (
    <>
      <Root id="content">
        <Box className="title-box">
          <Typography variant="subtitle2">
            <strong>{stepNumber}</strong>/6
          </Typography>
          <Typography variant="h1">{title}</Typography>
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
                    <Box className="chip-text">
                      <Typography variant="subtitle2">
                        {index + 1}.{group.label}
                      </Typography>
                    </Box>
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
      </Root>
      {type === "init" ? (
        <StepButton
          prevText="이전"
          nextText="다음"
          prevHref={prevHref}
          nextHref={nextHref}
          nextType="button"
          checkedStates={allGroupsSelected}
        />
      ) : (
        <BottomButton>
          <Button variant="contained" size="large">
            저장하기
          </Button>
        </BottomButton>
      )}
    </>
  );
};
export default ChipLayout;

const Root = styled(Container)(({ theme }) => {
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
      height: 0,
      overflow: "hidden",
    },
    ".value-radio.visible": {
      opacity: 1,
      transform: "translateY(0)",
      visibility: "visible",
      height: "auto",
    },
    ".chip": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "8px",
      paddingTop: "12px",
      height: 0,
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
      height: "auto",
    },
    ".chip-text": {
      width: "100%",
      marginBottom: "4px",
    },
  };
});
