"use client";

import { StepButton } from "@/components/Button/StepButton";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Option, RangeOption } from "@/constants/application_option";
import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import BottomButton from "@/components/BottomButton/Next";

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
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const radioGroups = useMemo(() => radioGroupsData, []);

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
    console.log("selectedValues", selectedValues);
  };
  const allGroupsSelected = radioGroups.options.every(
    (group) => selectedValues[group.name] != null
  );

  return (
    <>
      <ValueRoot id="content">
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
      </ValueRoot>
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

export default RadioLayout;

const ValueRoot = styled('div')(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
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
