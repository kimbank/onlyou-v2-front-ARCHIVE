import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary,white } = colors;
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
  small: {
    minHeight: "34px",
    width: "auto",
    padding: "8px 12px",
    fontSize: size.xs,
    color: white,
    "&:hover": {
      opacity: 0.75,
      backgroundColor: primary,
      boxShadow: `0 4px 4px rgba(0, 0, 0, 0.3)`,
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },
  medium: {
    minHeight: "52px",
    // width: "50%",
    // padding: `${pxToRem(12)} ${pxToRem(28)}`,
    // fontSize: size.sm,
    color: primary,
    border: `1px solid ${primary}`,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },
  large: {
    width: "100%",
    minHeight: "52px",
    color: primary?.main,
    borderColor: primary?.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,
    border: `1px solid ${primary?.main}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: primary,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  primary: {
    backgroundColor: primary,

    "&:hover": {
      backgroundColor: primary,
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
