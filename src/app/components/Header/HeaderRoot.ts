import { AppBar, styled } from "@mui/material";

export default styled(AppBar)(({ theme }) => {
  return {
    backgroundColor: "#FFFFFF",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "480px",
    left: "50%",
    transform: "translate(-50%, 0)",
    boxShadow: "0px 2px 8px -2px rgba(0, 0, 0, 0.25)",
    ".header-container": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingRight: "24px",
    },
    ".toolbar": {
      gap: 0.5,
      flexGrow: 1,
      marginTop: "6px",
      padding: "0 32px",
    },
    ".header-box": {
      display: "flex",
      gap: "24px",
      cursor: "pointer",
    },
    ".noti-box": {
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    ".chat-box": {
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  };
});
