import { styled } from "@mui/material";

export const Container = styled("div")(
  {
  position: "fixed",
  bottom: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "480px",
  backgroundColor: "#fff",
  borderTop: "1px solid #D3D6DB",
  padding: "12px 24px 20px 24px",

  display: "flex",
  // flexDirection: "column",
  flexShrink: 0,
  // justifyContent: "space-between",
  // gap: "17px",

  "& .MuiButton-root": {
    minWidth: "",
    width: "100%",
  }
});

export default Container;
