"use client";

import Image from "next/image";
import { styled, Box, Button, Typography } from "@mui/material";
import CircleIcon from "public/icons/circleLogo.svg";

import { useAgreementList } from "@/api/hooks/useAgreementList";
import TargetProfileCard from "./TargetProfileCard";


const AgreementExistPage = () => {
  const { agreementList, isLoading, isError } = useAgreementList();
  
  return (
    <AgreementExistRoot>
    <Typography variant="h1">
      성사된 인연의 프로필이에요
      <Typography variant="body2">
        카카오톡 아이디는 7일 동안만 공개될 예정이에요.
      </Typography>
    </Typography>
    <Box className="profile-box">
      {
        agreementList?.map((targetData: any, index: number) => {
          return (
            <TargetProfileCard key={index} targetData={targetData} />
          )
        })
      }
    </Box>
      <Box className="caption">
        <Image src={CircleIcon} alt="logo" width={24} height={24} />
        <Typography variant="body2">
          만남을 잘 이어가고 계신가요?
          <br />
          아쉽게 종료되셨다면 아래 버튼을 통해 알려주세요!
          <br />
          <br />
          성사탭 프로필 삭제, 재매칭 등 적절한 조치를 취해드리겠습니다.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => { window.open("https://g8h7y7g082m.typeform.com/to/fEMqRBvm", "_blank") }}
        >
          <Typography variant="button">만남 현황 알려주기</Typography>
        </Button>
      </Box>
    </AgreementExistRoot>
  )
}

const AgreementExistRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    "&> h1": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    ".profile-box": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    ".caption": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      "&> p": {
        maxWidth: "276px",
      },
      "&> button": {
        marginTop: "4px",
      },
    },
  };
});

export default AgreementExistPage;
