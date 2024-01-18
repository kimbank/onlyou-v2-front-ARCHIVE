"use client";

import { ChevronRightRounded } from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "contained" | "outlined";
  color?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

const Menu = ({
  children,
  href,
  variant = "contained",
  color = "secondary",
  onClick = () => {},
}: Props) => {
  return (
    <Link href={href ?? ""} style={{ width: "100%" }}>
      <MenuRoot
        color={color === "primary" ? "primary" : "secondary"}
        variant={variant === "outlined" ? "outlined" : "contained"}
        size="large"
        endIcon={
          <ChevronRightRounded
            fontSize="large"
            sx={{ fontSize: "24px !important" }}
          />
        }
        onClick={onClick}
      >
        <Typography variant="body1">{children}</Typography>
      </MenuRoot>
    </Link>
  );
};

const MenuRoot = styled(Button)(() => {
  return {
    height: "44px",
    minHeight: "44px",
    justifyContent: "space-between",
    padding: "16px 16px 16px 20px",
    width: "100%",

    ":hover": {
      backgroundColor: "#D3D6DB",
    },

    ":focus": {
      backgroundColor: "#F1F3F6",
    },
  };
});

export default Menu;
