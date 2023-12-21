import Fade from "@mui/material/Fade";
import colors from "../../base/colors";
import typography from "../../base/typography";


const { black, light ,dark} = colors;
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
      margin: "auto",
      width: "90%",
      maxWidth: "480px",
      height: "384px",
      backgroundColor: "#f1f3f6",
      color: dark.main,
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