"use client"

import { styled, Box, Typography, Button } from "@mui/material";
import EmptyHeader from "@/components/Header/EmptyHeader";

const SignoutPage = () => {

  return (
    <>
      <EmptyHeader />
      <SignoutRoot id="content">
        <Typography variant="h1">로그아웃이 완료되었습니다.</Typography>
        <Button variant="contained" color="primary" size="large">
          <Typography variant="button">메인 페이지로 돌아가기</Typography>
        </Button>
      </SignoutRoot>
    </>
  );
}

const SignoutRoot = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  };
});

export default SignoutPage;
