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
import ProfileCard from "../ProfileCard";
import DormancySwitch from "../DormancySwitch";
import Menu from "../Menu";

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
            <DormancySwitch />
          </Box>

          <Menu />

          <a href="/signout" style={{ color: "gray" }}>
            로그아웃
          </a>
          <a
            href="https://g8h7y7g082m.typeform.com/to/BZedJjPX"
            style={{ color: "gray" }}
          >
            회원 탈퇴
          </a>
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
    gap: "12px",
  },
});

export default Myinfo;
