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
  const [activeStep, setActiveStep] = React.useState(-1);

  return (
    <StepInfoRoot>
        <Box className="title">
          <Image src={MemoIcon} alt="memo" width={149} height={149} onClick={() => setActiveStep(activeStep)}/>

          <Box className="subhead">
            <ReportGmailerrorredOutlined color="primary" />
            <Typography variant="body2">
              매칭신청서 작성은 이 순서로 구성되어 있어요
            </Typography>
          </Box>
        </Box>

        <Box className="stepper">
          <Stepper activeStep={activeStep}  alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
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
    paddingBottom: "32px",

    alignItems: "center",

    "& .title": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    },

    "& .subhead": {
      display: "flex",
      textAlign: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
    },

    "& .stepper": {
      width: "100%",
      overflow: "hidden",
    },

    /* 기본 스텝 라벨 CSS */
    "& .MuiStepLabel-label": {
      marginTop: "8px !important",
    },

    "& .MuiStepIcon-text": {
      fill: "#fff",
      fontWeight: "600",
    },

    /* 커넥터 정적 디자인 (기능 미구현 시 사용) */
    "& .Mui-disabled": {
      fontWeight: "600 !important",
      color: "#FF7700 !important",

      ".MuiSvgIcon-root": {
        color: "#FF7700 !important",
      },

      "& .MuiStepConnector-line": {
        borderColor: "#FF7700 !important",

        "&::after, &::before": {
          backgroundColor: "#FF7700 !important",
        },
      },
    },

    /* 커넥터 상황별 색상 디자인 (기능 구현시 도입) */
    // "& .Mui-active": {"& .MuiStepConnector-line": {
    //   borderColor: "#FF7700 !important",

    //   "&::after, &::before": {
    //     backgroundColor: "#FF7700 !important",
    //   },
    // },
    // },

    // ".Mui-completed": {
    //   fontWeight: "600 !important",
    //   color: "#FF7700 !important",

    //   "& .MuiStepConnector-line": {
    //     borderColor: "#FF7700 !important",

    //     "&::after, &::before": {
    //       backgroundColor: "#FF7700 !important",
    //     },
    //   },
    // },

    /* connector 화살표 디자인 */
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
