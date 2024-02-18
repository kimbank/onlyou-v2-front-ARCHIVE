"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Divider, styled, Typography } from "@mui/material";
import { useMyinfo } from "@/api/hooks/useMyinfo";

export const Status = () => {
  const { myInfo } = useMyinfo();

  const handleBuyTicket = () => {
    if (myInfo?.integration === "frip") {
      window.open("https://www.frip.co.kr/products/172133", "_blank")
    } else {
      // TODO: 결제 페이지 변경 가능
      window.open("https://onlyourlove.imweb.me/26/?idx=1", "_blank")
    }
  }

  return (
    <StatusRoot>
      <Typography color="gray1" variant="subtitle1">
        이용권
      </Typography>
      <Box className="status-title">
        <Typography color="gray2" variant="subtitle2">
          사용 현황
        </Typography>
        <Typography variant="body2">사용이 {myInfo?.ticket || "N"}회 남았어요</Typography>
      </Box>
      <Divider />
      <Box className="status-title" sx={{ alignItems: 'center' }} onClick={handleBuyTicket}>
        <Typography color="gray2" variant="subtitle2">
          추가 구매
        </Typography>
        <Button>
          <Typography variant="body2">구매하기</Typography>
        </Button>
      </Box>
    </StatusRoot>
  );
};

const StatusRoot = styled(Box)(({ theme }) => {
  return {
    gap: "12px",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    height: 118,
    "& > :nth-child(1)": {
      marginBottom: "4px",
    },
    ".status-title": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };
});
