import { Container, styled } from "@mui/material";

export default styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    gap: "16px",
    padding: "16px 0px 0px 0px ",
    maxWidth: "480px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    ".drawer-title": {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
    },
    ".drawer-contents": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      paddingBottom: "16px",
    },
    ".drawer-buttons": {
      width: "100%",
      padding: 0,
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
    },
  };
});
