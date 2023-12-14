import { theme } from "@/assets";
import { styled } from "@mui/material";

interface infoTextProps {
  shadow: boolean;
}
const { palette } = theme;
const { info } = palette;

export default styled("div")<infoTextProps>(({ theme, shadow }) => {
  return {
    ".info-text-button": {
      borderRadius: "8px",
      backgroundColor: info.main,
      padding: "16px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      gap: "8px",
    },
    ".info-icon": {
      marginRight: 1,
      color: "#FF7700",
    },
  };
});
