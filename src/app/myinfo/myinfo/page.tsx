"use client";

import { Box, Container, Typography, colors, styled } from "@mui/material";
import { Profile } from "./components/profile";
import Menu from "@/components/Button/Menu";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchMyInfo } from "@/actions/fetchMyInfo";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const loadMyInfo = async () => {
      try {
        const data = await fetchMyInfo();
        console.log("data", data);
      } catch (error) {
        console.error("error", error);
        alert("로그인이 필요합니다");
        router.push("/signin");
      }
    };
    loadMyInfo();
  }, [router]);

  return (
    <MyinfoRoot>
      <Box>마이인포</Box>
    </MyinfoRoot>
  );
};

export default Index;

const MyinfoRoot = styled(Container)(() => {
  return {
    ".menu-box": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    ".menu": {
      minHeight: "34px !important",
      height: "34px !important",
    },
  };
});
