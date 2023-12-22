"use client";

import { CheckBox } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import RDCheckBoxRoot from "./RDCheckBoxRoot";

interface CheckboxProps {
  onClick?: () => void;
  checked?: boolean;
  width?: string;
  onChange: () => void;
}

// Figma: Checked checkbox
export function RDCheckbox({
  onClick,
  checked,
  width,
  onChange,
}: CheckboxProps) {
  return (
    <RDCheckBoxRoot width={width} onClick={onChange} checked={checked}>
      <Button className="checkbox-button">
        <CheckBox className="checkbox" />
        <Typography variant="body2" className="checkbox-label">
          카카오톡 아이디를 <strong>&#39;검색허용&#39;</strong>으로
          설정하셨나요?
        </Typography>
      </Button>
    </RDCheckBoxRoot>
  );
}
