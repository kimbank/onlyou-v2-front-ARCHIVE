"use client";

import { Box, Container, Typography, colors, styled } from "@mui/material";
import { Profile } from "./components/profile";
import Menu from "@/components/Button/Menu";

const Index = () => {
  return (
    <MyinfoRoot>
      <Box>
        <Typography variant="h1">내 정보</Typography>
      </Box>
      <Profile />
      <Box className="menu-box">
        <Typography variant="subtitle1">매칭 신청서 수정하기</Typography>
        <Menu className="menu">
          <Typography variant="body1">내 정보 수정하기</Typography>
        </Menu>
        <Menu className="menu">
          <Typography variant="body1">이상형 정보 수정하기</Typography>
        </Menu>
        <Menu className="menu">
          <Typography variant="body1">인증 뱃지 수정하기</Typography>
        </Menu>
        <Menu className="menu">
          <Typography variant="body1">사진 수정하기</Typography>
        </Menu>
        <Menu className="menu">
          <Typography variant="body1">편지 수정하기</Typography>
        </Menu>
      </Box>
    </MyinfoRoot>
  );
};

export default Index;

const MyinfoRoot = styled(Container)(() => {
  return {
    ".menu-box":{
        display:"flex",
        flexDirection:"column",
        gap:"8px",
    },
    ".menu":{
        minHeight:"34px !important",
        height:"34px !important"
    }
  };
});
