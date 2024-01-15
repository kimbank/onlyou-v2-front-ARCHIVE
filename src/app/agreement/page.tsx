"use client";

import BottomNavi from "@/components/BottomNavi";
import HomeHeader from "@/components/Header/HomeHeader";
import { Box, styled } from "@mui/material";
import { Consist } from "./Consist";

const agreementPage = () => {
  return (
    <>
      <HomeHeader />
      <AgreemenRoot id="content">
        {/* <Before /> */}
        <Consist />
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
