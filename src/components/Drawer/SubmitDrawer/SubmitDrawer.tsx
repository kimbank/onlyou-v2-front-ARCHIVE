import { Box, Container, Typography ,Button} from "@mui/material";

import { useRouter } from "next/navigation";
import DrawerFrame from "../DrawerFrame";
import DrawerButton from "../DrawerItem/DrawerButton";
import DrawerContent from "../DrawerItem/DrawerContent";
import DrawerTitle from "../DrawerItem/DrawerTitle";
import SubmitDrawerRoot from "./SubmitDrawerRoot";
import CloseIcon from "@mui/icons-material/Close";

interface DrawerProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  nextHref?:string;
}

export const SubmitDrawer = ({ children, open, onClose, nextHref }: DrawerProps) => {
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
      <SubmitDrawerRoot>
        <DrawerTitle>
          <Box className="drawer-title">
            <Typography variant="h1">
              이제 회원님의
              <br />
              이상형을 알려주세요!
            </Typography>
            <CloseIcon sx={{cursor:"pointer"}} onClick={onClose} />
          </Box>
        </DrawerTitle>
        <DrawerContent>
          <Container className="drawer-contents">
            <Typography variant="body1">
              원하는 이상형 조건을 1, 2, 3순위 별로 선택해요
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
              <Typography variant="body1">이상형 정보 입력하기</Typography>
            </Button>
          </Container>
        </DrawerButton>
      </SubmitDrawerRoot>
    </DrawerFrame>
  );
};
