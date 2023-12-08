import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    ".complete-title": {
      fontWeight: "bold",
      textAlign: "center",
    },
    ".complete-caption": {
      textAlign: "center",
    },
  };
});
