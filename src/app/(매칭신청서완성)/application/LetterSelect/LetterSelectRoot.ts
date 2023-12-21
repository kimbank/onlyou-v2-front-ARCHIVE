import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    ".letter-container": {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    ".info-icon": {
      marginRight: 1,
      color: "#FF7700",
    },
    ".letter-box": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      padding: "0",
    },
  };
});
