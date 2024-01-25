"use client";

import { Box, Button, Typography } from "@mui/material";
import HomeHeader from "@/components/Header/HomeHeader";
import BottomNavi from "@/components/BottomNavi";
import DormancyToggle from "./DormancyToggle";
import { useMatchingStatus } from "@/api/hooks/useMatchingStatus";

import { styled } from "@mui/material";

const DormancyPage = () => {

  return (
    <>
      <HomeHeader />

      <DormancyRoot id="content">
        <Box className="title">
          <Typography variant="h1">현재 매칭 휴면 상태에요.</Typography>
          <Typography variant="body1">
            언제든지 다시 매칭에 참여하실 수 있어요.
          </Typography>
        </Box>
        <Box className="content">
          <DormancyToggle />
        </Box>
      </DormancyRoot>

      <BottomNavi />
    </>
  );
};

const DormancyRoot = styled("div")(({ theme }) => {
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

export default DormancyPage;
