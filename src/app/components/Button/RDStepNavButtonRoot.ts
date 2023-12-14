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
    padding: "24px",
    paddingTop: "12px",
    paddingBottom: "10px",
    gap: "10px",
    ".button-box": {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "10px",
    },
    ".prevButton": {},
    " .nextButton": {},
  };
});
