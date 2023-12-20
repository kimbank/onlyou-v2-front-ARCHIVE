import { styled } from "@mui/material";

export default styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "0px 24px",
    paddingTop: "48px",
    paddingBottom: "120px",

    ".title": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    "info": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
  };
});
