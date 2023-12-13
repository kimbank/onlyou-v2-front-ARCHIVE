import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    ".letter-container": {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    ".letter-box": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%",
      padding: "0",
    },
    ".letter-box-values": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      padding: "0",
    },
  };
});
