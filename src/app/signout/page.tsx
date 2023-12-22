"use client"

import { styled, Box, Typography } from "@mui/material";
import EmptyHeader from "@/components/Header/EmptyHeader";
import RDButton from "@/components/RDButton/RDButton";


const SignoutPage = () => {

  return (
    <>
      <EmptyHeader />
      <SignoutRoot id="content">
        <Typography variant="h1">로그아웃이 완료되었습니다.</Typography>
        <RDButton variant="contained" color="primary" size="large">
          <Typography variant="button">메인 페이지로 돌아가기</Typography>
        </RDButton>
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
