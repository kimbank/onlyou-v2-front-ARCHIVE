import colors from "@/assets/theme/base/colors";
import { ViewColumn } from "@mui/icons-material";
import { Container, styled } from "@mui/material";

export default styled(Container)(({ theme }) => {
  const { black } = colors;
  return {
    ".button": {
      display: "flex",
      justifyContent: "space-between",
      height: "34px",
    },
    ".title-box": {
      paddingBottom: "24px",
      "& > :nth-child(2)": {
        marginTop: "9px",
      },
    },
    ".slider": {
      width: "100%",
      padding: "16px",
    },
    ".range-text": {
      display: "flex",
      justifyContent: "space-between",
    },
    ".content-box": {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    ".divider": {
      marginTop: "24px",
      marginBottom: "24px",
    },
    ".period-box": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "12px",
    },
    ".skeleton-box": {
      height: "40px",
    },
    ".info-box": {
      display: "flex",
      flexDirection: "column",
      gap: "9px",
      paddingTop: "16px",
    },
    ".location-box": {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginTop: "12px",
    },
    ".MuiTooltip-tooltip": {
      backgroundColor: black,
      color: "white",
    },
    ".tooltip": {
      backgroundColor: black,
      color: "black",
    },
    ".tooltip-text": {
      display: "flex",
      alignItems: "center",
      width:"116px",
      cursor:"pointer",
      "& > :nth-child(1)": {
        marginRight: "4px",
        width: "18px",
        height: "18px",
      },
      "& > :nth-child(2)": {
         textDecoration: 'underline',
      },
    },
    ".chip": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "8px",
      paddingTop: "12px",
    },
  };
});