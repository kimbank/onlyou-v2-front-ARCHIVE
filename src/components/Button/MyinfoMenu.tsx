"use client";

import Link from "next/link";
import { styled, Button, Typography } from "@mui/material";
import { ChevronRightRounded } from "@mui/icons-material";
import { style } from "@mui/system";
import colors from "@/assets/theme/base/colors";
import contained from "@/assets/theme/components/button/contained";

interface Props {
  children: React.ReactNode;
  href: string;
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
    <Link href={href} style={{ width: "100%" }}>
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
        <Typography variant="body1">
          {children}
        </Typography>
      </MenuRoot>
    </Link>
  );
};

const MenuRoot = styled(Button)(() => {
  return {
    height: "44px",
    minHeight: "44px",
    justifyContent: "space-between",
    padding: "0px 16px 0px 20px",
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
