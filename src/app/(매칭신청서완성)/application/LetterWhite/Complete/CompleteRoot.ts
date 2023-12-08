import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    height: "100%",

    ".complete-title": {
      fontWeight: "bold",
      textAlign: "center",
    },
    ".complete-caption": {
      textAlign: "center",
    },
  };
});
