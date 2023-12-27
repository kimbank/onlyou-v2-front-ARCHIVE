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
      backgroundColor: "",
    },
  },
  large: {
    backgroundColor: "#F70",
    width: "100%",
    minHeight: "52px",
    color: "#FFF",
    padding: "8px",

    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "100%",

    "&:hover, :focus": {
      backgroundColor: "#F16416",
    },

    "&:active, &:active:focus, &:active:hover": {
      backgroundColor: "#F16416",
    },

    // "& .material-icon, .material-icons-round, svg": {
    //   fontSize: `${pxToRem(16)} !important`,
    // },
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
