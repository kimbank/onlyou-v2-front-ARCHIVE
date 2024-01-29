"use client";

import colors from "@/assets/theme/base/colors";
import { Box, Divider, styled, Typography } from "@mui/material";

import Image from "next/image";
import CircleIcon from "public/icons/circleLogo.svg";
import Birth from "public/icons/birth.svg";
import Home from "public/icons/home.svg";
import Job from "public/icons/job.svg";

const { gray2, gray5, primary } = colors;

const MachingCard = () => {
  return (
    <MachingCardRoot>
      <Box className="title">
        <Image src={CircleIcon} alt="CircleIcon" width={24} height={24} />
        <Box>
          <Typography color="gray2" variant="subtitle2">
            내 이상형이 인기가 너무 많아요!
          </Typography>
          <Typography color="gray2" variant="body2">
            시간이 걸리더라도 정확하게 매칭해 드릴게요.
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Typography variant="body2">
        예상매칭주기 : <strong>9일+</strong>
      </Typography>
    </MachingCardRoot>
  );
};

const MachingCardRoot = styled(Box)(() => {
  return {
    borderRadius: 6,
    border: `1px solid ${primary?.main}`,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    height: 116,
    padding: "16px",
    ".title": {
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
    },
  };
});

export default MachingCard;
