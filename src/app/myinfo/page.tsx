"use client";

import { useRouter } from "next/navigation";
import { Box, styled, Typography } from "@mui/material";

import HomeHeader from "@/components/Header/HomeHeader";
import BottomNavi from "@/components/BottomNavi";
import { FullDivider } from "@/components/Dividers/FullDivider";

import { useMyinfo } from "@/api/hooks/useMyinfo";

import MyinfoProfileCard from "./MyinfoProfileCard";
import { MannerMenu } from "./MannerMenu";
import { Status } from "./Status";
import Menu from "./Menu";
import DormancyToggle from "./DormancyToggle";

import { useDispatch } from "react-redux";
import { showModal } from "@/store/home/modalSlice";

import Loading from "@/components/loading";


const Myinfo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { myInfo, isLoading, isError, mutate } = useMyinfo();

  if (isLoading || isError) {
    if (isError) {
      dispatch(
        showModal({
          title: "서버 에러",
          body: "잠시 후 다시 시도해주세요.",
          cancel: "로그아웃",
          complete: "새로고침",
          onCancel: () => router.push("/signout"),
          onComplete: () => window.location.reload(),
        })
      );
    }
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <HomeHeader />
      <div id="content">
        <MyinfoRoot>
          <Typography variant="h1">내 정보</Typography>
          <Box className="profile-wrapper">
            <MyinfoProfileCard />
            <MannerMenu />
            <FullDivider />
            <Status />
            <FullDivider />
          </Box>
          <Menu />
          <FullDivider />
          <DormancyToggle />
          <FullDivider />
          <Box className="signout">
            <span onClick={() =>
              dispatch(
                showModal({
                  title: "로그아웃",
                  body: "로그아웃 하시겠어요?",
                  cancel: "취소",
                  complete: "로그아웃",
                  onComplete: () => router.push("/signout"),
                }))
            }>
              <Typography variant="body2">로그아웃</Typography>
            </span>
            <p>|</p>
            <a href="https://g8h7y7g082m.typeform.com/to/BZedJjPX" target="_blank">
              <Typography variant="body2">회원 탈퇴</Typography>
            </a>
          </Box>
        </MyinfoRoot>
      </div>
      <BottomNavi />
    </>
  );
};

const MyinfoRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  ".profile-wrapper": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  ".signout": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    aliginItems: "center",
    justifyContent: "space-evenly",

    "& span": {
      cursor: "pointer",
    },
  },
});

export default Myinfo;
