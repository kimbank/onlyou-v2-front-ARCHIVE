import colors from "@/assets/theme/base/colors";
import { ViewColumn } from "@mui/icons-material";
import { Container, styled } from "@mui/material";

export default styled(Container)(({ theme }) => {
    const {primary ,info ,dark ,gray} = colors
    return {
      ".button": {
        display: "flex",
        justifyContent: "space-between",
        height: "64px",
      },
      ".title-box": {
        paddingBottom: "24px",
        "& > :nth-child(2)": {
          marginTop: "9px",
        },
      },
      ".button-container": {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        paddingBottom: "16px",
      },
      ".buttonText": {
        color: dark.main,
      },
      ".period-box": {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "108px",
        padding: "12px 20px",
        border: `1px solid ${dark.main}`,
        borderRadius: "6px",
        marginTop: "12px",
      },
      ".skeleton-box": {
        height: "40px",
      },
      ".info-box": {
        display: "flex",
        flexDirection: "column",
        gap: "9px",
        paddingTop: "12px",
      },
    };
})