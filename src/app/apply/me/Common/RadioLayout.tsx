"use client";

import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Button, Container, Typography, styled } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import BottomButton from "@/components/BottomButton/Container";
import { useRouter } from "next/navigation";
import { Option, RangeOption } from "@/constants/application_option";
import { StepButton } from "@/components/Button/StepButton";

interface RadioLayoutProps {
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

const RadioLayout = ({
  title,
  stepNumber,
  radioGroupsData,
  nextHref,
  prevHref,
}: RadioLayoutProps) => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const router = useRouter();

  const radioGroups = useMemo(() => radioGroupsData, []);

  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
    const nextIndex =
      radioGroups.options.findIndex((group) => group.name === groupTitle) +
      1;

    if (
      nextIndex > activeGroupIndex &&
      nextIndex < radioGroups.options.length
    ) {
      setActiveGroupIndex(nextIndex);
    }
  };
  const allGroupsSelected = radioGroups.options.every(
    (group) => selectedValues[group.name] != null
  );

  useEffect(() => {
    console.log(selectedValues);
  });

  return (
    <ValueRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">
          <strong>{stepNumber}</strong>/6
        </Typography>
        <Typography variant="h1">{title}</Typography>
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
      <StepButton
        prevText="이전"
        nextText="다음"
        prevHref={prevHref}
        nextHref={nextHref}
        nextType="button"
        checkedStates={allGroupsSelected}
      />
    </ValueRoot>
  );
};
export default RadioLayout;

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
      height: 0,
      overflow: "hidden",
    },
    ".value-radio.visible": {
      opacity: 1,
      transform: "translateY(0)",
      visibility: "visible",
      height: "auto",
    },
  };
});
