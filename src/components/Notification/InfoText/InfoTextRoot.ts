import { theme } from "@/assets";
import colors from "@/assets/theme/base/colors";
import { styled } from "@mui/material";

interface infoTextProps {
  shadow: boolean;
  bgColor?: "primary" | "secondary";
}

const { info } = colors;


export default styled("div")<infoTextProps>(({ theme, shadow,bgColor }) => {
  return {
    ".info-text-button": {
      borderRadius: "8px",
      backgroundColor: bgColor === "primary" ? info.focus : info.main,
      padding: "16px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      gap: "8px",
    },

  };
});
