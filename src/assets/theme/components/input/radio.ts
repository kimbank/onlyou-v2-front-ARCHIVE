import colors from "../../base/colors";
import pxToRem from "../../functions/pxToRem";

const { primary } = colors;

// types
type Types = any;

const radio: Types = {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        width: "24px",
        height: "24px",
        color: "999da3",
        borderRadius: "50%",
      },
      "&.Mui-checked .MuiSvgIcon-root": {
        color: primary?.main,
      },

      "&:after": {
        transition: "opacity 250ms ease-in-out",
        content: `""`,
        position: "absolute",
        width: pxToRem(14),
        height: pxToRem(14),
        borderRadius: "50%",
        opacity: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
      },

      "&:hover": {
        opcity: 0.75,
        backgroundColor: primary?.main,
      },
      "&.Mui-checked": {
        color: "#000000 !important",
      },

      "&.Mui-focusVisible": {
        border: `1 solid ${primary?.main} !important`,
      },
    },
  },
};

export default radio;
