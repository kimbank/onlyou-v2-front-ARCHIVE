import { styled, SwipeableDrawer } from "@mui/material";

export default styled(SwipeableDrawer)(({ theme }) => {
  return {
    ".MuiDrawer-paperAnchorBottom": {
      display: "flex",
      width: "100%",
      maxWidth: "480px",
      padding: "24px 24px 20px 24px",
      alignItems: "flex-start",
      alignContent: "flex-start",
      gap: "16px",
      margin: "auto",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      maxHeight: "90vh",
    },
  };
});
