"use client";

import colors from "@/assets/theme/base/colors";
import {
  Box,
  Button,
  Divider,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";

const { gray2 } = colors;

export const MannerMenu = ({ children }: any) => {
  const manner = "36.5도";

  const [open, setOpen] = useState(false);

  const handleTooltipToggle = () => {
    setOpen(!open);
  };

  return (
    <CertifyRoot>
      <Box className="manner-title">
        <Typography variant="subtitle1">매너온도</Typography>
        <Typography variant="subtitle2">{manner}</Typography>
      </Box>
      <Box>
        <Tooltip
          className="tooltip"
          title={tooltipTitle()}
          open={open}
          onClick={handleTooltipToggle}
          arrow
          placement="bottom-start"
        >
          <Box>
            <Button variant="text" size="large">
              <InfoOutlinedIcon className="tooltip-icon" />
              <Typography
                className="tooltip-text"
                variant="body2"
                color="gray2"
              >
                지역 상세 설명 보기
              </Typography>
            </Button>
          </Box>
        </Tooltip>
      </Box>
    </CertifyRoot>
  );
};

const CertifyRoot = styled(Box)(() => {
  const { primary_lighten3 } = colors;
  return {
    gap: "8px",
    borderRadius: "4px",
    padding: "2px 6px",
    display: "flex",
    flexDirection: "column",
    height: 52,
    ".manner-title": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    ".tooltip-icon": {
      width: "18px",
      marginRight: "4px",
      color: gray2,
    },
    ".tooltip-text": {
      textDecoration: "underline",
    },
  };
});

export const tooltipTitle = () => {
  return (
    <TooltipTitleRoot>
      <Typography variant="body3">
        성사 후 피드백, 매니저 자체 평가, 프로필 입력 정도, 이벤트 참여 정도,
        경고 유무에 따라 변경되며, 매칭 우선 순위에 반영됩니다.
      </Typography>
    </TooltipTitleRoot>
  );
};

const TooltipTitleRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "0 4px 0 4px",
  };
});
