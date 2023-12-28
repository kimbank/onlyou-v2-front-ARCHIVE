import contained from "./contained";
import outlined from "./outlined";
import root from "./root";
// import buttonText from "./text";

type Types = any;

const button: Types = {
  defaultProps: {
    disableRipple: false,
    variant: "contained",
  },
  styleOverrides: {
    root: { ...root },

    containedSizeSmall: { ...contained.small },
    containedSizeMedium: { ...contained.medium },
    containedSizeLarge: { ...contained.large },
    containedPrimary: { ...contained.primary },
    containedSecondary: { ...contained.secondary },
    outlinedSizeSmall: { ...outlined.small },
    outlinedSizeMedium: { ...outlined.medium },
    outlinedSizeLarge: { ...outlined.large },
    outlinedPrimary: { ...outlined.primary },
    outlinedSecondary: { ...outlined.secondary },
    // text: { ...buttonText.base },
    // textSizeSmall: { ...buttonText.small },
    // textSizeLarge: { ...buttonText.large },
    // textPrimary: { ...buttonText.primary },
    // textSecondary: { ...buttonText.secondary },
  },
};

export default button;
