import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { white } = colors;
const { size } = typography;

const buttonText = {
  base: {
    color: white.main,
    boxShadow: "none",
    display:"flex",
    flexDirection :"flex-start",

    "&:hover": {
      boxShadow: "none",
    },

    "&:focus": {
      boxShadow: "none",
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none",
    },

    "&:disabled": {
      boxShadow: "none",
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    padding: 0,
    fontSize: size.sm,
    height:"20px !important",
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {

    "&:hover": {
    },

    "&:focus:not(:hover)": {
      boxShadow: "none",
    },
  },

  secondary: {

    "&:hover": {
    },

    "&:focus:not(:hover)": {
      boxShadow: "none",
    },
  },
};

export default buttonText;
