import { Button, Container, styled, Typography } from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRouter } from "next/navigation";
import DrawerFrame from "../DrawerFrame";
import DrawerButton from "../DrawerItem/DrawerButton";

interface DrawerProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  nextHref?: string;
}

export const TargetDrawer = ({
  children,
  open,
  onClose,
  nextHref,
}: DrawerProps) => {
  const router = useRouter();

  const handleCompleteClick = () => {
    if (nextHref) {
      router.push(nextHref);
    } else {
      router.push("/Complete");
    }
  };

  return (
    <DrawerFrame open={open} onClose={onClose}>
      <DrawerRoot>
        <Typography
          variant="h1"
          sx={{ display: "inline", maxWidth: "calc(100% - 36px)" }}
        >
          이제 마지막 단계에요
          <br />
          조금만 힘내요!
        </Typography>
        <Typography variant="body1" sx={{ display: "inline" }}>
          딱 맞는 이상형 꼭 찾아드릴게요.
        </Typography>
        <CloseRoundedIcon
          sx={{ cursor: "pointer", fontSize: "28px" }}
          className="drawer-icon"
          onClick={onClose}
        />
      </DrawerRoot>
      <DrawerButton>
        <Button
          color="primary"
          variant="contained"
          onClick={handleCompleteClick}
          size="large"
        >
          <Typography variant="subtitle1">편지 작성하기</Typography>
        </Button>
      </DrawerButton>
    </DrawerFrame>
  );
};

const DrawerRoot = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: "0",
    gap: "16px",
    padding: "16px 0",
    justifyContent: "flex-start",
    maxWidth: "480px",

    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },

    ".drawer-icon": {
      position: "absolute",
      top: "24px",
      right: "24px",
    },
  };
});
