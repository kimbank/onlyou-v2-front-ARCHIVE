import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    ".letter-box": {
      display: "flex",
      flexDirection: "column",
      marginTop: "10px",
      gap: "8px",
      width: "100%",
    },
  };
});
