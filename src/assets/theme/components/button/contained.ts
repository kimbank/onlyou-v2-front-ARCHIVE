import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary, primary_darken, white, gray2, gray5 } = colors;
const { size } = typography;

const contained = {
  default: {
    height: "34px",
    width: "auto",
    padding: "8px 12px",
    fontSize: size.xs,
    borderRadius: "6px",
    color: white,
  },

  large: {
    width: "100%",
    minHeight: "52px",
    backgroundColor: primary,
    color: white,
    padding: "8px",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "100%",
    textAlign: "center",

    "&:hover, :focus": {
      backgroundColor: "#F16416",
    },

    "&.Mui-disabled": {
      backgroundColor: primary,
    },
  },

  primary: {
    backgroundColor: primary,

    "&:hover": {
      backgroundColor: primary_darken,
    },

    "&:focus:not(:hover)": {
      backgroundColor: "",
    },
  },

  secondary: {
    "&.MuiButton-root": {
      backgroundColor: gray5,
      color: gray2,
      "&:hover": {
        boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
        color: gray2,
      },
    },
    "&:focus:not(:hover)": {
      boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
      color: gray2,
    },
  },
};

export default contained;

// secondary:
// "&.MuiButton-root": {
//   backgroundColor: primary_lighten3,
//   border: `1px solid ${primary_lighten3}`,
//   color: primary?.main,

//   "&:hover": {
//     boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
//   },
//   "&:focus:not(:hover)": {
//     backgroundColor: primary_lighten3,
//     boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
//   },
//   "&:active, &:active:focus, &:active:hover": {
//     backgroundColor: primary_lighten3,
//   },
