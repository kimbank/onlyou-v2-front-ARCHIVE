import { Box, Button, styled, Typography } from "@mui/material";

import Stopwatch from "public/icons/stopwatch.svg";
import Image from "next/image";
import ConnectCard from "./ConnectCard";

export const Connect = () => {
  const handleGoBack = () => {
    console.log("만남성사");
  };

  return (
    <ConnectRoot>
      <Typography variant="h1">
        오늘의 인연이에요
        <Typography variant="body2">
          마감 전까지 선택을 완료해 주세요!
        </Typography>
      </Typography>
      <Box className="profile-box">
        <ConnectCard />
      </Box>
      <Box className="caption">
        <Box>
          <Image src={Stopwatch} alt="logo" width={18} height={18} />
          <Typography color="warning" variant="body2">
            선택 마감까지 99:99:99
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => handleGoBack()}
        >
          <Typography variant="button">수락하기</Typography>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleGoBack()}
        >
          <Typography variant="button">거절하기</Typography>
        </Button>
      </Box>
    </ConnectRoot>
  );
};

const ConnectRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    "&> h1": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    ".profile-box": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "8px",
    },
    ".caption": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      "&> div": {
        display: "flex",
        flexDirection: "row",
        gap: "6px",
        "&> p": {
          color: "#FF4A31",
        },
      },

      "&> button:first-of-type": {
        marginTop: "4px",
      },
    },
  };
});
