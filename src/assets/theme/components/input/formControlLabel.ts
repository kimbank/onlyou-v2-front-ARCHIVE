import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary, black, gray3 } = colors;
const { size, fontWeightBold } = typography;

// types
type Types = any;

const formControlLabel: Types = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: "24px",
      border: `1px solid ${primary?.main}`,
      borderRadius: "6px",
      padding: "8px 16px 8px 16px",
      gap: "8px",
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
      transform: "translateY(1)",
      "&.Mui-disabled": {
        color: black,
      },
    },
  },
};

export default formControlLabel;
