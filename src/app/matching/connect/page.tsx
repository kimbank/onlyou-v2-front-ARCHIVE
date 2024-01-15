"use client";

import BottomNavi from "@/components/BottomNavi";
import HomeHeader from "@/components/Header/HomeHeader";
import { Box, styled } from "@mui/material";
import { Connect } from "./Connect";

const agreementPage = () => {
  return (
    <>
      <HomeHeader />
      <AgreemenRoot id="content">
        <Connect />
      </AgreemenRoot>
      <BottomNavi />
    </>
  );
};

const AgreemenRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  };
});

export default agreementPage;
