import { theme } from "@/assets";
import colors from "@/assets/theme/base/colors";
import { styled } from "@mui/material";

interface infoTextProps {
  shadow: boolean;
}
const { info } = colors;

export default styled("div")<infoTextProps>(({ theme, shadow }) => {
  return {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDicetion: "colmun",
    borderRadius: "8px",
    backgroundColor: info.focus,
    padding: "16px 12px",
    width: "100%",
    gap: "8px",
    marginTop: "12px",
    marginBottom: "24px",
    ".info-text-button": {},
    ".info-icon": {
      color: "#FF7700",
    },
  };
});
