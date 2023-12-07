import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "#FFF",
    maxWidth: "480px",
    borderTop: "1px solid #B2B0AE",
    paddingTop: "10px",
    paddingBottom: "10px",
    gap: "10px",
    ".prevButton": {
      flex: 1,
      borderRadius: "12px",
      height: "56px",
      color: "#FF7700",
      border: "1px solid #FF7700",
      backgroundColor: "#fff",
    },
    " .nextButton": {
      flex: 1,
      borderRadius: "12px",
      height: "56px",
      color: "black",
    },
  };
});
