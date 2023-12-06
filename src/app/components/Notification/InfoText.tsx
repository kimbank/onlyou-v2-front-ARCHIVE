"use client";

import { Alert } from "@mui/material";
import { Button, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import * as React from "react";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

export function InfoText({ title, alertMessage, shadow = false }) {
  return (
    <div>
      {/* 이슈: 버튼이 figma와 다르게 양 옆으로 화면을 체우지 않습니다. */}
      <Button
        variant="contained"
        color="secondary"
        sx={{
          borderRadius: "8px",
          // height: '33px',  // 수정: 230926 높이가 정해져 있어 Typograpy가 위 아래로 삐져 나오는 문제 발생.
          padding: "8px 12px",
          backgroundColor: "#F7F4F2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: !shadow && "none", // initial, inherit, none, unset
          width: "100%",
        }}
      >
        <InfoIcon
          sx={{
            marginRight: 1,
            color: "#FF7700",
          }}
        />
        {/* 수정: 230906 제목 추가 부분. 
                    div로 감싼 후 제목을 위해 Typography를 새로 만들어 제목을 추가했습니다.
                    이슈: 230906 제목 텍스트 css를 수정해야 합니다.
                */}
        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          {title && (
            <Typography
              variant="subtitle1"
              className="caption"
              align="left"
              sx={{
                color: "#666563",
              }}
            >
              {title}
            </Typography>
          )}
          {alertMessage && (
            <Typography
              // variant='subtitle1'
              // className="caption"
              align="left"
              sx={{
                color: "#666563",
              }}
            >
              {alertMessage}
            </Typography>
          )}
        </Container>
      </Button>
    </div>
  );
}
