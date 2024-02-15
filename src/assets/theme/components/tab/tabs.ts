import colors from "../../base/colors";

const {  white, black, gray4 } = colors;

// types
type Types = any;

const tabs: Types = {
  styleOverrides: {
    root: {
      // position: "relative",
      backgroundColor: white,
      // minHeight: "unset",
      color: `${black} !important`,
      // borderBottom: `1px solid ${gray4}`,
    },

    flexContainer: {
      // height: "100%",
      // position: "relative",
      zIndex: 0,
      // borderBottom: `1px solid ${gray4}`,
    },

    fixed: {
      // overflow: "unset !important",
      // overflowX: "unset !important",
      borderBottom: `1px solid ${gray4}`,
    },

    indicator: {
      height: "100%",
      transition: "all 500ms ease",
      "&.MuiTabs-indicator": {
        width: "100%",
        background: "none",
        color: `${black} !important`,
        borderBottom: `4px solid ${black}`,
      },
    },
  },
};

export default tabs;
