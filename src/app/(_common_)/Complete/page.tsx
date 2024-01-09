"use client";

import SubmitNavButton from "@/components/NavBars/SubmitNavButton";
import { Typography } from "@mui/material";
import Image from "next/image";

const Index = () => {
  return (
    //추후에 매칭신청서 작성완료 부분을 인자로 받아 Complete템플릿 공통으로 사용예정
    <>
      <CloseHeader href="/" />
      <CompleteRoot>
        <Image
          src="/complete_1080x1080.png"
          alt="complete"
          width={176}
          height={176}
        />
        <Typography variant="h1">매칭신청서 작성완료</Typography>
        <Typography variant="body1">
          작성하느라 수고하셨어요
          <br />꼭 맞는 인연을 찾아드릴게요!
        </Typography>
      </CompleteRoot>
      <SubmitNavButton submitText="매칭 홈으로" submitHref="/matching" />
    </>
  );
};

export default Index;

import { styled } from "@mui/material";
import CloseHeader from "@/components/Header/CloseHeader";

const CompleteRoot = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    "& > :nth-child(2)": {
      marginTop: "16px",
    },
    "& > :nth-child(3)": {
      marginTop: "8px",
      textAlign: "center",
    },
  };
});
