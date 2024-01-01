import { ButtonProps } from "@mui/material";
import contained from "./contained";
import outlined from "./outlined";
import root from "./root";
import buttonText from "./text";

const button: any = {
  defaultProps: {
    disableRipple: false,
    variant: "contained",
  },
  styleOverrides: {
    //기본버튼 아무런 값 x
    root: { ...root },
    //variant="contained" default="default"
    containedSizeMedium: { ...contained.default },
    //variant="contained" size="lage"
    containedSizeLarge: { ...contained.large },
    //color="primary"
    containedPrimary: { ...contained.primary },
    //color="secondary"
    containedSecondary: { ...contained.secondary },
    outlinedSizeMedium: { ...outlined.default },
    outlinedSizeLarge: { ...outlined.large },
    outlinedPrimary: { ...outlined.primary },
    outlinedSecondary: { ...outlined.secondary },
    text: { ...buttonText.base },
    textSizeSmall: { ...buttonText.small },
    textSizeLarge: { ...buttonText.large },
    textPrimary: { ...buttonText.primary },
    textSecondary: { ...buttonText.secondary },
  },
};

export default button;
