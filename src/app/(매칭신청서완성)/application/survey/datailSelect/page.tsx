"use client";
import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import {
    Box,
    Divider,
    Skeleton,
    Slider,

    Typography
} from "@mui/material";
import { useMemo, useState } from "react";

import DetailSelectRoot from "./DetailSelectRoot";
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { tooltipTitle } from "./Data/tooltipData";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RDButton from "@/components/RDButton/RDButton";
import { IncheonLocation, KyeongkiLocation, SeoulLocation } from "./Data/locationData";
import { RDChip } from "@/components/RDChip";
import { interestRadioGroups, lifeRadioGroups } from "../../data/lifeData";
import { characterchipGroups } from "../../data/characterData";
const Index = () => {
  const [value, setValue] = useState([1980, 2004]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event :any, newValue : any) => {
    setValue(newValue);
  };
   const [open, setOpen] = useState(false); 

   const handleTooltipToggle = () => {
     setOpen(!open); 
   };
  const radioGroups1 = useMemo(() => characterchipGroups, []);
  const radioGroups2 = useMemo(() => interestRadioGroups, []);

  const handleChipClick = (value: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        return prev.filter((option) => option !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const handleButtonClick = (value : any) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };
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
          선호하는 거주지를 모두 설정해 주세요.
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
            <Typography>
              <InfoOutlinedIcon />
              지역 상세 설명 보기
            </Typography>
          </Box>
        </Tooltip>
        <Box className="period-box">
          <RDButton color="light" variant="contained" size="large">
            <Typography className="buttonText">수도권 내 상관없음</Typography>
          </RDButton>
        </Box>
      </Box>
      <Box className="info-box">
        {SeoulLocation.map((group) => (
          <Box key={group.title}>
            <Typography variant="subtitle2">{group.title}</Typography>
            <Box className="location-box">
              {group.options.map((option) => (
                <RDButton
                  key={option.value}
                  label={option.label}
                  checked={selectedOptions.includes(option.value)}
                  onClick={() => handleButtonClick(option.value)}
                  size="small"
                  color={
                    selectedOptions.includes(option.value) ? "primary" : "light"
                  }
                  variant="contained"
                >
                  <Typography className="buttonText">{option.label}</Typography>
                </RDButton>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="info-box">
        {KyeongkiLocation.map((group) => (
          <Box key={group.title}>
            <Typography variant="subtitle2">{group.title}</Typography>
            <Box className="location-box">
              {group.options.map((option) => (
                <RDButton
                  key={option.value}
                  label={option.label}
                  checked={selectedOptions.includes(option.value)}
                  onClick={() => handleButtonClick(option.value)}
                  size="small"
                  color={
                    selectedOptions.includes(option.value) ? "primary" : "light"
                  }
                  variant="contained"
                >
                  <Typography className="buttonText">{option.label}</Typography>
                </RDButton>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="info-box">
        {IncheonLocation.map((group) => (
          <Box key={group.title}>
            <Typography variant="subtitle2">{group.title}</Typography>
            <Box className="location-box">
              {group.options.map((option) => (
                <RDButton
                  key={option.value}
                  label={option.label}
                  checked={selectedOptions.includes(option.value)}
                  onClick={() => handleButtonClick(option.value)}
                  size="small"
                  color={
                    selectedOptions.includes(option.value) ? "primary" : "light"
                  }
                  variant="contained"
                >
                  <Typography className="buttonText">{option.label}</Typography>
                </RDButton>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Divider className="divider" />
      <Box className="info-box">
        {radioGroups1.map((group) => (
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
      <Divider className="divider" />
      <Box className="info-box">
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

      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="value/"
        nextHref="character/"
        nextType="button"
      />
    </DetailSelectRoot>
  );
};

export default Index;
