"use client";

import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import DormancyToggle from "./DormancyToggle";
import DormancyImage from "public/images/dormancy/3dtoggle_1080x1080.png";
import { useMatchingStatus } from "@/api/hooks/useMatchingStatus";
import NoticeModal from "../NoticeModal";

import { styled } from "@mui/material";

const DormancyPage = () => {

  return (
    <DormancyRoot id="content">
      <NoticeModal />
      <Box className="title">
        <Typography variant="h1">매칭이 중단되었어요.</Typography>
        <Typography variant="body1">
          다시 매칭을 받고 싶으시면 매칭을 활성화 해주세요.
        </Typography>
      </Box>
      <ImageBox>
        <Image src={DormancyImage} width={176} height={176} alt="휴면" />
      </ImageBox>
      <DormancyToggle />
    </DormancyRoot>
  );
};

const DormancyRoot = styled("div")(({ theme }) => {
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

const ImageBox = styled("div")(({ theme }) => ({
  display: "flex",
  height: "208px",
  width: "100%",
  borderRadius: "8px",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  backgroundColor: String(theme.palette.gray1),
}));

export default DormancyPage;
