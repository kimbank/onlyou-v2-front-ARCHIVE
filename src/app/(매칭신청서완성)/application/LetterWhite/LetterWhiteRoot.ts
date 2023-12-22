import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    ".letter-container": {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    ".letter-box": {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%",
      padding: "0",
      paddingBottom: "60px",
    },
    ".letter-box-values": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      padding: "0",
    },
  };
});
