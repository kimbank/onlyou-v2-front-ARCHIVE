import { Box, Button, Container, Typography } from "@mui/material";
import ModalFrame from "../ModalFrame";
import ModalButton from "../modalItem/ModalButton";
import ModalContent from "../modalItem/ModalContent";
import ModalTitle from "../modalItem/ModalTitle";
import { useRouter } from "next/navigation";

interface ModalProps {
  children?: React.ReactNode;
  open: any;
  onClose: () => void;
}

export const TargetingModal = ({ children, open, onClose }: ModalProps) => {
  const router = useRouter();

  const handleCompleteClick = () => {
    router.push("/myinfo");
  };

  return (
    <ModalFrame open={open} onClose={onClose}>
      <TargetingModalRoot>
        <ModalTitle>
          <Typography variant="subtitle1">
            상세 설정되지 않은 조건이 있어요.
          </Typography>
        </ModalTitle>
        <ModalContent>
          <Box className="modal-contents">
            <Typography variant="body2">
              상세 설정되지 않은 조건은 매칭에 반영되지않아요
              <br />
              상세 설정하지 않고 그냥 나가시겠어요?
            </Typography>
          </Box>
        </ModalContent>
        <ModalButton>
          <Box className="modal-buttons">
            <Button variant="outlined" onClick={onClose}>
              <Typography variant="subtitle2">취소</Typography>
            </Button>
            <Button variant="contained" onClick={handleCompleteClick}>
              <Typography color="white" variant="subtitle2">
                나가기
              </Typography>
            </Button>
          </Box>
        </ModalButton>
      </TargetingModalRoot>
    </ModalFrame>
  );
};
import { styled } from "@mui/material";

const TargetingModalRoot = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    gap: "12px",
    height: 114,
    "& > :nth-child(3)": {
      marginTop: "12px",
    },
    ".modal-buttons": {
      display: "flex",
      gap: "12px",
      justifyContent: "flex-end",
    },
  };
});
