import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    gap: "11px",
    ".modal-contents": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
    },
    ".modal-buttons": {
      width: "100%",
      padding: 0,
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
    },
  };
});
