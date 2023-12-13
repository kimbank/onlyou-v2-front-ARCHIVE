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
      gap: "10px",
      width: "100%",
      padding: "0",
    },
  };
});
