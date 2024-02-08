"use client";


import React from "react";
import { styled, Typography, Button } from "@mui/material";

import EmptyHeader from "@/components/Header/EmptyHeader";
import Loading from "@/components/loading";


const SignoutPage = () => {
  React.useEffect(() => {
    window.location.href = "/";
  }, []);

  return (
    <>
      <Loading />
      <EmptyHeader />
      <SignoutRoot id="content">
        <Typography variant="h1">로그아웃이 완료되었습니다.</Typography>
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
