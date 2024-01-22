"use client";

import BottomNavi from "@/components/BottomNavi";
import HomeHeader from "@/components/Header/HomeHeader";
import { Box, styled, Typography } from "@mui/material";
import MachingCard from "./MachingCard";
import MachingLoading from "./MachingLoading";
import { InfoOutlined } from "@mui/icons-material";
const FindPage = () => {
  return (
    <>
      <HomeHeader />
      <FindRoot id="content">
        <Typography variant="h1">
          인연을 찾는 중이에요.
          <Typography variant="body1">
            ONLYou는 느리더라도 정확한 매칭을 추구해요.
          </Typography>
        </Typography>
        <MachingLoading />
        <MachingCard />
        <ExplainBox>
          <span className="title">
            <InfoOutlined sx={{ fontSize: "18px" }} />
            <p>예상 매칭 주기란?</p>
          </span>
          <p>
            ONLYou는 회원님의 인기도와 조건 설정에 따라 매칭 주기를 조절하고
            있습니다. 많은 분들께서 회원 님과 매칭받기를 원할 수록, 회원님의
            조건 상세 설정이 느슨할 수록, 매칭이 짧은 주기로 자주 이루어집니다.
          </p>
        </ExplainBox>
      </FindRoot>
      <BottomNavi />
    </>
  );
};

const FindRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    "&> h1": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
  };
});
const ExplainBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  color: "#5C5F63",

  fontSize: "12px",
  lineHeight: "140%",

  ".title": {
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    alignItems: "center",
    fontWeight: "600",
  },
});

export default FindPage;
