import { styled, SwipeableDrawer } from "@mui/material";

export default styled(SwipeableDrawer)(({ theme }) => {
  return {
    ".MuiDrawer-paperAnchorBottom": {
      borderRadius: "12px 12px 0px 0px",
      maxWidth: "480px",
      margin: "auto",
      width: "100%",
      maxHeight: "245px",
    },
    ".Drawer-box": {
      position: "relative",
      height: 245,
      boxShadow: 24,
      padding: "24px 24px 20px 24px",
      borderRadius: "10px",
    },
  };
});
