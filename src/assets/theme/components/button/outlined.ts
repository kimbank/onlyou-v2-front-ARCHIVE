import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { transparent, light, info, secondary,primary } = colors;
const { size } = typography;

const outlined = {
  small: {
    minHeight: "34px",
    width: "auto",
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,
    border: `1px solid ${primary.main}`,
    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main,
      boxShadow: `0 4px 4px rgba(0, 0, 0, 0.3)`,
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },
  medium: {
    minHeight: "52px",
    width: "50%",
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,
    border: `1px solid ${primary.main}`,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },
  large: {
    width: "100%",
    minHeight: "52px",
    color: light.main,
    borderColor: light.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,
    border: `1px solid ${primary.main}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },
};

export default outlined;
