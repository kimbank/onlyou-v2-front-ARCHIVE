"use client";

import colors from "@/assets/theme/base/colors";
import { Box, styled, Typography } from "@mui/material";
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
