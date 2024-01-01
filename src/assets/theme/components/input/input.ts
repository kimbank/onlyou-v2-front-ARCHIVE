import colors from "../../base/colors";
import typography from "../../base/typography";

const {  gray3, primary ,black} = colors;
const { size } = typography;

// types
type Types = any;

const input: Types = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: black,
      width: "100%",
      border: `1px solid ${gray3}`,
      borderRadius: "6px",
      padding: "8px 16px",

      "&.Mui-focused:before": {
        borderBottom: "none",
      },

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      "&:before": {
        borderBottom: "none",
      },

      "&:after": {
        borderBottom: "none",
      },
    },
  },
};

export default input;
