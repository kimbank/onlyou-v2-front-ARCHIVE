import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary, primary_darken , white } = colors;
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

    "&:active, &:active:focus, &:active:hover": {
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
    backgroundColor: "#F1F3F6",
    color: "#5C5F63",

    "&:hover": {
      backgroundColor: "#F16416",
      color: "#fff",
    },

    "&:focus:not(:hover)": {
      backgroundColor: "#F16416",
      color: "#fff",
    },
  },
};

export default contained;
