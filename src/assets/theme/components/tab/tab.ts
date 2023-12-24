
import colors from "../../base/colors";
import typography from "../../base/typography";

const { size, fontWeightRegular } = typography;
const { dark, white } = colors;

// types
type Types = any;

const tab: Types = {
  styleOverrides: {
    root: {
    zIndex:20,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      color: `${dark.main} !important`,
      opacity: "1 !important",
      "&.Mui-selected": {
        color: `${dark.main} !important`,
        fontWeight: "bold",
        "&.MuiTabs-indicator": {
          width: "100%",
        },
      },
    },
  },
};

export default tab;