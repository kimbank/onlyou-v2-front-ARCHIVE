"use client";

import colors from "@/assets/theme/base/colors";
import { Box, styled } from "@mui/material";
export const MyinfoDivider = () => {
  return <DividerRoot />;
};

const DividerRoot = styled(Box)(() => {
  const { gray5 } = colors;
  return {
    backgroundColor: gray5,
    width: "calc(100% + 24*2px)",
    margin: "0 0 0 -24px",
    height: 8,
  };
});
