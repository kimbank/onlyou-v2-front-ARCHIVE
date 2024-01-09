"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

import { styled, Box, Typography, Button } from "@mui/material";
import EmptyHeader from "@/components/Header/EmptyHeader";

const SignoutPage = () => {
  const router = useRouter();

  const handleGoBack = async () => {
    await axios.get("/signout");
    router.push("/");
  };

  return (
    <>
      <EmptyHeader />
      <SignoutRoot id="content">
        <Typography variant="h1">로그아웃이 완료되었습니다.</Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => handleGoBack()}
        >
          <Typography variant="button">메인 페이지로 돌아가기</Typography>
        </Button>
      </SignoutRoot>
    </>
  );
};

const SignoutRoot = styled("div")(() => {
  return {
    maxWidth: "480px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",

    ".center-box": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };
});

export default SignoutPage;
