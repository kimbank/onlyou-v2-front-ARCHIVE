"use client";

import colors from "@/assets/theme/base/colors";
import { Box, styled, Typography } from "@mui/material";

const { gray4 } = colors;
export const Certify = ({ children }: any) => {
  return (
    <CertifyRoot>
      <Typography variant="subtitle3" color="gray2">
        {children}
      </Typography>
    </CertifyRoot>
  );
};

const CertifyRoot = styled(Box)(() => {
  const { primary_lighten3 } = colors;
  return {
    gap: "8px",
    border: `1px solid ${gray4}`,
    borderRadius: "4px",
    padding: "2px 6px",
    display: "flex",
    alignItems: "center",
    height: 21,
  };
});
