"use client"

import { Box, Typography } from "@mui/material";
import HomeHeader from "@/comp/Header/HomeHeader";
import BottomNavi from "@/comp/BottomNavi";
import RDButton from "@/components/RDButton/RDButton";

import StepInfo from "./StepInfo";
import SaveInfo from "./SaveInfo";

import { styled } from "@mui/material";


const MatchingIndex = () => {
  return (
    <>
      <HomeHeader />

      <MatchingRoot id="content">
        <Box className="title">
          <Typography variant="h1">신청서 완성하기</Typography>
          <Typography variant="body1">
            신청서를 완성하고
            <br />
            나와 맞는 인연을 빠르게 찾아보세요!
          </Typography>
        </Box>
        <Box className="content">
          <StepInfo />
          <SaveInfo />
          <RDButton variant="contained" color="primary" size="large">
            <Typography variant="button">매칭신청서 완성하기</Typography>
          </RDButton>
        </Box>
      </MatchingRoot>

      <BottomNavi />
    </>
  );
};

const MatchingRoot = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",

    "& .title": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    "& .content": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
  };
});

export default MatchingIndex;
