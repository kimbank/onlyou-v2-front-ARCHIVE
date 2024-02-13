"use client";

import colors from "@/assets/theme/base/colors";
import { Box, Skeleton, styled, Typography } from "@mui/material";
import Image from "next/image";
import Birth from "public/icons/birth.svg";
import Home from "public/icons/home.svg";
import Job from "public/icons/job.svg";

const { gray2, gray5, white } = colors;

const MachingLoading = () => {
  return (
    <MachingLoadingRoot>
      <Typography color="gray2" variant="body2">
        인연을 찾는 중...
      </Typography>
      <Box className="loading-box">
        <Box className="loading top">
          <Skeleton animation="wave" sx={{ bgcolor: "white"}} />
        </Box>
        <Box className="item">
          <Image src={Job} width={20} alt="직장" />
          <Box className="loading" />
        </Box>
        <Box className="item">
          <Image src={Home} width={20} alt="거주지" />
          <Box className="loading" />
        </Box>
        <Box className="item">
          <Image src={Birth} width={20} alt="나이" />
          <Box className="loading" />
        </Box>
      </Box>
    </MachingLoadingRoot>
  );
};

const MachingLoadingRoot = styled(Box)(() => {
  return {
    backgroundColor: gray5,
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    height: 184,
    padding: "16px 20px",
    marginTop: 8,
    marginBottom: 4,
    ".loading-box": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: "12px",
      ".item": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      },
      ".top": {
        borderRadius: "6px",
      },
      ".loading:nth-child(1)": {
        minWidth: "233px",
        width: "90%",
        "&> span": {
          height: "35px !important",
        },
      },

      ".item:nth-child(2) > .loading": {
        backgroundColor: `white !important`,
        height: "16px",
        minWidth: "173px",
        width: "56.72%",
      },

      ".item:nth-child(3) > .loading": {
        backgroundColor: `white !important`,
        height: "16px",
        minWidth: "133px",
        width: "43.61%",
      },

      ".item:nth-child(4) > .loading": {
        backgroundColor: `white !important`,
        height: "16px",
        minWidth: "108px",
        width: "35.41%",
      },
    },
  };
});

export default MachingLoading;
