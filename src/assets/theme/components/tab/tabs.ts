import colors from "../../base/colors";

const { gray, white, dark } = colors;

// types
type Types = any;

const tabs: Types = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: white.main,
      minHeight: "unset",
      color: `${dark.main} !important`,
      borderBottom: `1px solid ${gray["400"]}`,
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 0,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    indicator: {
      height: "100%",
      transition: "all 500ms ease",
      "&.MuiTabs-indicator": {
        width: "100%",
        background: "none",
        color: `${dark.main} !important`,
        borderBottom: `4px solid ${dark.main}`,
      },
    },
  },
};

export default tabs;
