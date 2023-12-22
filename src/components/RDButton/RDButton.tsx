import { ButtonProps } from "@mui/material";
import { FC, forwardRef, ReactNode } from "react";
import RDButtonRoot from "./RDButtonRoot";

interface Props extends Omit<ButtonProps, "color" | "variant"> {
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "default";
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";

  children?: ReactNode;
  [key: string]: any;
}

const RDButton: FC<Props> = forwardRef(
  ({ color, variant, size, children, ...rest }, ref) => {
    return (
      <RDButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "contained" ? "contained" : variant}
        size={size}
        ownerState={{ color, variant, size }}
      >
        {children}
      </RDButtonRoot>
    );
  }
);

RDButton.defaultProps = {
  color: "white",
  variant: "contained",
  size: "medium",
  circular: false,
  iconOnly: false,
};
RDButton.displayName = "RDButton";
export default RDButton;
