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
    ".value-radio": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      padding: "0",
      gap: "12px",
      margin: 0,
    },
    ".value-chip": {
      display: "flex",
      flexDirection: "column",
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
