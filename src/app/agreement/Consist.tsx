import { Box, Button, styled, Typography } from "@mui/material";

import CircleIcon from "public/icons/circleLogo.svg";
import Image from "next/image";
import ConsistCard from "./ConsistCard";

export const Consist = () => {
  const handleGoBack = () => {
    console.log("만남성사");
  };

  return (
    <ConsistRoot>
      <Typography variant="h1">
        성사된 인연의 프로필이에요
        <Typography variant="body2">
          카카오톡 아이디는 7일 동안만 공개될 예정이에요.
        </Typography>
      </Typography>
      <Box className="profile-box">
        <Typography variant="subtitle1">2024-01-01</Typography>
        <ConsistCard />
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
          onClick={() => handleGoBack()}
        >
          <Typography variant="button">만남 현황 알려주기</Typography>
        </Button>
      </Box>
    </ConsistRoot>
  );
};

const ConsistRoot = styled(Box)(() => {
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
