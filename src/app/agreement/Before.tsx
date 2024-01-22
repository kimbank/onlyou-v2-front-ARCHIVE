"use client";

import colors from "@/assets/theme/base/colors";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import before from "public/images/agreement/before.png";

const { primary_lighten3 } = colors;

export const Before = () => {
  return (
    <BeforeRoot>
      <Typography variant="h1">아직 성사된 상대가 없어요</Typography>
      <Typography variant="body2">
        인연을 찾는 중이에요. 조금만 기다려 주세요!
      </Typography>

      <Box>
        <Image src={before} alt="before" width={250} />
      </Box>
    </BeforeRoot>
  );
};

const BeforeRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "&> div": {
      backgroundColor: primary_lighten3,
      width: "100%",
      textAlign: "center",
      height: "250px",
      marginTop: "16px",
      borderRadius: "8px",
    },
  };
});
