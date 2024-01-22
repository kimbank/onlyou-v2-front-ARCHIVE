import root from "./root";
import filled from "./filled";

type Types = any;

const chip: Types = {
  defaultProps: {
    disableRipple: false,
  },
  styleOverrides: {
    root: { ...root },

    sizeMedium: { ...filled.medium },
    colorDefault: { ...filled.default },
    colorPrimary: { ...filled.primary },
    colorSecondary: { ...filled.secondary },
  },
};

export default chip;
