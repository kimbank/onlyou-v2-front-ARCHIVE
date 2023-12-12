import { ButtonProps } from "@mui/material";
import { FC, forwardRef, ReactNode } from "react";
import MDButtonRoot from "./MDButtonRoot";

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

const MDButton: FC<Props> = forwardRef(
  ({ color, variant, size, children, ...rest }, ref) => {
    return (
      <MDButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "contained" ? "contained" : variant}
        size={size}
        ownerState={{ color, variant, size }}
      >
        {children}
      </MDButtonRoot>
    );
  }
);

MDButton.defaultProps = {
  color: "white",
  variant: "contained",
  size: "medium",
  circular: false,
  iconOnly: false,
};
MDButton.displayName = "MDButton";
export default MDButton;
