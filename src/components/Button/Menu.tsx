import { styled, Button } from "@mui/material";
import { ChevronRightRounded } from "@mui/icons-material";
import { style } from "@mui/system";

interface Props {
  children: React.ReactNode;
  variant?: "default" | "contained" | "outlined";
  onClick?: () => void;
}

const Menu = ({
  children,
  variant = "default",
  onClick = (() => {}),
}: Props) => {
  return (
    <StyledButton
      size="large"
      endIcon={<ChevronRightRounded />}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)({
  // height: "64px",
  // justifyContent: "space-between",
  // padding: "0px 16px 0px 20px",
  // width: "100%",
  // color: "#5C5F63 !important",
  // fontSize: "16px",
  // fontWeight: "400",
  // lineHeight: "100%",

  // backgroundColor: "#F1F3F6",

  // ":hover": {
  //   color: "#F1F3F6",
  //   backgroundColor: "#D3D6DB",
  // },

  // ":focus": {
  //   color: "#5C5F63",
  //   backgroundColor: "#F1F3F6",
  // },
});

export default Menu;
