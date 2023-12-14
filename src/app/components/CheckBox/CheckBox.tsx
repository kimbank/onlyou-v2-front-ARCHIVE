"use client";

import styled from "@emotion/styled";
import { CheckBox } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

interface CheckboxProps {
  onClick: () => void;
  buttonName: string;
  shadow?: boolean;
  checked: boolean;
  width: string;
}

const CheckboxRoot = styled("div")<{
  checked: boolean;
  shadow: boolean;
  width: string;
}>(({ theme, checked, shadow, width }) => ({
  ".checkbox": {
    backgroundColor: checked ? "#fff" : "#F7F4F2",
    color: checked ? "#FF7700" : "#B2B0AE",
    border: "none",
    textAlign: "left",
  },
  ".checkbox-button": {
    border: `1px solid ${checked ? "#FF7700" : "none"}`,
    borderRadius: "8px",
    height: "33px",
    padding: "8px 12px",
    backgroundColor: checked ? "#fff" : "#F7F4F2",
    width: width,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",

    // boxShadow: shadow ? theme.shadows[1] : "none",
  },
  ".checkbox-label": {
    fontFamily: "Pretendard-Semibold",
    fontSize: "14px",
    letterSpacing: "1.25px",
    color: checked ? "#000" : "#B2B0AE",
    textAlign: "left",
  },
}));
// Figma: Checked checkbox
export function Checkbox({
  onClick,
  buttonName,
  shadow = false,
  checked,
  width,
}: CheckboxProps) {
  return (
    <CheckboxRoot
      width={width}
      onClick={onClick}
      checked={checked}
      shadow={shadow}
    >
      <Button className="checkbox-button">
        <CheckBox className="checkbox" />
        <Typography variant="body2" className="checkbox-label">
          {buttonName}
        </Typography>
      </Button>
    </CheckboxRoot>
  );
}
