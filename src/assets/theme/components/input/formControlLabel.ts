import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary, dark, info, disabled } = colors;
const { size, fontWeightBold } = typography;

// types
type Types = any;

const formControlLabel: Types = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
      border: `1px solid ${disabled.focus}`,
      borderRadius: "6px",

      "&:hover": {
        backgroundColor: disabled.focus,
      },
    },

    label: {
      display: "inline-block",
      fontSize: size.md,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,

      "&.Mui-disabled": {
        color: dark.main,
      },
    },
  },
};

export default formControlLabel;
