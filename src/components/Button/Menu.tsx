import { styled, Button } from "@mui/material";
import { ChevronRightRounded } from "@mui/icons-material";
import { style } from "@mui/system";
import colors from "@/assets/theme/base/colors";
import contained from "@/assets/theme/components/button/contained";

interface Props {
  children: React.ReactNode;
  variant?: "default" | "contained" | "outlined";
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Menu = ({
  children,
  variant = "contained",
  color = "secondary",
  onClick = () => {},
}: Props) => {
  return (
    <MenuRoot
      color={color === "primary" ? "primary" : "secondary"}
      variant={variant === "outlined" ? "outlined" : "contained"}
      size="large"
      endIcon={
        <ChevronRightRounded fontSize="large" sx={{ fontSize: "24px !important" }} />
      }
      onClick={onClick}
    >
      {children}
    </MenuRoot>
  );
};

const MenuRoot = styled(Button)(({color }) => {

    return {
      height: "64px",
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
  }
);

export default Menu;
