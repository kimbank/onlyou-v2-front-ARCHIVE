import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary, white, primary_lighten3 } = colors;
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

    "&:hover": {
      opacity: 0.75,
      backgroundColor: primary_lighten3,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  primary: {
    "&.MuiButton-root": {
      backgroundColor: primary,
      "&:hover": {
        backgroundColor: primary_lighten3,
      },
      "&:focus": {
        backgroundColor: primary_lighten3,
      },
    },
  },

  secondary: {
    backgroundColor: primary,
    color: primary?.main,
    border: `1px solid ${primary?.main}`,

    "&:hover": {
      opacity: 0.75,
      border: `1px solid ${primary?.main}`,
    },
  },
};

export default outlined;
