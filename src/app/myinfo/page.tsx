"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { styled, Box, Container, Typography } from "@mui/material";
import Error from "@/components/error";

import {
  Certification,
  DangerNotification,
} from "@/components/Notification/legacy";
import { MainButton, SubMiniFullButton } from "@/components/Button/legacy";
import { DormantToggle } from "@/components/Toggle";
import Modal from "@/components/Modal/legacy";

import HomeHeader from "@/components/Header/HomeHeader";
import BottomNavi from "@/components/BottomNavi";

import { useMyinfo } from "@/api/hooks/useMyinfo";

import DormancyToggle from "./DormancyToggle";
import ProfileCard from "./ProfileCard";
import Menu from "./Menu";
import { MannerMenu } from "./MannerMenu";
import { MyinfoDivider } from "./MyinfoDivider";
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
            <ProfileCard />
            <MannerMenu />
            <MyinfoDivider />
            <Status />
            <MyinfoDivider />
          </Box>
          <Menu />
          <MyinfoDivider />
          <DormancyToggle />
          <MyinfoDivider />
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
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    gap: "74px",
  },
});

export default Myinfo;
