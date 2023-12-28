import colors from "@/assets/theme/base/colors";
import { styled } from "@mui/system";

interface RDCheckBoxProps {
  checked?: boolean;
  width?: string;
}

export default styled("div")<RDCheckBoxProps>(({ theme, checked, width }) => {
  const { black } = colors;
  return {
    ".checkbox": {
      color: checked ? "#FF7700" : "#B2B0AE",
      border: "none",
      textAlign: "left",
      width: "24px",
      height: "24px",
    },
    ".checkbox-button": {
      borderRadius: "8px",
      height: "33px",
      width: width,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "10px",
      padding: 0,
    },
    ".checkbox-label": {
      fontFamily: "Pretendard-Semibold",
      fontSize: "14px",
      color: black,
      letterSpacing: "1.25px",
      textAlign: "left",
    },
  };
});
