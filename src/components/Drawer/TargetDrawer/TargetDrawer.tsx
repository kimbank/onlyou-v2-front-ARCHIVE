import { Box, Container, Typography ,Button,styled} from "@mui/material";

import { useRouter } from "next/navigation";
import DrawerFrame from "../DrawerFrame";
import DrawerButton from "../DrawerItem/DrawerButton";
import DrawerContent from "../DrawerItem/DrawerContent";
import DrawerTitle from "../DrawerItem/DrawerTitle";
import CloseIcon from "@mui/icons-material/Close";

interface DrawerProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  nextHref?:string;
}

export const TargetDrawer = ({ children, open, onClose, nextHref }: DrawerProps) => {
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
        <DrawerTitle>
          <Box className="drawer-title">
            <Typography variant="h1">
              이제 마지막 단계에요
              <br />
             조금만 힘내요!
            </Typography>
            <CloseIcon onClick={onClose} />
          </Box>
        </DrawerTitle>
        <DrawerContent>
          <Container className="drawer-contents">
            <Typography variant="body1">
              딱 맞는 이상형 꼭 찾아드릴게요.
            </Typography>
          </Container>
        </DrawerContent>
        <DrawerButton>
          <Container className="drawer-buttons">
            <Button
              color="primary"
              variant="contained"
              onClick={handleCompleteClick}
              size="large"
            >
              <Typography variant="body1">편지 작성하기</Typography>
            </Button>
          </Container>
        </DrawerButton>
      </DrawerRoot>
    </DrawerFrame>
  );
};


const DrawerRoot = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    gap: "16px",
    padding: "16px 0px 0px 0px ",
    maxWidth: "480px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    ".drawer-title": {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
    },
    ".drawer-contents": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      paddingBottom: "16px",
    },
    ".drawer-buttons": {
      width: "100%",
      padding: 0,
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
    },
  };
});
