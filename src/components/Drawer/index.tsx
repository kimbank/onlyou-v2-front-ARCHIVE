
import Image from "next/image";
import CancelIcon from "public/icons/cancel.svg";
import { styled, Typography, Drawer, Button } from "@mui/material";

interface Props {
  title?: string | React.ReactNode;
  body?: string | React.ReactNode;
  complete?: string | React.ReactNode;
  onComplete?: () => void;

  open: boolean;
  onClose?: () => void;
}

const DrawerComp = ({
  title = "",
  body = "",
  complete = "",
  onComplete = () => {},

  open,
  onClose = () => {},
}: Props) => {
  return (
    <StyledDrawer open={open} onClose={onClose} anchor="bottom">
      <span className="close-icon" onClick={onClose}>
        <Image src={CancelIcon} alt="close" />
      </span>
      <div className="drawer-content">
        <Typography variant="h1" className="drawer-content-title">{title}</Typography>
        <Typography variant="body1">{body}</Typography>
        </div>
      <Button variant="contained" size="large" onClick={onComplete}>
        {complete}
      </Button>
    </StyledDrawer>
  );
};

const StyledDrawer = styled(Drawer)({
  width: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  maxWidth: "480px",

  "& .MuiDrawer-paper": {
    height: "auto",
    padding: "24px 24px 20px 24px",
    borderRadius: "12px 12px 0 0",

    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  "& .drawer-content": {
    display: "flex",
    padding: "16px 0px",
    flexDirection: "column",
    gap: "16px",

    "& .drawer-content-title": {
      maxWidth: "calc(100% - 36px)",
    },
  },

  "& .close-icon": {
    position: "absolute",
    top: "24px",
    right: "24px",
    cursor: "pointer",
  },
});

export default DrawerComp;
