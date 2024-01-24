"use client";

import { useState } from "react";

import Error from "@/components/error";
import { Box, styled, Typography } from "@mui/material";

import { DangerNotification } from "@/components/Notification/legacy";

import BottomNavi from "@/components/BottomNavi";
import HomeHeader from "@/components/Header/HomeHeader";

import { useMyinfo } from "@/api/hooks/useMyinfo";

import { FullDivider } from "../../components/Dividers/FullDivider";
import DormancyToggle from "./DormancyToggle";
import { MannerMenu } from "./MannerMenu";
import Menu from "./Menu";
import MyinfoProfileCard from "./MyinfoProfileCard";
import { Status } from "./Status";

const Myinfo = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const { myInfo, isLoading, isError } = useMyinfo();

  if (isError) return <Error />;

  return (
    <>
      <HomeHeader />
      <div id="content">
        <DangerNotification
          alertMessage={alertMessage}
          visible={visible}
          setVisible={setVisible}
        />
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
            <a href="/signout">
              <Typography variant="body2">로그아웃</Typography>
            </a>
            <p>|</p>
            <a href="https://g8h7y7g082m.typeform.com/to/BZedJjPX">
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
  },
});

export default Myinfo;
