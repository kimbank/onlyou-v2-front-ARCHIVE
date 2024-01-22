import colors from "../../base/colors";

const { primary, primary_lighten3 } = colors;
const filled = {
  medium: {
    dispaly: "inline-flex",
    padding: "8px 12px",
    alignItems: "center",
    gap: "8px",

    textAlign: "center",
    fontSize: "14px",
    fontStyle: "normal",
  },

  default: {
    backgroundColor: "#F1F3F6",
    color: "#3B3C3F",
    fontWeight: "400",
    "&:hover": {
      boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
      opacity: 0.75,
      backgroundColor: "#F1F3F6",
    },
  },
  primary: {
    backgroundColor: "#F70",
    color: "#FFF",
    fontWeight: "600",
    "&:hover": {
      boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
      backgroundColor: "#F16416",
    },
  },
  secondary: {
    backgroundColor: primary_lighten3,
    color: primary?.main,
    fontWeight: "600",
  },
};

export default filled;
