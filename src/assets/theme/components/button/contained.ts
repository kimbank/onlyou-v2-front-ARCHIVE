import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { white, info, secondary } = colors;
const { size } = typography;

const contained = {
  small: {
    minHeight: "34px",
    width: "auto",
    padding: '8px 12px',
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  medium: {
    minHeight: "52px",
    width: "50%",
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: info.main,

    "&:hover": {
      backgroundColor: info.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
    },
  },
  large: {
    backgroundColor: info.main,
    width: "100%",
    minHeight: "52px",
    color: white.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: white.main,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
