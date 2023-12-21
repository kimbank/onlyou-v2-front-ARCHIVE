import { theme } from "@/assets";
import { styled } from "@mui/material";

interface infoTextProps {
  shadow: boolean;
}
const { palette } = theme;
const { info, primary, white } = palette;
export default styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: info.main,
    borderRadius: "12px",
    gap: "23px",
    height: "342px",
    marginTop: "24px",
    paddingTop: "21px",

    ".subhead": {
      textAlign: "center",
      alignItems: "center",
      fontSize: "20px",
      fontWeight: "bold",
    },

    ".timeline-container": {
      width: "248px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 0,
      
    },

    ".timeline-item": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      width: "33%",
      "&:nth-of-type(2)": {
        marginRight: theme.spacing(3), // 10px (기본 테마에서 spacing(1)은 대략 8px입니다)
      },
    },

    ".info-icon": {
      marginRight: 1,
      color: "#FF7700",
    },

    ".timeline-number": {
      width: 24,
      height: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: primary.main,
      fontSize: "12px",
      color: white.main,
      borderRadius: "50%",
      marginBottom: theme.spacing(1),
    },

    ".timeline-content": {
      color: primary.main,
      whiteSpace: "nowrap",
    },

    ".timeline-arrow": {
      position: "relative",
      marginBottom: theme.spacing(4),
    },
  };
});
