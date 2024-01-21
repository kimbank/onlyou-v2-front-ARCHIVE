"use client";
import { Box, Divider, Skeleton, Slider, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import DetailSelectRoot from "./DetailSelectRoot";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { tooltipTitle } from "./Data/tooltipData";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  CapitalRegionLocation,
  IncheonLocation,
  KyeongkiLocation,
  SeoulLocation,
} from "./Data/locationData";
import { RDChip } from "@/components/RDChip";
const Index = () => {
  const [value, setValue] = useState([1980, 2004]);
  const [selectedChip1, setSelectedChip1] = useState<string[]>([]);
  const [selectedChip2, setSelectedChip2] = useState<string[]>([]);
  const [selectedSeoulOptions, setSelectedSeoulOptions] = useState<string[]>(
    []
  );
  const [selectedKyeongkiOptions, setSelectedKyeongkiOptions] = useState<
    string[]
  >([]);
  const [selectedIncheonOptions, setSelectedIncheonOptions] = useState<
    string[]
  >([]);
  const [CapitalOptions, setCapitalOptions] = useState<string[]>([]);
  const [CapitalChecked, setCapitalChecked] = useState(false);

  const handleOptionClick = (
    value: string,
    location: "Seoul" | "Kyeongki" | "Incheon"
  ) => {
    let setSelectedOptions;
    switch (location) {
      case "Seoul":
        setSelectedOptions = setSelectedSeoulOptions;
        break;
      case "Kyeongki":
        setSelectedOptions = setSelectedKyeongkiOptions;
        break;
      case "Incheon":
        setSelectedOptions = setSelectedIncheonOptions;
        break;
      default:
        return;
    }

    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };
  const handleCapitalClick = () => {
    setCapitalChecked(!CapitalChecked);
    if (!CapitalChecked) {
      const capitalOptionValues = CapitalRegionLocation[0].options.map(
        (option) => option.value
      );
      setCapitalOptions(capitalOptionValues);
    } else {
      setCapitalOptions([]);
    }
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  const [open, setOpen] = useState(false);

  const handleTooltipToggle = () => {
    setOpen(!open);
  };

  const handleChipClick = (
    value: string,
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        return prev.filter((option) => option !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  // const allButtonSelected =
  //   allLocations.every((group) =>
  //     group.options.some(
  //       (option) =>
  //         selectedSeoulOptions.includes(option.value) ||
  //         selectedKyeongkiOptions.includes(option.value) ||
  //         selectedIncheonOptions.includes(option.value)
  //     )
  //   ) || CapitalOptions.length > 0;
  // const allChipsSelected = allChips.every((group) =>
  //   group.options.some(
  //     (option :any) =>
  //       selectedChip1.includes(option.value) &&
  //       selectedChip2.includes(option.value)
  //   )
  // );

  //   const allGroupsSelected = allButtonSelected && allChipsSelected;

  return (
    <DetailSelectRoot>
      <Box className="title-box">
        <Typography variant="h1">각 조건을 상세히 지정해 주세요.</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1">
          선호하는 나이대를 설정해 주세요.
        </Typography>
        <Box className="slider">
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={1980}
            max={2004}
          />
        </Box>
        <Box className="range-text">
          <Typography variant="body3">{value[0]}년생</Typography>
          <Typography variant="body3">{value[1]}년생</Typography>
        </Box>
      </Box>
      <Divider className="divider" />
      <Box className="content-box">
        <Typography variant="subtitle1">
          선호하는 거주지를 <strong>모두</strong> 설정해 주세요.
        </Typography>

        <Tooltip
          className="tooltlp"
          title={tooltipTitle()}
          open={open}
          onClick={handleTooltipToggle}
          arrow
          placement="bottom-start"
        >
          <Box className="tooltip-text">
            <InfoOutlinedIcon />
            <Typography variant="body3">지역 상세 설명 보기</Typography>
          </Box>
        </Tooltip>
        <Box className="period-box">
          {/* <RDCheckButton
            color="light"
            variant="contained"
            size="large"
            label="수도권 내 상관없음"
            onClick={handleCapitalClick}
            checked={CapitalChecked}
          /> */}
        </Box>
      </Box>
      {/* <Box>
        {allLocations.map((group) => (
          <Box key={group.title} className="info-box">
            <Typography variant="subtitle2">{group.title}</Typography>
            <Box className="location-box">
              {group.options.map((option) => (
                <heckButton
                  key={option.value}
                  label={option.label}
                  size="small"
                  variant="contained"
                  checked={
                    group.title === "서울"
                      ? selectedSeoulOptions.includes(option.value)
                      : group.title === "경기"
                      ? selectedKyeongkiOptions.includes(option.value)
                      : selectedIncheonOptions.includes(option.value)
                  }
                  onClick={() =>
                    handleOptionClick(
                      option.value,
                      group.title === "서울"
                        ? "Seoul"
                        : group.title === "경기"
                        ? "Kyeongki"
                        : "Incheon"
                    )
                  }
                  color={
                    (group.title === "서울" &&
                      selectedSeoulOptions.includes(option.value)) ||
                    (group.title === "경기" &&
                      selectedKyeongkiOptions.includes(option.value)) ||
                    (group.title === "인천" &&
                      selectedIncheonOptions.includes(option.value))
                      ? "primary"
                      : "light"
                  }
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Divider className="divider" />
      <Box className="info-box">
         {chipGroups1.map((group:any) => (
          <Box key={group.title}>
            <Typography variant="subtitle2">{group.title}</Typography>
            <Box className="chip">
              {group.options.map((option :any) => (
                <RDChip
                  key={option.value}
                  label={option.label}
                  checked={selectedChip1.includes(option.value)}
                  onClick={() =>
                    handleChipClick(option.value, setSelectedChip1)
                  }
                />
              ))}
            </Box> 
          </Box>
        ))}
      </Box>
      <Divider className="divider" />
      <Box className="info-box">
         {chipGroups2.map((group :any)  => (
          <Box key={group.title}>
            <Typography variant="subtitle2">{group.title}</Typography>
            <Box className="chip">
              {group.options.map((option :any) => (
                <RDChip
                  key={option.value}
                  label={option.label}
                  checked={selectedChip2.includes(option.value)}
                  onClick={() =>
                    handleChipClick(option.value, setSelectedChip2)
                  }
                />
              ))}
            </Box> 
          </Box>
        ))}
      </Box>
      {/* <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="value/"
        nextHref="character/"
        nextType="button"
        checkedStates={allGroupsSelected}
      /> */}
    </DetailSelectRoot>
  );
};

export default Index;
