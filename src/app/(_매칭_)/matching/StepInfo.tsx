"use client"

import Image from "next/image";
import MemoIcon from "public/images/matching/3dmemo_1080x1080.png";

import * as React from 'react';

import { Box, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { ReportGmailerrorredOutlined } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from "@mui/material";

const steps = [
  '내정보',
  '이상형 정보',
  '편지',
];

export const StepInfo = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <StepInfoRoot>
        <Image src={MemoIcon} alt="memo" width={149} height={149} onClick={() => setActiveStep(activeStep + 1)}/>

        <Box className="subhead">
          <ReportGmailerrorredOutlined color="primary" />
          <Typography variant="body2">
            매칭신청서 작성은 이 순서로 구성되어 있어요
          </Typography>
        </Box>

        <Box className="stepper">
          <Stepper activeStep={activeStep}  alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel color='white'>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
    </StepInfoRoot>
  )
}

const StepInfoRoot = styled("div")(() => {
  return {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    gap: "23px",
    
    borderRadius: "8px",
    backgroundColor: "#FFF0E4",
    padding: "21px",

    alignItems: "center",

    ".subhead": {
      textAlign: "center",
    },

    ".stepper": {
      width: "100%",
      overflow: "hidden",
    },

    "& .MuiStepLabel-label": {
      marginTop: "8px !important",
    },

    "& .MuiStepIcon-text": {
      fill: "#fff",
      fontWeight: "600",
    },

    "& .Mui-active": {"& .MuiStepConnector-line": {
      borderColor: "#FF7700 !important",

      "&::after, &::before": {
        backgroundColor: "#FF7700 !important",
      },
    },
    },

    ".Mui-completed": {
      fontWeight: "600 !important",
      color: "#FF7700 !important",

      "& .MuiStepConnector-line": {
        borderColor: "#FF7700 !important",

        "&::after, &::before": {
          backgroundColor: "#FF7700 !important",
        },
      },
    },

    "& .MuiStepConnector-line": {
      borderColor: "#ced4da",
      borderRadius: "44px",
      position: "relative",

      "&::after, &::before": {
        borderRadius: "44px",
        content: '""',
        position: "absolute",
        backgroundColor: "#ced4da",
        right: -1,
      },
      "&::after": {
        top: 1,
        width: "6px",
        height: "1px",
        transform: "rotate(-45deg)",
      },
      "&::before": {
        top: -3,
        width: "6px",
        height: "1px",
        transform: "rotate(45deg)",
      }
    },
  }
});

export default StepInfo;
