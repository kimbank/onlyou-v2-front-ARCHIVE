import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary, black , gray3 } = colors;
const { size, fontWeightBold } = typography;

// types
type Types = any;

const formControlLabel: Types = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
      border: `1px solid ${gray3}`,
      borderRadius: "6px",

      "&:hover": {
        backgroundColor: gray3,
      },
    },

    label: {
      display: "inline-block",
      fontSize: size.md,
      fontWeight: fontWeightBold,
      color: black,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,

      "&.Mui-disabled": {
        color: black,
      },
    },
  },
};

export default formControlLabel;
