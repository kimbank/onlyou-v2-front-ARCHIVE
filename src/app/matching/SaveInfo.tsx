"use client"

import { Box, Typography, Button } from "@mui/material";
import { ReportGmailerrorredOutlined } from "@mui/icons-material";
import styled from "@mui/material/styles/styled";


export const SaveInfo = () => {
  return (
    <SaveInfoRoot>
      <ReportGmailerrorredOutlined color="primary" />
      <Typography variant="body2">
        매칭신청서를 작성하다 중단해도 자동 저장되니<br />
        언제든 다시 작성할 수 있어요!
      </Typography>
    </SaveInfoRoot>
  )
}

const SaveInfoRoot = styled("div")(() => {
  return {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    gap: "4px",

    borderRadius: "8px",
    backgroundColor: "#F1F3F6",
    padding: "14px 12px",

    alignItems: "center",
    textAlign: "center",
  };
});

export default SaveInfo;
