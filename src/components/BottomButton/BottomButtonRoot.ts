import { styled } from "@mui/material";


export default styled("div")({
  position: "fixed",
  bottom: "0px",
  // left: "50%",
  // transform: "translateX(-50%)",
  zIndex: "10",
  width: "100%",
  height: "84px",
  maxWidth: "480px",
  backgroundColor: "#fff",
  borderTop: "1px solid #D3D6DB",
  padding: "12px 24px 20px 24px",

  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  gap: "17px",

  "& .MuiButton-root": {
    minWidth: "",
    width: "100%",
  }
});
