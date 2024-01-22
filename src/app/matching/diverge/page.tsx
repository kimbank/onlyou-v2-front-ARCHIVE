"use client";

import BottomNavi from "@/components/BottomNavi";
import HomeHeader from "@/components/Header/HomeHeader";
import { Box, styled, Typography } from "@mui/material";
import MachingLoading from "./MachingLoading";
const DivergePage = () => {
  return (
    <>
      <HomeHeader />
      <DivergeRoot id="content">
        <Typography variant="h1">
          서로의 선택이 엇갈렸어요
          <Typography variant="body2">
            고객님께서 다른 인연을 찾을 수 있도록
            <br />
            최선을 다해 매칭해 드릴게요.
          </Typography>
        </Typography>
        <MachingLoading />
      </DivergeRoot>
      <BottomNavi />
    </>
  );
};

const DivergeRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    "&> h1": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
  };
});

export default DivergePage;
