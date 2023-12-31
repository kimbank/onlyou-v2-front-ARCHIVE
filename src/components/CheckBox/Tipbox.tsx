"use client";

import colors from "@/assets/theme/base/colors";
import { CheckBox } from "@mui/icons-material";
import { Box, Button, Typography, styled } from "@mui/material";


interface TipboxProps {
  onClick?: () => void;
  checked?: boolean;
  width?: string;
  onChange: () => void;
}

interface RootProps {
  checked?: boolean;
  width?: string;
}

export function Tipbox({
  onClick,
  checked,
  width,
  onChange,
}: TipboxProps) {
  return (
    <Root width={width} onClick={onChange} checked={checked}>
      <Button size="large" variant="text">
        <CheckBox className="checkbox" />
        <Typography variant="body2" className="checkbox-label">
          카카오톡 아이디를 <strong>&#39;검색허용&#39;</strong>으로
          설정하셨나요?
        </Typography>
      </Button>
    </Root>
  );
}

const Root = styled(Box)(({ checked }: RootProps) => {
  const { black } = colors;
  return {
    height:"20px",
    ".checkbox": {
      color: checked ? "#FF7700" : "#B2B0AE",
      border: "none",
      textAlign: "left",
      width: "24px",
      height: "24px",
      marginRight:"8px",
    },
  };
});
