"use client";

import { styled, Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import StepInfo from "./StepInfo";
import SaveInfo from "./SaveInfo";

import { discordAlert } from "@/api/tmpApplicationDiscord";


const MatchingIndex = () => {
  const router = useRouter();
  const handleHref = async () => {
    await discordAlert(true);
    router.push("application/me/values?type=init");
  };
  return (
    <MatchingRoot id="content">
      <Box className="title">
        <Typography variant="h1">신청서 완성하기</Typography>
        <Typography variant="body1">
          신청서를 완성하고
          <br />
          나와 맞는 인연을 빠르게 찾아보세요!
        </Typography>
      </Box>
      <Box className="content">
        <StepInfo />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleHref}
        >
          <Typography variant="button">매칭신청서 완성하기</Typography>
        </Button>
        <SaveInfo />
      </Box>
    </MatchingRoot>
  );
};

const MatchingRoot = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",

    "& .title": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    "& .content": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
  };
});

export default MatchingIndex;
