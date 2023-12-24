import React, { CSSProperties } from "react";

import { Typography } from "@mui/material";
import RDButton from "../RDButton/RDButton";
interface RDCheckButtonProps {
  label?: string;
  checked?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "light";
  style?: CSSProperties;
}


const RDCheckButton = ({
  label,
  checked,
  onClick,
  size,
  children,
  variant,
  color,
  style,
}: RDCheckButtonProps) => {
  return (
    <RDButton
      label={label}
      style={style}
      checked={checked}
      onClick={onClick}
      variant={variant === "contained" ? "contained" : variant}
      size={size}
      color={checked ? "primary" : "light"}
    >
        {children ? children : (
        <Typography
          className="buttonText"
          style={{ color: checked ? "white" : "black" }}
        >
          {label}
        </Typography>
      )}
    </RDButton>
  );
};

export default RDCheckButton;
