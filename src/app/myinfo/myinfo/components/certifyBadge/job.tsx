"use client";

import colors from "@/assets/theme/base/colors";
import { Box, Typography, styled } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
export const Job = () => {
  return (
    <JobRoot>
      <VerifiedRoundedIcon color="primary" />
      <Typography variant="subtitle3" color="primary">
        직장 인증
      </Typography>
    </JobRoot>
  );
};

const JobRoot = styled(Box)(() => {
  const { white } = colors;
  return {
    width: "97px",
    height: "32px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: white,
    gap: "8px",
    borderRadius: "4px",
    padding: "12px 6px 12px 6px",
    alignItems: "center",
  };
});
