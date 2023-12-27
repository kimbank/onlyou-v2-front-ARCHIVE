import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    display: "block",
    paddingTop: "56px",

    ".header-container": {
      position: "fixed",
      top: 0,
      transform: "translateY(0px)",
      width: "100%",
      maxWidth: "480px",
      zIndex: 1000,
    },

    ".header": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 24px",

      height: "56px",
      backgroundColor: "#fff",
      boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
    },

    ".header-box": {
      display: "flex",
      gap: "20px",
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
    "& .MuiSvgIcon-root": {
      verticalAlign: "middle",
    },
    ".closeIcon": {
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  };
});
