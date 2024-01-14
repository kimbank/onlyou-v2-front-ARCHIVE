import Fade from "@mui/material/Fade";
import colors from "../../base/colors";
import typography from "../../base/typography";

const { black } = colors;
const { size } = typography;

type Types = any;

const tooltip: Types = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      display: "flex",
      flexDirection: "column",
      width: "calc(100% - 48px)",
      maxWidth: "480px",
      maxHeight: "384px",
      height: "auto",
      backgroundColor: "#f1f3f6",
      color: black,
      textAlign: "left",
      borderRadius: "6px",
      border: "1px solid #999DA3",
      padding: "16px 12px",
      fontSize: "12px",
    },

    arrow: {
      position: "absolute",
      left: 0,
      transform: "translateX(50%) !important",
      color: "#f1f3f6",
      "&::before": {
        border: "1px solid #999DA3",
      },
    },
  },
};

export default tooltip;
