import { Container, styled } from "@mui/material";

export default styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: " 0 24px",
    ".title-box": {
      gap: "0px",
    },
    ".life-radio": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      padding: "0",
      gap: "12px",
      margin: 0,
      opacity: 0,
      transform: "translateY(20px)",
      visibility: "hidden",
      transition:
        "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.5s",
    },
    ".life-radio.visible": {
      opacity: 1,
      transform: "translateY(0)",
      visibility: "visible",
    },
    ".life-chip": {
      display: "flex",
      flexDirection: "column",
      opacity: 0,
      transform: "translateY(20px)",
      visibility: "hidden",
      transition:
        "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.5s",
    },
    ".life-chip.show-chip": {
      opacity: 1,
      transform: "translateY(0)",
      visibility: "visible",
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
