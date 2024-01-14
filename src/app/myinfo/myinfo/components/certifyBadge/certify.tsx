"use client";

import colors from "@/assets/theme/base/colors";
import { Box, Typography, styled } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
export const Certify = ({ children }: any) => {
  return (
    <CertifyRoot>
      <Typography variant="subtitle3" color="primary">
        {children}
      </Typography>
    </CertifyRoot>
  );
};

const CertifyRoot = styled(Box)(() => {
  const { primary_lighten3 } = colors;
  return {
    backgroundColor: primary_lighten3,
    gap: "8px",
    borderRadius: "4px",
    padding: "2px 6px",
    display: "flex",
    alignItems: "center",
    height: 21,
  };
});
