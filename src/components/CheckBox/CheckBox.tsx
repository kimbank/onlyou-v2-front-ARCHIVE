"use client";

import colors from "@/assets/theme/base/colors";
import styled from "@emotion/styled";
import { CheckBox } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
interface CheckboxProps {
  onClick: () => void;
  buttonName?: string;
  checked: boolean;
  disabled?: boolean;
}

export function Checkbox({
  onClick,
  buttonName,
  checked,
  disabled,
}: CheckboxProps) {
  return (
    <CheckboxRoot
      className="checkbox-button"
      onClick={onClick}
      checked={checked}
      disabled={disabled}
    >
      {disabled ? (
        <DoDisturbAltIcon className="disabled-icon" />
      ) : (
        <CheckBox className="checkbox" />
      )}

      <Typography variant="body2" className="label">
        {buttonName}
      </Typography>
    </CheckboxRoot>
  );
}
const CheckboxRoot = styled(Button)(({ checked, disabled }: CheckboxProps) => {
  const { primary, white, gray2, gray3, gray4, gray5, black } = colors;
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
    "&:disabled": {
      backgroundColor: gray4,
      color: "#fff",
      border: `1px solid ${gray3}`,
    },
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
    ".disabled-icon": {
      width: 16,
      height: 16,
    },
    ".label": {
      color: disabled ? white : checked ? black : gray2,
      textAlign: "left",
      fontWeight: disabled ? "600" : checked ? "600" : "normal",
    },
  };
});
