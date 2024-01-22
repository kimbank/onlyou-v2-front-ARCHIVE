"use client";

import colors from "@/assets/theme/base/colors";
import { Box, Button, Divider, styled, Typography } from "@mui/material";
export const Status = ({ children }: any) => {
  return (
    <StatusRoot>
      <Typography color="gray1" variant="subtitle1">
        이용권
      </Typography>
      <Box className="status-title">
        <Typography color="gray2" variant="subtitle2">
          사용 현황
        </Typography>
        <Typography variant="body2">사용이 N회 남았어요</Typography>
      </Box>
      <Divider />
      <Box className="status-title">
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

const StatusRoot = styled(Box)(() => {
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
