"use client";

import BottomButton from "@/components/BottomButton/Next";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import CompleteLogo from "public/images/application/complete.png";
const Index = () => {
  const router = useRouter();

  const toHome = () => {
    router.push("matching/");
  };

  return (
    //추후에 매칭신청서 작성완료 부분을 인자로 받아 Complete템플릿 공통으로 사용예정
    <>
      <CloseHeader href="/" />
      <CompleteRoot>
        <Image src={CompleteLogo} alt="complete" width={176} height={176} />
        <Typography variant="h1">매칭신청서 작성완료</Typography>
        <Typography variant="body1">
          작성하느라 수고하셨어요
          <br />꼭 맞는 인연을 찾아드릴게요!
        </Typography>
      </CompleteRoot>
      <BottomButton>
        <Button variant="contained" size="large" onClick={toHome}>
          <Typography variant="subtitle1">매칭 홈으로</Typography>
        </Button>
      </BottomButton>
    </>
  );
};

export default Index;

import CloseHeader from "@/components/Header/CloseHeader";
import { styled } from "@mui/material";
import { useRouter } from "next/navigation";

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
      whiteSpace: "nowrap",
    },
    "& > :nth-child(3)": {
      marginTop: "8px",
      textAlign: "center",
    },
  };
});
