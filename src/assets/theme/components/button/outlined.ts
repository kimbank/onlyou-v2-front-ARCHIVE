import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary, white, primary_lighten3, gray2, gray4, gray5 } = colors;
const { size } = typography;

const outlined = {
  default: {
    height: "34px",
    width: "auto",
    padding: "8px 12px",
    fontSize: size.xs,
    borderRadius: "6px",
    border: `1px solid ${primary}`,
    color: primary,
  },
  large: {
    width: "100%",
    minHeight: "52px",
    color: primary?.main,
    borderColor: primary?.main,
    padding: "8px",
    border: `1px solid ${primary?.main}`,
    "&:focus:not(:hover)": {
      backgroundColor: primary_lighten3,
      boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
    },
    "&:active, &:active:focus, &:active:hover": {
      backgroundColor: primary_lighten3,
    },

    "&:hover": {
      opacity: 0.75,
      border: `1px solid ${primary?.main}`,
    },
  },

  primary: {
    backgroundColor: primary,
    color: primary?.main,
    border: `1px solid ${primary?.main}`,
    "&:hover": {
      backgroundColor: primary_lighten3,
    },
    "&.MuiButton-root": {
      backgroundColor: primary,
      "&:hover": {
        backgroundColor: primary_lighten3,
      },
    },
  },

  secondary: {
    border: `1px solid ${gray4} !important`,
    color: `${gray2} !important`,
    "&:hover": {
      backgroundColor: gray5,
      border: `1px solid ${gray4}`,
    },
  },
};

export default outlined;
