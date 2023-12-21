import colors from "@/assets/theme/base/colors";
import { ViewColumn } from "@mui/icons-material";
import { Container, styled } from "@mui/material";

export default styled(Container)(({ theme }) => {
    const {primary ,info ,dark ,gray} = colors
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
      ".buttonText": {
        color: dark.main,
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
        marginTop:"12px",
      },
      ".MuiTooltip-tooltip": {
        backgroundColor: dark.main, // 배경색 지정
        color: "white", // 글자색 지정
      },
      ".tooltip": {
        backgroundColor: dark.main,
        color: "black",
      },
      ".tooltip-text": {
        display: "flex",
        alignItems: "center",
      },
      ".chip": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "8px",
        paddingTop: "12px",
      },
    };
})