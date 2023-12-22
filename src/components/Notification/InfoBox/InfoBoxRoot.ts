import { theme } from "@/assets";
import colors from "@/assets/theme/base/colors";
import { styled } from "@mui/material";

interface infoTextProps {
  textAlign?: "center" | "left";
  align?: "center" | "left";
  marginB?: "bottom" | "none";
  bgColor?: "primary" | "secondary";
}
const { info } = colors;

export default styled("div")<infoTextProps>(({
  theme,
  align,
  textAlign,
  marginB,
  bgColor,
}) => {
  return {
    display: "flex",
    textAlign: textAlign === "center" ? "center" : "left",
    alignItems: "center",
    justifyContent: align === "center" ? "center" : "flex-start",
    flexDicetion: "colmun",
    borderRadius: "8px",
    backgroundColor: bgColor === "primary" ? info.focus : info.main,
    padding: "12px 16px",
    width: "100%",
    gap: "8px",
    marginTop: marginB === "bottom" ? "12px" : "0px",
    marginBottom: marginB === "bottom" ? "24px" : "0px",
    ".info-text-button": {
      width: "100%",
    },
    ".info-icon": {
      color: "#FF7700",
    },
  };
});
