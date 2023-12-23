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

export function Checkbox({
  onClick,
  buttonName,
  checked,
}: CheckboxProps) {
  return (
      <CheckboxRoot className="checkbox-button" onClick={onClick} checked={checked}>
        <CheckBox className="checkbox"/>
        <Typography variant="body2" className="label">
          {buttonName}
        </Typography>
      </CheckboxRoot>
  );
}
const CheckboxRoot = styled(Button)(({ checked } :CheckboxProps ) => {
  
  const { primary ,white ,gray,dark} = colors
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    border: `1px solid ${checked ? primary.main : "none"}`,
    borderRadius: "8px",
    height: "33px",
    padding: "8px 12px",
    backgroundColor: checked ? white.main : gray["500"],
    gap: "10px",
    "&:focus, &:focus-within": {
      backgroundColor: checked ? white.main : gray["500"],
    },
    ".checkbox": {
      width: 20,
      height: 20,
      backgroundColor: checked ? white.main : gray["500"],
      color: checked ? primary.main : gray["400"],
      border: "none",
      textAlign: "left",
    },
    ".label": {
      color: checked ? dark.main : gray["200"],
      textAlign: "left",
    },
  };});