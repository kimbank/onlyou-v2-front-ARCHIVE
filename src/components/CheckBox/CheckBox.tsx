"use client";

import colors from "@/assets/theme/base/colors";
import styled from "@emotion/styled";
import { CheckBox } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

interface CheckboxProps {
  onClick: () => void;
  buttonName?: string;
  checked: boolean;
}

export function Checkbox({ onClick, buttonName, checked }: CheckboxProps) {
  return (
    <CheckboxRoot
      className="checkbox-button"
      onClick={onClick}
      checked={checked}
    >
      <CheckBox className="checkbox" />
      <Typography variant="body2" className="label">
        {buttonName}
      </Typography>
    </CheckboxRoot>
  );
}
const CheckboxRoot = styled(Button)(({ checked }: CheckboxProps) => {
  const { primary, white, gray2, gray4, gray5, black } = colors;
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    border: `1px solid ${checked ? primary?.main : "none"}`,
    borderRadius: "6px",
    height: "40px",
    padding: "10px 12px",
    backgroundColor: checked ? white : gray5,
    gap: "10px",
    "&:hover": {
      backgroundColor: checked ? white : gray5,
    },
    "&:focus, &:focus-within": {
      backgroundColor: checked ? white : gray5,
    },
    ".checkbox": {
      width: 26.67,
      height: 26.67,
      backgroundColor: checked ? white : gray5,
      color: checked ? primary?.main : gray4,
      textAlign: "left",
      border: 0,
    },
    ".label": {
      color: checked ? black : gray2,
      textAlign: "left",
      fontWeight: checked ? "600" : "normal",
    },
  };
});
